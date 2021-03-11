import React, { useState, useEffect, useCallback } from 'react'
import {Text,View, TextInput, Button, StyleSheet, Alert} from 'react-native'
import { Picker } from '@react-native-picker/picker'

const AddPembayaran = ({navigation, setPembayaran,setLoading, pembayaran, url, token}) => {
  const [selectedUser, setSelectedUser] = useState(null)
  const [users, setUsers] = useState([])
  const [keterangan, setKeterangan] = useState('')
  const [nominal, setNominal] = useState(null)
  console.log(pembayaran)
  useEffect(() => {
    fetch(`${url}/api/user?role=3`, {
      headers: {
        'auth-token': token
      }
    })
      .then(response => {
        if (response.ok){
          return response.json()
        }
      })
      .then(commits => setUsers(commits.data))
      .catch(error => console.log(error))
  }, [url, token])

  const createPembayaran = () => {
    setLoading(true)
    fetch(`${url}/api/pembayaran`, {
      method: 'POST',
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: selectedUser,
        keterangan: keterangan,
        nominal: nominal
      })
    })
      .then(res => {
        if (res.ok){
          setLoading(false)
          Alert.alert('Success', 'request success!!')
          return res.json()
        }
      })
      .then(commits => setPembayaran([...pembayaran, commits.message]))
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Nominal</Text>
        <View style={styles.input}>
          <TextInput placeholder='Nominal' keyboardType="number-pad" onChangeText={(text) => setNominal(text)}/>
        </View>
        <Text style={styles.label}>Keterangan</Text>
        <View style={styles.input}>
          <TextInput placeholder='Keterangan' onChangeText={(text) => setKeterangan(text)}/>
        </View>
        <Text style={styles.label}>
          User
        </Text>
        <View style={styles.input}>
          <Picker
            selectedValue={selectedUser}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedUser(itemValue)
            }}
            mode={'dropdown'}
          >
            <Picker.Item label="-"/>
            {users.map((user) => <Picker.Item label={user.nama} value={user.id} key={user.id}/>)}
          </Picker>
        </View>
        <View style={styles.btn}>
          <Button title="add" onPress={() => createPembayaran()} color={'green'} />
        </View>
        <View style={styles.btn}>
          <Button title="view" onPress={() => navigation.navigate('List Pembayaran', {pembayaran: pembayaran, users: users})} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  section: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 22,
    borderColor: 'white',
    borderBottomColor: 'darkblue',
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: 'darkslateblue',
    color: 'whitesmoke'
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: 20
  },
  btn: {
    marginVertical: 5
  }
})

export default AddPembayaran