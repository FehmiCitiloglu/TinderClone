import {
  Animated,
  LayoutAnimation,
  PanResponder,
  StyleSheet,
  UIManager,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {OutlineButton} from '../Button';
import {
  CloseIcon,
  HeartIcon,
  LightningIcon,
  RefreshIcon,
  StarIcon,
} from '../../assets/svg';
import {colors} from '../../values/colors';
import Card from './Card';
import {getValueByScreenWidth} from '../../utils/window-sizes';

const AnimatedCard = () => {
  const position = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > getValueByScreenWidth(25)) {
          forceSwipe('right');
        } else if (gestureState.dx < -getValueByScreenWidth(25)) {
          forceSwipe('left');
        } else {
          resetPosition();
        }
        Animated.spring(position, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.spring();
  }, []);

  const onSwipeComplete = (_direction: 'left' | 'right'): void => {
    position.setValue({x: 0, y: 0});
  };

  function resetPosition() {
    Animated.spring(position, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
  }

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [
        -getValueByScreenWidth(100) * 1.5,
        0,
        getValueByScreenWidth(100) * 1.5,
      ],
      outputRange: ['-120deg', '0deg', '120deg'],
    });
    return {...position.getLayout(), transform: [{rotate}]};
  };

  function forceSwipe(direction: 'left' | 'right') {
    const x =
      direction === 'right'
        ? getValueByScreenWidth(100)
        : -getValueByScreenWidth(100);

    Animated.timing(position, {
      toValue: {x, y: 0},
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      onSwipeComplete(direction);
    });
  }

  return (
    <>
      <Animated.View style={getCardStyle()} {...panResponder.panHandlers}>
        <Card />
      </Animated.View>
      <View style={styles.buttonsRootContainer}>
        <View style={styles.buttonsContainer}>
          <OutlineButton
            Icon={RefreshIcon}
            color={colors.white}
            size="s"
            iconWidth={16}
            iconHeight={16}
            onPress={() => null}
          />
          <OutlineButton
            Icon={CloseIcon}
            color={colors.tinder}
            iconWidth={36}
            iconHeight={36}
            size="l"
            onPress={() => {
              forceSwipe('left');
            }}
          />
          <OutlineButton
            Icon={StarIcon}
            color={colors.blue}
            size="s"
            onPress={() => null}
          />
          <OutlineButton
            Icon={HeartIcon}
            color={colors.green}
            size="l"
            onPress={() => {
              forceSwipe('right');
            }}
            iconWidth={30}
            iconHeight={30}
          />
          <OutlineButton
            Icon={LightningIcon}
            color={colors.purple}
            size="s"
            onPress={() => null}
          />
        </View>
      </View>
    </>
  );
};

export default AnimatedCard;

const styles = StyleSheet.create({
  buttonsRootContainer: {
    position: 'absolute',
    bottom: 5,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
