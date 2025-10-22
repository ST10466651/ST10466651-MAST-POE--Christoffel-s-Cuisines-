import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StarterScreen from './StarterScreen';
import MainScreen from './MainScreen';
import DessertScreen from './DessertScreen';
import SpecialsScreen from './SpecialsScreen';
import MenuScreen from './MenuScreen';


export type MenuStackParamList = {
  MenuMain: undefined;
  Starter: undefined;
  Main: undefined;
  Dessert: undefined;
  Specials: undefined;
};

const Stack = createStackNavigator<MenuStackParamList>();

export default function MenuStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MenuMain" component={MenuScreen} />
      <Stack.Screen name="Starter" component={StarterScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Dessert" component={DessertScreen} />
      <Stack.Screen name="Specials" component={SpecialsScreen} />
    </Stack.Navigator>
  );
}
