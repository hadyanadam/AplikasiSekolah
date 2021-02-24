import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, FlatList, Button, TextInput} from 'react-native'
import ItemList from './ItemList'
import Header from './Header'

const Nilai = ({user, url}) => {
  const token = user.token
  const [role, setRole] = useState(3)
  const [listNilai, setListNilai] = useState([
    {
      id: 1,
      pelajaran: 'Bahasa Indonesia',
      nilai: 90
    },
    {
      id: 2,
      pelajaran: 'Bahasa Inggris',
      nilai: 80
    },
    {
      id: 3,
      pelajaran: 'Matematika',
      nilai: 90
    },
  ])
  // useEffect(() => getListNilai())

  const checkRole = () => {
    if (role < 3){
      return (
        <View style={styles.inputContainer}>
          <Button title={'Add'} color={'green'}/>
        </View>
      )
    }
  }

  const getPelajaran = async () => {
    const response = await fetch(`${url}/api/pelajaran`, {
      headers: {
        'auth-token': JSON.stringify(token)
      }
    })
    if (response.ok){
      const commits = await response.json()
      return commits
    }else{
      return {status: 'error'}
    }
  }

  const getNilai = async () => {
    const response = await fetch(`${url}/api/nilai?user_id=2`, {
      headers: {
        'auth-token': JSON.stringify(token)
      }
    })
    if (response.ok){
      const commits = await response.json()
      return commits
    }else{
      return {status: 'error'}
    }
  }

  return (
      <View>
        <Header title={'Daftar Nilai'}/>
        {checkRole()}
        <FlatList
          data={listNilai}
          renderItem={(item) => <ItemList item={item}/>}
          keyExtractor={(item) => item.id}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
  },
})

export default Nilai;
