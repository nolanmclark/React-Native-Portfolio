import React from "react";
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import About from '../screens/About';

export const WelcomeStack = StackNavigator({
  Welcome: {
    screen: Welcome,
  }
}, {
    mode: 'modal',
    headerMode: 'none'
});

export const Root = StackNavigator({
  Welcome: {
    screen: WelcomeStack,
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Projects',
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'About',
    },
  }
}, {
  mode: 'modal',
});

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  }
});
