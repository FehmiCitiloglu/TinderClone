import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TinderIcon} from '../../assets/svg';
import {TinderText} from '../Text';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <TinderIcon />
      </View>
      <TinderText text={'tinder'} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
});
