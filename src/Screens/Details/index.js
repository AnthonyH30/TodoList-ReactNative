import { Text, SafeAreaView, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

export default function Details({ route, navigation }) {

  const { item } = route?.params || {}

  const back = () =>{
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <View style={styles.backBtn}>
        <Ionicons onPress={back} name='chevron-back-circle' size={60} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>{item.title}</Text>
        <Text style={styles.detailText}>{item.detail ? item.detail : 'Nenhuma Descrição encontrada'}</Text>
      </View>
    </SafeAreaView>
  )
}