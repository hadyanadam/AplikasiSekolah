import React, {useState,useEffect} from 'react'
import {Text,View,TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const AbsenItem = ({siswa, user}) => {
  return (
    <View style={styles.itemContent}>
      <Text>{siswa.nama}</Text>
      <Text>{siswa.kelas}</Text>
      <Text>{siswa.waktu}</Text>
      <Text>{siswa.absen}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContent: {
    flex: 1,
    backgroundColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'darkslateblue',
    paddingHorizontal: 30,
    paddingVertical: 15,
    margin: 5,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default AbsenItem