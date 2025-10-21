import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrinksStackParamList } from './DrinksStackScreen';
import { styles } from '../../global';
import { useData } from '../../DataContext';


import WineImg from '../../images/wine.png';
import CocktailsImg from '../../images/cocktails.png';
import SpiritsImg from '../../images/spirits.png';
import BeveragesImg from '../../images/beverages.png';

type DrinksScreenNavigationProp = StackNavigationProp<DrinksStackParamList, 'DrinksMain'>;

const drinks = [
  { name: 'WINE', image: WineImg, screen: 'Wine' },
  { name: 'COCKTAILS', image: CocktailsImg, screen: 'Cocktails' },
  { name: 'SPIRITS', image: SpiritsImg, screen: 'Spirits' },
  { name: 'BEVERAGES', image: BeveragesImg, screen: 'Beverages' },
];

export default function DrinksScreen() {
  const navigation = useNavigation<DrinksScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>DRINKS</Text>

        <View style={styles.grid}>
          {drinks.map((drink) => (
            <View key={drink.name} style={styles.item}>
              <Text style={styles.label}>{drink.name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(drink.screen as keyof DrinksStackParamList)}>
              <Image source={drink.image} style={styles.image} />
            </TouchableOpacity>
            </View>
          ))}
        </View>   
    </SafeAreaView>
  );
}
