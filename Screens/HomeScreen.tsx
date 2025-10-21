import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../global';
import { AppDataContext } from '../DataContext';
import { drinks } from '../constants';

export default function HomeScreen() {
  const { food, populateAll, clearAll, viewAll } = useContext(AppDataContext);

  // Combined array of all meals
  const [allItems, setAllItems] = useState<any[]>([]);

  useEffect(() => {
    if (viewAll) {
      // Combine all food categories dynamically
      const combined: any[] = [
        ...(food.starters || []),
        ...(food.mains || []),
        ...(food.desserts || []),
        ...(food.specials || []),
        ...drinks.wines,
        ...drinks.spirits,
        ...drinks.cocktails,
        ...drinks.beverages,
      ];
      setAllItems(combined);
    } else {
      setAllItems([]);
    }
  }, [food, viewAll]); // 🔹 Updates whenever food changes

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.maintitle}>Christoffel’s{'\n'}Cuisines</Text>

      <View style={styles.menuBox}>
        <FlatList
          data={allItems}
          keyExtractor={(item) => item.name + Math.random()} // Avoid duplicate keys
          renderItem={({ item }) => (
            <View style={styles.mainitem}>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemName}>- {item.name}</Text>
                <Text style={styles.itemDesc}>{item.desc}</Text>
              </View>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.populateButton} onPress={populateAll}>
          <Text style={styles.buttonText}>Populate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} onPress={clearAll}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.counter}>Items: {allItems.length}</Text>
    </SafeAreaView>
  );
}
