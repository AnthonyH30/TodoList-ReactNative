import { Button, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function ButtonAdd({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}