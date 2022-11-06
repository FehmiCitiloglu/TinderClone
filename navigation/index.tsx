import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../types';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home.screen';
import ExploreScreen from '../screens/Explore.screen';
import Icon from 'react-native-vector-icons/Fontisto';
import {Text, View} from 'react-native';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerTitle: (_props): ReactNode => {
            return (
              <View style={{flexDirection: 'row'}}>
                <Icon name="tinder" />
                <Text style={{color: 'red', marginLeft: 5}}>Tinder</Text>
              </View>
            );
          },
        }}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon name="tinder" color={focused ? 'red' : color} size={24} />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Icon name="tinder" color={focused ? 'red' : color} size={24} />
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
