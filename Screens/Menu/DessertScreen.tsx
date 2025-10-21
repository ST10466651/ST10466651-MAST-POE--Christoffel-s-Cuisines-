import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MenuStackParamList } from './MenuStackScreen';
import {styles } from '../../global';
import { useData } from '../../DataContext';


type MenuScreenNavigationProp = StackNavigationProp<MenuStackParamList, 'Starter'>;

 const starter = [ 
    { name: 'Surf & Turf Combo', desc: '200g beef fillet paired with garlic butter prawns, served with creamy mash and sautéed greens.', price: 'R370' }, 
    { name: 'Oxtail Potjie', desc: 'Slow-cooked traditional oxtail stew with red wine, carrots, and baby potatoes, served in a mini potjie pot.', price: 'R340' }, 
    { name: 'Grilled Salmon Fillet', desc: 'Fresh Atlantic salmon, grilled with lemon-dill butter, served on a bed of wild rice and asparagus.', price: 'R320' }, 
    { name: 'Stuffed Chicken Supreme', desc: 'Chicken breast stuffed with spinach, feta, and sundried tomatoes, topped with a creamy mushroom sauce.', price: 'R250' }, 
    { name: 'Lamb Rack with Mint Jus', desc: 'Herb-crusted lamb rack roasted to perfection, paired with dauphinoise potatoes and mint-infused jus.', price: 'R380' }, 
    { name: 'Seafood Paella', desc: 'Spanish-style rice cooked with saffron, mussels, prawns, calamari, and line fish.', price: 'R350' }, 
    { name: 'Pork Belly with Apple Glaze', desc: 'Crispy pork belly with a caramelized apple glaze.', price: 'R270' }, 
];

export default function StarterScreen({ navigation }: any) {

  return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>STARTER</Text>
    <View style={styles.drinksBox}>
    <FlatList
      data={starter}
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
