import React, {useState,useEffect} from 'react'
import {Text,View,TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const NilaiItem = ({nama, nilai, user}) => {
  return (
    <View style={styles.itemContent}>
      <Text>{nama}</Text>
      <Text>{nilai}</Text>
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

export default NilaiItem