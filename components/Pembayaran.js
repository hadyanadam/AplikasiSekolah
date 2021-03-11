import React, { useEffect, useState, useCallback } from 'react'
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Loader from './Loader'
import Header from './Header'
import PembayaranBox from './PembayaranBox'
import AddPembayaran from './AddPembayaran'

const Pembayaran = ({navigation, user, url}) => {
  const token = user.token
  const [pembayaran, setPembayaran] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log('ini effect')
    return getPembayaran()
  }, [getPembayaran])

  const getPembayaran = useCallback(() => {
    setLoading(true)
    fetch(user.role === 3 ? `${url}/api/pembayaran?user_id=${user.id}` : `${url}/api/pembayaran`, {
      headers: {
        'auth-token': token
      }
    })
      .then(response => {
        if (response.ok){
          console.log('ok pmebayaran')
          return response.json()
        }
        console.log('reject pembayaran')
        return Promise.reject(response)
      })
      .then(commits => {
        console.log(commits)
        if(commits.data.length !== 0){
          setLoading(false)
          return setPembayaran(commits.data)
        }
        return Promise.reject('Empty json')
      })
      .catch(error => {
        Alert.alert('Error', error)
        setLoading(false)
      })
  }, [setPembayaran, token, url, user.id])

  const bayar = (id) => {
    fetch(`${url}/api/pembayaran/${id}`, {
      method: 'PUT',
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'status': false
      })
    })
    setPembayaran(() => pembayaran.map(pemb => pemb.id === id ? {
        ...pemb, status: false
      } : pemb
    ))
  }

  return (
    <>
      <Loader loading={loading} />
      <Header title={user.role === 1 ? 'Tambah Pembayaran' : 'Pembayaran'} />
      {user.role === 1 && <AddPembayaran navigation={navigation} setPembayaran={setPembayaran} token={token} url={url} setLoading={setLoading} pembayaran={pembayaran}/>}
      {user.role === 3 && <ScrollView contentContainerStyle={styles.container}>
        {
          pembayaran.length !== 0 ? 
          pembayaran.map((item) => <PembayaranBox key={item.id} data={item} bayar={bayar}/>)
           : <Text>Tidak ada pembayaran</Text>
        }
      </ScrollView>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },
  pembayaranBox: {
    width: '92%',
    padding: 10,
    backgroundColor: 'lightgrey',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2
  },
  pembayaranListContainer: {
    flex:1,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  pembayaranListItem: {
    flex: 1,
    alignSelf: 'stretch'
  }
})

export default Pembayaran;
