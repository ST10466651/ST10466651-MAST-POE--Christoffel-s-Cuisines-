import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../global';
import { menuItems } from './HomeScreen';
import { useData } from '../DataContext';


export default function EditMenuScreen() {
  const [mealName, setMealName] = useState('');
  const [mealType, setMealType] = useState('');
  const [mealDesc, setMealDesc] = useState('');
  const [mealPrice, setMealPrice] = useState('');

  const allowedTypes = ['Starter', 'Main', 'Dessert', 'Special'];

  const existingMenu =  menuItems;

  const [errors, setErrors] = useState({
    mealName: '',
    mealType: '',
    mealDesc: '',
    mealPrice: '',
  });

const validate = () => {
    let valid = true;
    const newErrors = { mealName: '', mealType: '', mealDesc: '', mealPrice: '' };

    // Meal Name
    if (!mealName.trim()) {
      newErrors.mealName = 'Meal name is required';
      valid = false;
    } else if (mealName.trim().length > 25) {
      newErrors.mealName = 'Meal name cannot exceed 25 characters';
      valid = false;
    } else if (existingMenu.some(item => item.name.toLowerCase() === mealName.trim().toLowerCase())) {
      newErrors.mealName = 'Meal name already exists';
      valid = false;
    }

    // Meal Type
    if (!mealType.trim()) {
      newErrors.mealType = 'Meal type is required';
      valid = false;
    } else if (!allowedTypes.includes(mealType.trim())) {
      newErrors.mealType = `Must be one of: ${allowedTypes.join(', ')}`;
      valid = false;
    }

    // Meal Description
    if (!mealDesc.trim()) {
      newErrors.mealDesc = 'Description is required';
      valid = false;
    } else if (mealDesc.trim().length < 10) {
      newErrors.mealDesc = 'Description must be at least 10 characters';
      valid = false;
    } else if (mealDesc.trim().length > 250) {
      newErrors.mealDesc = 'Description cannot exceed 250 characters';
      valid = false;
    }

    // Price
    const priceNum = parseInt(mealPrice, 10);
    if (!mealPrice.trim()) {
      newErrors.mealPrice = 'Price is required';
      valid = false;
    } else if (isNaN(priceNum) || priceNum <= 0) {
      newErrors.mealPrice = 'Price must be a positive number';
      valid = false;
    } else if (mealPrice.length > 3) {
      newErrors.mealPrice = 'Price can only be 3 digits';
      valid = false;
    } else if (mealPrice.includes(',') || mealPrice.includes('.')) {
      newErrors.mealPrice = "Don't include commas or periods";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleEdit = () => {
    if (!validate()) return; // Stop if validation fails

    const formattedPrice = `${parseInt(mealPrice, 10)},00`;
    Alert.alert(
      'Menu Updated',
      `Meal: ${mealName}\nType: ${mealType}\nDescription: ${mealDesc}\nPrice: R${formattedPrice}`
    );

    // Optionally reset fields after edit
    setMealName('');
    setMealType('');
    setMealDesc('');
    setMealPrice('');
    setErrors({ mealName: '', mealType: '', mealDesc: '', mealPrice: '' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>EDIT MENU</Text>


      <View style={styles.editmenuBox}>
        <View style={styles.form}>
          <Text style={styles.label}>MEAL NAME:</Text>
          <TextInput style={styles.input} value={mealName} onChangeText={setMealName} />
          {errors.mealName ? <Text style={styles.error}>{errors.mealName}</Text> : null}

          <Text style={styles.label}>MEAL TYPE:</Text>
          <TextInput style={styles.input} value={mealType} onChangeText={setMealType} />
          {errors.mealType ? <Text style={styles.error}>{errors.mealType}</Text> : null}

          <Text style={styles.label}>DESCRIPTION:</Text>
          <TextInput style={styles.input} value={mealDesc} onChangeText={setMealDesc} multiline/>
          {errors.mealDesc ? <Text style={styles.error}>{errors.mealDesc}</Text> : null}

          <Text style={styles.label}>PRICE:</Text>
          <TextInput style={styles.input} value={mealPrice} onChangeText={setMealPrice} keyboardType="numeric" maxLength={3} />
          {errors.mealPrice ? <Text style={styles.error}>{errors.mealPrice}</Text> : null}
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>EDIT MENU</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
