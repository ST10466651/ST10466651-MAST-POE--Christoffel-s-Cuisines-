import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrinksStackParamList } from './DrinksStackScreen';
import {styles } from '../../global';
import { useData } from '../../DataContext';
import { wines } from '../../constants';



type CocktailsScreenNavigationProp = StackNavigationProp<DrinksStackParamList, 'Cocktails'>;


export default function CocktailsScreen() {
  const navigation = useNavigation<CocktailsScreenNavigationProp>();

  return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>WINE</Text>
    <View style={styles.drinksBox}>
    <FlatList
      data={wines}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
      <View style={styles.mainitem}>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemName}>- {item.name}</Text>
        <Text style={styles.itemDesc}>{item.desc}</Text>
      </View>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      )}
    />
      </View> 
    <TouchableOpacity style={styles.subbutton} onPress={() => navigation.goBack()}> 
      <Text style={styles.buttonText}>Back</Text> 
    </TouchableOpacity> 
  </SafeAreaView> 
);
}
