import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../global';

export default function EditMenuScreen() {
  const [mealName, setMealName] = useState('');
  const [mealType, setMealType] = useState('');
  const [mealDesc, setMealDesc] = useState('');
  const [mealPrice, setMealPrice] = useState('');

  const handleEdit = () => {
    Alert.alert('Menu Updated', `Meal: ${mealName}\nType: ${mealType}\nPrice: ${mealPrice}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>EDIT MENU</Text>
      <View style={styles.editmenuBox}>
        <View style={styles.form}>
          <Text style={styles.label}>MEAL NAME:</Text>
          <TextInput style={styles.input} value={mealName} onChangeText={setMealName} />

          <Text style={styles.label}>MEAL TYPE:</Text>
          <TextInput style={styles.input} value={mealType} onChangeText={setMealType} />

          <Text style={styles.label}>DESCRIPTION:</Text>
          <TextInput style={styles.input} value={mealDesc} onChangeText={setMealDesc} />

          <Text style={styles.label}>PRICE:</Text>
          <TextInput style={styles.input} value={mealPrice} onChangeText={setMealPrice} keyboardType="numeric" />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>EDIT MENU</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
