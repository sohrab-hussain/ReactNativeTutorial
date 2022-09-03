/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeView } from './screens/Home';
import { Profile } from './screens/Profile';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    /*
      Navigation Container should be set normaly at the root of the application.
     */
    <NavigationContainer >
      {/*
        Stack navigator is used to creat the stacks of all the screens.
      */}
      <Stack.Navigator>
        <Stack.Screen name="HomeView" component={HomeView} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
