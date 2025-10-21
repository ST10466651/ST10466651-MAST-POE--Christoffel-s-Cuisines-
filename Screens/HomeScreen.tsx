import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../global';
import { AppDataContext } from '../DataContext';

export default function HomeScreen() {
  const { menuItems, populateAll, clearAll } = useContext(AppDataContext); // fixed: useContext instead of useData
  const [itemCount, setItemCount] = useState(menuItems.length);

  // Update count in real-time if menuItems changes
  useEffect(() => {
    setItemCount(menuItems.length);
  }, [menuItems]); // add menuItems as dependency

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.maintitle}>Christoffel’s{'\n'}Cuisines</Text>

      <View style={styles.menuBox}>
        <FlatList
          data={menuItems}
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

      <Text style={styles.counter}>Items: {itemCount}</Text>
    </SafeAreaView>
  );
}
