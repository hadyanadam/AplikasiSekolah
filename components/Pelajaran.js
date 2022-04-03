import React, { useState, useEffect, useCallback } from 'react'
import {View, Text, StyleSheet,Alert, FlatList, Button, TextInput} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'
import ItemList from './ItemList'
import Header from './Header'
import Loader from './Loader'

const Pelajaran = ({navigation, user, url}) => {
  const token = user.token
  const [listPelajaran, setListPelajaran] = useState(null)
  const [siswa, setSiswa] = useState([])
  const [selectedSiswa, setSelectedSiswa] = useState('')

  useFocusEffect(
    useCallback(() => {
      fetch(`${url}/api/pelajaran?user_id=${selectedSiswa === '' ? user.id : selectedSiswa.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        }
      })
        .then(response => response.json())
        .catch(error => Alert.alert('error', error))
        .then(commits => setListPelajaran(commits.data))
    }, [setListPelajaran, user.id, url, token, selectedSiswa])
  )

  useFocusEffect(
    useCallback(() => {
      user.role === 2 && (
        fetch(`${url}/api/user?role=3`, {
          headers: {
            'auth-token': token,
            'Content-Type': 'application/json',
          }
        })
          .then(res => res.ok ? res.json() : Promise.reject(res.status))
          .then(commits => setSiswa(commits.data))
      )
    }, [url, user.role, token])
  )


  return (
    <>
      <Header title={'Daftar Pelajaran'}/>
      {listPelajaran === null ? <Loader loading={true}/> : <Loader loading={false}/>}
      <View style={styles.container}>
      {user.role === 2 && (
          <>
            <View style={styles.input}>
              <Picker
                selectedValue={selectedSiswa}
                onValueChange={(itemValue, itemIndex) => setSelectedSiswa(itemValue)}
              >
                <Picker.Item label="-" value=''/>
                {siswa.length > 0 && siswa.map(s => <Picker.Item label={s.nama} value={s} key={s.id}/>)}
              </Picker>
            </View>
          </>
        )}
        {listPelajaran !== null ? listPelajaran.length !== 0 ?
          listPelajaran.map(item => user.role === 2 ? selectedSiswa !== '' && <ItemList navigation={navigation} item={item} url={url} token={user.token} guruUser={user} user={user.role === 2 ? selectedSiswa : user} key={item.id}/> : (
            <ItemList navigation={navigation} item={item} url={url} user={user.role === 2 ? selectedSiswa : user} key={item.id}/>
          ))
           : <Text>Tidak ada pelajaran</Text> : <Text>Loading</Text>
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  input: {
    marginTop: 10,
    width: '95%',
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: 20
  },
})

export default Pelajaran;
