import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from './types';
import {NavigationContainer} from '@react-navigation/native';
import LinkingConfiguration from './LinkingConfiguration';
import {Fontisto} from 'react-native-vector-icons';

const Navigation = () => {
  return <NavigationContainer linking={LinkingConfiguration} />;
};

export default Navigation;

const BottomTab = createBottomTabNavigator<RootTabParamList>();
