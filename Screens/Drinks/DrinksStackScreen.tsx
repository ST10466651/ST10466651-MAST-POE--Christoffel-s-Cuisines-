import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrinksScreen from './DrinksScreen';
import WineScreen from './WineScreen';
import CocktailsScreen from './CocktailsScreen';
import SpiritsScreen from './SpiritsScreen';
import BeveragesScreen from './BeveragesScreen';
import { useData } from '../../DataContext';



export type DrinksStackParamList = {
  DrinksMain: undefined;
  Wine: undefined;
  Cocktails: undefined;
  Spirits: undefined;
  Beverages: undefined;
};

const Stack = createStackNavigator<DrinksStackParamList>();

export default function DrinksStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrinksMain" component={DrinksScreen} />
      <Stack.Screen name="Wine" component={WineScreen} />
      <Stack.Screen name="Cocktails" component={CocktailsScreen} />
      <Stack.Screen name="Spirits" component={SpiritsScreen} />
      <Stack.Screen name="Beverages" component={BeveragesScreen} />
    </Stack.Navigator>
  );
}
