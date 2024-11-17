import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootScreen from './screens/RootScreen';

const linking = {
  prefixes: ['https://yourapp.com', 'yourapp://'],
  config: {
    screens: {
      Root: {
        screens: {
          Home: 'home',
          Nested: 'nested',
        },
      },
    },
  },
};

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Root" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={RootScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}