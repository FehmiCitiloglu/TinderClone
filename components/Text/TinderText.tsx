import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../values/colors';

const TinderText = ({text}: {text: string}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TinderText;

const styles = StyleSheet.create({
  text: {
    color: colors.tinder,
    marginLeft: 5,
    fontSize: 24,
    fontWeight: '500',
  },
});
