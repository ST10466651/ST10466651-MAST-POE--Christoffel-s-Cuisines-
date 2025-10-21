import React, { useContext } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrinksStackParamList } from './DrinksStackScreen';
import { styles } from '../../global';
import { AppDataContext } from '../../DataContext';

type DrinksScreenNavigationProp = StackNavigationProp<DrinksStackParamList, 'Cocktails'>;

export default function CocktailsScreen({ navigation }: { navigation: DrinksScreenNavigationProp }) {
  const { drinks } = useContext(AppDataContext);
  const cocktails = drinks.cocktails || [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>COCKTAILS</Text>
      <View style={styles.drinksBox}>
        <FlatList
          data={cocktails}
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
