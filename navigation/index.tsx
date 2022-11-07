import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../types';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home.screen';
import ExploreScreen from '../screens/Explore.screen';
import {Text, View} from 'react-native';
import Likes from '../screens/Likes.screen';
import Messages from '../screens/Messages.screen';
import {TinderIcon} from '../assets/svg';
import Profile from '../screens/Profile.screen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerTitle: (_props): ReactNode => {
            return (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <TinderIcon />
                </View>
                <Text
                  style={{
                    color: 'red',
                    marginLeft: 5,
                    fontSize: 24,
                    fontWeight: '500',
                  }}>
                  tinder
                </Text>
              </View>
            );
          },
        }}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={
            {
              /*       tabBarIcon: ({focused, color}) => {
              return (
                <Fontisto
                  name="tinder"
                  color={focused ? 'red' : color}
                  size={24}
                />
              );
            }, */
            }
          }
        />
        <BottomTab.Screen
          name="Explore"
          component={ExploreScreen}
          /*   options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Fontisto
                  name="tinder"
                  color={focused ? 'red' : color}
                  size={24}
                />
              );
            },
          }} */
        />
        <BottomTab.Screen
          name="Likes"
          component={Likes}
          /*   options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Fontisto
                  name="tinder"
                  color={focused ? 'red' : color}
                  size={24}
                />
              );
            },
          }} */
        />
        <BottomTab.Screen
          name="Messages"
          component={Messages}
          /*    options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <Ionicons
                  name="md-chatbubbles-sharp"
                  color={focused ? 'red' : color}
                  size={24}
                />
              );
            },
          }} */
        />
        <BottomTab.Screen name="Profile" component={Profile} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
