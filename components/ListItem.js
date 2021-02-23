import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native'

const ListItem = ({item, deleteItem, editItem}) => {

  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <TextInput style={styles.listItemText} value={item.text} onChangeText={(text) => editItem({...item, text:text})}/>
            <Button color='red' onPress={() => deleteItem(item.id)} title="x"/>
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

export default ListItem;
