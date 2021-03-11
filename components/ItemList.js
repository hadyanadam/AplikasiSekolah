import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native'

const ItemList = ({navigation, item, url, user, token, guruUser}) => {
    const toListNilai = () => navigation.navigate('List Nilai', {url: url, pelajaran: item, token: token, user: user, guruUser: guruUser})
    // const toListNilai = () => console.log(user, item)
    return (
        <View style={styles.listItem}>
            <TouchableOpacity onPress={() => toListNilai()}>
                <Text>{item.nama.toUpperCase()}</Text>
            </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
    listItem: {
        width: '95%',
        padding: 15,
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        borderColor: 'darkslateblue',
        marginVertical: 5
    },
    listItemText: {
        fontSize: 18
    },
})

export default ItemList;
