import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  getValueByScreenHeight,
  getValueByScreenWidth,
} from '../../utils/window-sizes';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: getValueByScreenHeight(70),
    width: getValueByScreenWidth(90),
    borderRadius: 10,
    backgroundColor: 'red',
  },
});
