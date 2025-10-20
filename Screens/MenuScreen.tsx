import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../global';

export default function MenuScreen() {
  const items = [
    { name: 'STARTER', image: 'https://picsum.photos/200/200?1' },
    { name: 'MAIN', image: 'https://picsum.photos/200/200?2' },
    { name: 'DESSERT', image: 'https://picsum.photos/200/200?3' },
    { name: 'SPECIALS', image: 'https://picsum.photos/200/200?4' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MENU</Text>
      <View style={styles.indexposition}>
        <View style={styles.grid}>
          {items.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.label}>{item.name}</Text>
              <TouchableOpacity>
                <Image source={{ uri: item.image }} style={styles.image} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
