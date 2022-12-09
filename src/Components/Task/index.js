import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Task({taskTitle, deleteTask, details}) {
  return (
    <View style={styles.task}>
      <Text style={styles.taskTitle}>{taskTitle}</Text>
      <View style={styles.infoCloseView}>
        <Foundation onPress={details} name='info' size={40} />
        <Ionicons onPress={deleteTask} style={{marginLeft: 10}} name='close' size={40} />
      </View>
    </View>
  )
}