import React, { useState, useEffect, useCallback } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { cos } from 'react-native-reanimated'
import Loader from './Loader'
import AbsenItem from './AbsenItem'
import Header from './Header'
import Icons from 'react-native-vector-icons/Ionicons';

const AbsenSiswaList = ({navigation, route}) => {
  const arrayList = [0, 1, 2, 3, 4, 5, 6]
  const now = new Date()
  const tanggalList = arrayList.map((item) => {
    const tanggal = new Date(now)
    tanggal.setDate(now.getDate() - item)
    return tanggal.toISOString().split('T')[0]
  })
  console.log(tanggalList)
  const data = route.params.data
  return (
    <>
      <Header title={`Absen untuk ${data.nama}`} />
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={textNama}>
            <Text>Tanggal</Text>
          </View>
          <View style={textNilai}>
            <Text>Hadir</Text>
          </View>
        </View>
        {data.absen.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.item}
          >
            <View style={textNama}>
              <Text>{tanggalList[i]}</Text>
            </View>
            <View style={textNilai}>
            { item ? <Icons name="checkmark-circle" size={20} color="green" /> : <Icons name="close-circle" size={20} color="red" />
            }
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '5%'
  },
  centeredView: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '75%',
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  btnTambah: {
    margin: '3%',
    width: '40%',
  },
  head: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'darkslateblue',
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    elevation: 5,
  },
  item: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'darkslateblue',
    backgroundColor: 'whitesmoke',
    elevation: 5,
    marginVertical: 5,
    padding: 5
  },
  text: {
    padding: 10,
    width: '33%',
    borderColor: 'darkslateblue',
    borderRightWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '95%',
    borderWidth: 1,
    borderColor: 'blue',
  },
  modalHead: {
    width: '100%',
    backgroundColor: 'darkslateblue',
    padding: 15,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  modalText: {
    fontSize: 20,
    color: 'white'
  },
  modalBody: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalButonStyle: {
    width: '95%',
    marginTop: '3%',
  }
})

const textNo = StyleSheet.compose(styles.text, {width: '11%'})
const textNama = StyleSheet.compose(styles.text, {width: '69%'})
const textNilai = StyleSheet.compose(styles.text, {borderRightWidth: 0, width: '20%'})

export default AbsenSiswaList