import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // ✅ For icons
import { StyleSheet } from 'react-native';

// Screens
import HomeScreen from './Screens/HomeScreen';
import MenuScreen from './Screens/MenuScreen';
import EditMenuScreen from './Screens/EditMenuScreen';

import DrinksScreen from './Screens/Drinks/DrinksScreen';
import WineScreen from './Screens/Drinks/WineScreen';
import CocktailsScreen from './Screens/Drinks/CocktailsScreen';
import SpiritsScreen from './Screens/Drinks/SpiritsScreen';
import BeveragesScreen from './Screens/Drinks/BeveragesScreen';

// Tab and Stack navigators
const Tab = createBottomTabNavigator();
import { createStackNavigator } from '@react-navigation/stack';
const DrinksStack = createStackNavigator();

// Nested Drinks stack
function DrinksStackScreen() {
  return (
    <DrinksStack.Navigator screenOptions={{ headerShown: false }}>
      <DrinksStack.Screen name="DrinksMain" component={DrinksScreen} />
      <DrinksStack.Screen name="Wine" component={WineScreen} />
      <DrinksStack.Screen name="Cocktails" component={CocktailsScreen} />
      <DrinksStack.Screen name="Spirits" component={SpiritsScreen} />
      <DrinksStack.Screen name="Beverages" component={BeveragesScreen} />
    </DrinksStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 10,
            height: 60,
            paddingBottom: 5,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Drinks') iconName = focused ? 'wine' : 'wine-outline';
            else if (route.name === 'Menu') iconName = focused ? 'restaurant' : 'restaurant-outline';
            else if (route.name === 'EditMenu') iconName = focused ? 'add-circle' : 'add-circle-outline';

            return <Ionicons name={iconName} size={focused ? 30 : 24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* Drinks tab now uses nested stack */}
        <Tab.Screen name="Drinks" component={DrinksStackScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="EditMenu" component={EditMenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#b6b6b6ff',
    borderTopWidth: 0,
    elevation: 15,
    height: 65,
    paddingBottom: 5,
  },
});
