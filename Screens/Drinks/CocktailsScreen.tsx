import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrinksStackParamList } from './DrinksStackScreen';
import {styles } from '../../global';

type CocktailsScreenNavigationProp = StackNavigationProp<DrinksStackParamList, 'Cocktails'>;

const menuItems = [
  { name: 'Red Wine', desc: 'Cabernet Sauvignon, full-bodied', price: 'R120' },
  { name: 'White Wine', desc: 'Chardonnay, crisp and fresh', price: 'R110' },
];

export default function CocktailsScreen() {
  const navigation = useNavigation<CocktailsScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cocktails</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDesc}>{item.desc}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
