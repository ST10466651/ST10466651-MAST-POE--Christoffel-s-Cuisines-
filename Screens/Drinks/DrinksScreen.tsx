import React, { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrinksStackParamList } from './DrinksStackScreen';
import { styles } from '../../global';
import { AppDataContext } from '../../DataContext';

import WineImg from '../../images/wine.png';
import CocktailsImg from '../../images/cocktails.png';
import SpiritsImg from '../../images/spirits.png';
import BeveragesImg from '../../images/beverages.png';

type DrinksScreenNavigationProp = StackNavigationProp<DrinksStackParamList, 'DrinksMain'>;

export default function DrinksScreen() {
  const navigation = useNavigation<DrinksScreenNavigationProp>();
  const { drinkCounts } = useContext(AppDataContext); // assuming you have this in context

  const drinks = [
    { name: 'WINE', image: WineImg, screen: 'Wine', count: drinkCounts.wines },
    { name: 'COCKTAILS', image: CocktailsImg, screen: 'Cocktails', count: drinkCounts.cocktails },
    { name: 'SPIRITS', image: SpiritsImg, screen: 'Spirits', count: drinkCounts.spirits },
    { name: 'BEVERAGES', image: BeveragesImg, screen: 'Beverages', count: drinkCounts.beverages },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>DRINKS</Text>

      <View style={styles.grid}>
        {drinks.map((drink) => (
          <View key={drink.name} style={styles.item}>
            <Text style={styles.label}>{drink.name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(drink.screen as keyof DrinksStackParamList)}>
              <Image source={drink.image} style={styles.image} />
              {/* Counter overlay */}
              <View style={localStyles.counter}>
                <Text style={localStyles.counterText}>{drink.count}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  counter: {
    position: 'absolute',
    top: 5,
    right: 3,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
