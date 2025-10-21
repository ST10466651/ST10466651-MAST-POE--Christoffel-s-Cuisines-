import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MenuStackParamList } from './MenuStackScreen';
import { styles } from '../../global';


import StarterImg from '../../images/starter.png';
import MainImg from '../../images/main.png';
import DessertImg from '../../images/dessert.png';
import SpecialsImg from '../../images/specials.png';

type MenuScreenNavigationProp = StackNavigationProp<MenuStackParamList, 'MenuMain'>;

const items = [
  { name: 'STARTER', image: StarterImg, screen: 'Starter' },
  { name: 'MAIN', image: MainImg, screen: 'Main' },
  { name: 'DESSERT', image: DessertImg, screen: 'Dessert' },
  { name: 'SPECIALS', image: SpecialsImg, screen: 'Specials' },
];

export default function MenuScreen() {
  const navigation = useNavigation<MenuScreenNavigationProp>();
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MENU</Text>
  
        <View style={styles.grid}>
          {items.map((item) => (
            <View key={item.name} style={styles.item}>
              <Text style={styles.label}>{item.name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(item.screen as keyof MenuStackParamList)}>
              <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
            </View>
          ))}
        </View>    
    </SafeAreaView>
    );
}
