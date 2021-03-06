import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home';
import { colors } from '../helpers/constants';
import ProfileScreen from '../screens/Profile';
import Icon from '../components/common/Icon';
import GitLink from '../screens/WebView';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'JavaScript developers from Kigali',
        headerStyle: {
          backgroundColor: colors().primary
        },
        headerTintColor: colors().secondary,
        headerRight: (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10
            }}
            activeOpacity={0.5}
          >
            <Icon name="search" color={colors().secondary} size={25} />
          </TouchableOpacity>
        )
      }
    },
    Profile: { screen: ProfileScreen },
    GitHub: {
      screen: GitLink,
      navigationOptions: {
        headerStyle: {
          backgroundColor: colors().primary,
          borderBottomColor: 'transparent',
          borderBottomWidth: 0,
          shadowColor: 'transparent',
          elevation: 0
        },
        headerTintColor: colors().secondary
      }
    }
  },
  { initialRouteName: 'Home' }
);

export default createAppContainer(AppNavigator);
