import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native'

const ItemList = ({item}) => {
  console.log(item)
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text>{item.item.pelajaran.nama.toUpperCase()}</Text>
            <Text>{item.item.nilai}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: 'lightgrey',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18
    },
})

export default ItemList;
