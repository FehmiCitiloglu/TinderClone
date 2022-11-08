import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AnimatedCard} from '../components/Card';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AnimatedCard />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
