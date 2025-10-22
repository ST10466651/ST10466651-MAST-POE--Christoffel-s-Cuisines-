import { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MenuStackParamList } from './MenuStackScreen';
import { styles } from '../../global';
import { AppDataContext } from '../../DataContext';

import StarterImg from '../../images/starter.png';
import MainImg from '../../images/main.png';
import DessertImg from '../../images/dessert.png';
import SpecialsImg from '../../images/specials.png';

type MenuScreenNavigationProp = StackNavigationProp<MenuStackParamList, 'MenuMain'>;

export default function MenuScreen() {
  const navigation = useNavigation<MenuScreenNavigationProp>();
  const { foodCounts } = useContext(AppDataContext);

  const items = [
    { name: 'STARTER', image: StarterImg, screen: 'Starter', count: foodCounts.starters },
    { name: 'MAIN', image: MainImg, screen: 'Main', count: foodCounts.mains },
    { name: 'DESSERT', image: DessertImg, screen: 'Dessert', count: foodCounts.desserts },
    { name: 'SPECIALS', image: SpecialsImg, screen: 'Specials', count: foodCounts.specials },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MENU</Text>

      <View style={styles.grid}>
        {items.map((item) => (
          <View key={item.name} style={styles.item}>
            <Text style={styles.label}>{item.name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(item.screen as keyof MenuStackParamList)}>
              <Image source={item.image} style={styles.image} />
              {/* Counter overlay */}
              <View style={localStyles.counter}>
                <Text style={localStyles.counterText}>{item.count}</Text>
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
