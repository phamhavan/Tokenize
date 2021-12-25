import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MarketsScreen from './screens/MarketsScreen';
import MoreScreeen from './screens/MoreScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import WalletScreen from './screens/WalletScreen';
import {Image} from 'react-native-elements/dist/image/Image';
import {StyleSheet} from 'react-native';
import Size from './sizes/Size.json';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Markets'}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: Size.fontBase,
            color: 'rgba(145, 148, 187, 1)',
          },
          tabBarIcon: () => {
            return (
              <Image
                source={require('./images/icons/ic_home.png')}
                style={styles.imageButton}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Markets"
        component={MarketsScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: Size.fontBase,
            color: 'rgba(89, 122, 244, 1)',
          },
          tabBarIcon: () => {
            return (
              <Image
                source={require('./images/icons/ic_market.png')}
                style={styles.imageButton}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: Size.fontBase,
            color: 'rgba(145, 148, 187, 1)',
          },
          tabBarIcon: () => {
            return (
              <Image
                source={require('./images/icons/ic_wallet.png')}
                style={styles.imageButton}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: Size.fontBase,
            color: 'rgba(145, 148, 187, 1)',
          },
          tabBarIcon: () => {
            return (
              <Image
                source={require('./images/icons/ic_portfolio.png')}
                style={styles.imageButton}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreeen}
        options={{
          tabBarLabelStyle: {
            fontSize: Size.fontBase,
            color: 'rgba(145, 148, 187, 1)',
          },
          tabBarIcon: () => {
            return (
              <Image
                source={require('./images/icons/ic_more.png')}
                style={styles.imageButton}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const RootApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  imageButton: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
});
export default RootApp;
