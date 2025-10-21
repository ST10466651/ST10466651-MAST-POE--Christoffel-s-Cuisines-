import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AppDataProvider } from './DataContext'; 
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './Screens/HomeScreen';
import EditMenuScreen from './Screens/EditMenuScreen';

// Drinks
import DrinksScreen from './Screens/Drinks/DrinksScreen';
import WineScreen from './Screens/Drinks/WineScreen';
import CocktailsScreen from './Screens/Drinks/CocktailsScreen';
import SpiritsScreen from './Screens/Drinks/SpiritsScreen';
import BeveragesScreen from './Screens/Drinks/BeveragesScreen';

// Menu
import MenuScreen from './Screens/Menu/MenuScreen';
import StarterScreen from './Screens/Menu/StarterScreen';
import MainScreen from './Screens/Menu/MainScreen';
import DessertScreen from './Screens/Menu/DessertScreen';
import SpecialsScreen from './Screens/Menu/SpecialsScreen';

// Tab and Stack navigators
const Tab = createBottomTabNavigator();
const DrinksStack = createStackNavigator();
const MenuStack = createStackNavigator();

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

// Nested Menu stack
function MenuStackScreen() {
  return (
    <MenuStack.Navigator screenOptions={{ headerShown: false }}>
      <MenuStack.Screen name="MenuMain" component={MenuScreen} />
      <MenuStack.Screen name="Starter" component={StarterScreen} />
      <MenuStack.Screen name="Main" component={MainScreen} />
      <MenuStack.Screen name="Dessert" component={DessertScreen} />
      <MenuStack.Screen name="Specials" component={SpecialsScreen} />
    </MenuStack.Navigator>
  );
}

export default function App() {
  return (
    <AppDataProvider>
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
            tabBarIcon: ({ focused, color }) => {
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
          <Tab.Screen name="Drinks" component={DrinksStackScreen} />
          <Tab.Screen name="Menu" component={MenuStackScreen} />
          <Tab.Screen name="EditMenu" component={EditMenuScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppDataProvider>
  );
}
