import React, { useState, useEffect } from 'react'
import {Text, View, StyleSheet, TextInput, Button} from 'react-native'
import Header from './Header'
import Loader from './Loader'

const EditUser = ({navigation, route}) => {
  const user = route.params.user
  const token = route.params.token
  const url = route.params.url
  const setUser= route.params.setUser

  const saveChanges = () => {
    console.log('sebelum', user)
    fetch(`${url}/api/user/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(commits => console.log(commits))
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Nama</Text>
          <TextInput 
            autoCapitalize={'characters'}
            onChangeText={text => setUser({...user, nama: text})}
            style={styles.input}>{user.nama}</TextInput>
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Kelas</Text>
          <Text
            style={styles.inputDisable}>{user.kelas}</Text>
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Tempat Tanggal Lahir</Text>
          <TextInput
            autoCapitalize={'characters'}
            onChangeText={text => setUser({...user, ttl: text})}
            style={styles.input}>{user.ttl}</TextInput>
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>NIS</Text>
          <Text style={styles.inputDisable}>{user.nis}</Text>
        </View>
        <View style={styles.btn}>
          <Button title="SAVE CHANGES" onPress={() => saveChanges()}/>
        </View>
      </View>
    </>

    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  formControl: {
    width: '100%',
  },
  label: {
    width: '100%',
    fontSize: 32,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    fontSize: 30,
    borderWidth: 1,
    backgroundColor: 'lightgrey'
  },
  inputDisable: {
    width: '100%',
    fontSize: 30,
    borderWidth: 1,
    backgroundColor: 'grey'
  },
  btn: {
    marginTop: 20
  }

})

export default EditUser