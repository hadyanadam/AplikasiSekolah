import React, { useState, useEffect, useCallback } from 'react'
import {View, Text, StyleSheet, FlatList, Button, TextInput} from 'react-native'
import ItemList from './ItemList'
import Header from './Header'
import Loader from './Loader'

const Nilai = ({user, url}) => {
  const token = user.token
  const [role, setRole] = useState(3)
  const [listNilai, setListNilai] = useState(null)

  useEffect(() => {
    console.log('nilai efect')
    return getNilai()
  }, [getNilai])

  const checkRole = () => {
    if (role < 3){
      return (
        <View style={styles.inputContainer}>
          <Button title={'Add'} color={'green'}/>
        </View>
      )
    }
  }

  const getNilai = useCallback(() => {
    fetch(`${url}/api/nilai?user_id=${user.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token
      }
    })
      .then(response => response.json())
      .then(commits => setListNilai(commits.data))
  }, [setListNilai, user.id, url, token])

  return (
      <View>
        {listNilai === null ? <Loader loading={true}/> : <Loader loading={false}/>}
        <Header title={'Daftar Nilai'}/>
        {checkRole()}
        {listNilai !== null ? listNilai.length !== 0 ?
          <FlatList
            data={listNilai}
            renderItem={(item) => <ItemList item={item}/>}
            keyExtractor={(item) => item.id.toString()}
          /> : <Text>Tidak ada pelajaran</Text> : <Text>Loading</Text>
        }
      </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
  },
})

export default Nilai;
