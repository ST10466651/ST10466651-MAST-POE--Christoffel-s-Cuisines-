import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { AppDataContext } from '../DataContext';
import { styles } from '../global';

type MenuItem = {
  name: string;
  desc: string;
  price: string;
};

export default function EditMenuScreen() {
  const { food, setFood } = useContext(AppDataContext);

  const [mealName, setMealName] = useState('');
  const [mealType, setMealType] = useState(''); // Text input now
  const [mealDesc, setMealDesc] = useState('');
  const [mealPrice, setMealPrice] = useState('');

  const resetForm = () => {
    setMealName('');
    setMealType('');
    setMealDesc('');
    setMealPrice('');
  };

  const handleAddToMenu = () => {
    if (!mealName || !mealType || !mealDesc || !mealPrice) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    const validMealTypes = ['starters', 'mains', 'dessert', 'specials'];
    const typeKey = mealType.trim().toLowerCase();

    if (!validMealTypes.includes(typeKey)) {
      Alert.alert(
        'Error',
        'Invalid meal type. Use: starters, mains, desserts, specials.'
      );
      return;
    }

    const newMeal: MenuItem = {
      name: mealName.trim(),
      desc: mealDesc.trim(),
      price: mealPrice.trim(),
    };

    setFood({
      ...food,
      [typeKey]: [...(food[typeKey] || []), newMeal],
    });

    Alert.alert('Success', `${typeKey.toUpperCase()} added!`);
    resetForm();
  };

  const handleEditMenu = () => {
    if (!mealName || !mealType || !mealDesc || !mealPrice) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    const typeKey = mealType.trim().toLowerCase();
    const updatedArray: MenuItem[] = (food[typeKey] || []).map(
      (item: MenuItem) =>
        item.name === mealName
          ? { ...item, desc: mealDesc.trim(), price: mealPrice.trim() }
          : item
    );

    // If meal not found
    if (!updatedArray.find((item: MenuItem) => item.name === mealName)) {
      Alert.alert(
        'Error',
        `${mealType.toUpperCase()} not found. Use Add to Menu instead.`
      );
      return;
    }

    setFood({
      ...food,
      [typeKey]: updatedArray,
    });

    Alert.alert('Success', `${typeKey.toUpperCase()} edited!`);
    resetForm();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>EDIT MENU</Text>
        <View style={styles.editmenuBox}>
          <View style={styles.form}>
            <Text style={styles.label}>MEAL NAME:</Text>
            <TextInput
              style={styles.input}
              value={mealName}
              onChangeText={(text) => {
                const capitalized = text
                  .split(' ')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join(' ');
                setMealName(capitalized);
              }}
            />

            <Text style={styles.label}>MEAL TYPE:</Text>
            <TextInput
              style={styles.input}
              value={mealType}
              onChangeText={setMealType}
              placeholder="starters / mains / desserts / specials"
            />

            <Text style={styles.label}>MEAL DESCRIPTION:</Text>
            <TextInput
              style={styles.input}
              value={mealDesc}
              onChangeText={setMealDesc}
            />

            <Text style={styles.label}>PRICE:</Text>
            <TextInput
              style={styles.input}
              value={mealPrice}
              onChangeText={setMealPrice}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleEditMenu}>
            <Text style={styles.buttonText}>EDIT MENU</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton} onPress={handleAddToMenu}>
            <Text style={styles.buttonText}>ADD TO MENU</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
