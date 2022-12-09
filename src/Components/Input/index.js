import { TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function index({onChange, placeholder, value}) {
  return (
      <TextInput value={value} style={styles.input} placeholder={placeholder} onChangeText={onChange} />
  )
}