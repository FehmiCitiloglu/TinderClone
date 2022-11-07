import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Likes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Likes</Text>
    </View>
  );
};

export default Likes;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    color: 'red',
  },
});
