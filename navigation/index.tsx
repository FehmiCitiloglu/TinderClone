import React, {ReactNode} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../types';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home.screen';
import ExploreScreen from '../screens/Explore.screen';
import Likes from '../screens/Likes.screen';
import Messages from '../screens/Messages.screen';
import {TinderIcon} from '../assets/svg';
import Profile from '../screens/Profile.screen';
import {colors} from '../values/colors';
import {Header} from '../components';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerTitle: (_props): ReactNode => {
            return <Header />;
          },
          tabBarShowLabel: false,
        }}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused, color}) => {
              return <TinderIcon color={focused ? colors.tinder : color} />;
            },
          }}
        />
        <BottomTab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return <TinderIcon color={focused ? colors.tinder : color} />;
            },
          }}
        />
        <BottomTab.Screen
          name="Likes"
          component={Likes}
          options={{
            tabBarIcon: ({focused, color}) => {
              return <TinderIcon color={focused ? colors.tinder : color} />;
            },
          }}
        />
        <BottomTab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarIcon: ({focused, color}) => {
              return <TinderIcon color={focused ? colors.tinder : color} />;
            },
          }}
        />
        <BottomTab.Screen name="Profile" component={Profile} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
