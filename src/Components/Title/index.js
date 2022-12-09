import { Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function Title({text}) {
  return (
    <>
      <Text style={styles.Title}>{text}</Text>
    </>
  )
}