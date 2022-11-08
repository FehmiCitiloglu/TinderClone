import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {TinderIcon} from '../assets/svg';
import {colors} from '../values/colors';
import {OutlineButton} from '../components/Button';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <OutlineButton
        Icon={TinderIcon}
        color={colors.purple}
        size="l"
        onPress={() => null}
      />
      <OutlineButton
        Icon={TinderIcon}
        color={colors.purple}
        size="s"
        onPress={() => null}
      />
    </View>
  );
};

export default Home;

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
