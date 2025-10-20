import React from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { styles } from '../global';

const menuItems = [ 
    { name: 'Surf & Turf Combo', desc: '200g beef fillet paired with garlic butter prawns, served with creamy mash and sautéed greens.', price: 'R370' }, 
    { name: 'Oxtail Potjie', desc: 'Slow-cooked traditional oxtail stew with red wine, carrots, and baby potatoes, served in a mini potjie pot.', price: 'R340' }, 
    { name: 'Grilled Salmon Fillet', desc: 'Fresh Atlantic salmon, grilled with lemon-dill butter, served on a bed of wild rice and asparagus.', price: 'R320' }, 
    { name: 'Stuffed Chicken Supreme', desc: 'Chicken breast stuffed with spinach, feta, and sundried tomatoes, topped with a creamy mushroom sauce.', price: 'R250' }, 
    { name: 'Lamb Rack with Mint Jus', desc: 'Herb-crusted lamb rack roasted to perfection, paired with dauphinoise potatoes and mint-infused jus.', price: 'R380' }, 
    { name: 'Seafood Paella', desc: 'Spanish-style rice cooked with saffron, mussels, prawns, calamari, and line fish.', price: 'R350' }, 
    { name: 'Pork Belly with Apple Glaze', desc: 'Crispy pork belly with a caramelized apple glaze.', price: 'R270' }, 
];

export default function HomeScreen() {
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
        />
      </View>
    </SafeAreaView>
  );
}
