import React, { useContext } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrinksStackParamList } from './DrinksStackScreen';
import { styles } from '../../global';
import { AppDataContext } from '../../DataContext';

type DrinksScreenNavigationProp = StackNavigationProp<DrinksStackParamList, 'Spirits'>;

export default function SpiritsScreen({ navigation }: { navigation: DrinksScreenNavigationProp }) {
  const { drinks } = useContext(AppDataContext);
  const spirits = drinks.spirits || [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SPIRITS</Text>
      <View style={styles.drinksBox}>
        <FlatList
          data={spirits}
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
