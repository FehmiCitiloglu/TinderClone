import {StyleSheet, Pressable, View, Animated, UIManager} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  getValueByScreenHeight,
  getValueByScreenWidth,
} from '../../utils/window-sizes';

const IMAGES = [
  require('../../assets/images/jessika.jpg'),
  require('../../assets/images/justyna.jpg'),
  require('../../assets/images/nida.jpg'),
  require('../../assets/images/polina.jpg'),
];

const Card = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [errorAnimation, setErrorAnimation] = useState({});

  const flipAnimation = useRef(new Animated.Value(0)).current;

  const handleNextImage = () => {
    if (currentImageIndex === IMAGES.length - 1) {
      setErrorAnimation({
        transform: [
          {
            rotateY: flipAnimation.interpolate({
              inputRange: [0, 15, 45],
              outputRange: ['0deg', '-25deg', '0deg'],
            }),
          },
        ],
      });
      Animated.timing(flipAnimation, {
        toValue: 45,
        duration: 500,
        useNativeDriver: false,
      }).start();
      return;
    }

    setCurrentImageIndex(prevIndex => (prevIndex += 1));
  };

  const handlePreviousImage = () => {
    if (currentImageIndex < 1) {
      setErrorAnimation({
        transform: [
          {
            rotateY: flipAnimation.interpolate({
              inputRange: [0, 15, 45],
              outputRange: ['0deg', '25deg', '0deg'],
            }),
          },
        ],
      });
      Animated.timing(flipAnimation, {
        toValue: 45,
        duration: 500,
        useNativeDriver: false,
      }).start();
      return;
    }

    setCurrentImageIndex(prevIndex => (prevIndex -= 1));
  };

  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  });

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.pressable, styles.rightPressable]}
        onPress={() => {
          handleNextImage();
        }}
        onPressOut={() => {
          Animated.timing(flipAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
          }).start();
        }}
      />
      <Pressable
        style={[styles.pressable, styles.leftPressable]}
        onPress={() => {
          handlePreviousImage();
        }}
        onPressOut={() => {
          Animated.timing(flipAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
          }).start();
        }}
      />
      <Animated.Image
        style={[styles.image, errorAnimation]}
        source={IMAGES[currentImageIndex]}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: getValueByScreenHeight(70),
    width: getValueByScreenWidth(95),
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    borderRadius: 10,
  },
  pressable: {
    position: 'absolute',
    zIndex: 2,
    width: '50%',
    height: '100%',
    opacity: 0.5,
  },
  rightPressable: {
    right: 0,
  },
  leftPressable: {
    left: 0,
  },
});
