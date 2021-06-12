import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home'
import ItemInfo from '../Screens/ItemInfo';
import Album from '../Screens/Album';

const Stack = createStackNavigator();

export default () => {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }, {headerMode: 'none'}, {headerShown: false}} />
          <Stack.Screen name="ItemInfo" component={ItemInfo} options={{ title: 'ItemInfo'}, {headerMode: 'none'}, {headerShown: false}} />
          <Stack.Screen name="Album" component={Album} options={{ title: 'Album'}, {headerMode: 'none'}, {headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

