import React, { useContext } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MenuStackParamList } from './MenuStackScreen';
import { styles } from '../../global';
import { AppDataContext } from '../../DataContext';

type MenuScreenNavigationProp = StackNavigationProp<MenuStackParamList, 'Dessert'>;

export default function DessertScreen({ navigation }: { navigation: MenuScreenNavigationProp }) {
  // ✅ Access global context
  const { food } = useContext(AppDataContext);
  const desserts = food.desserts || [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>DESSERTS</Text>

      <View style={styles.drinksBox}>
        <FlatList
          data={desserts}
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
