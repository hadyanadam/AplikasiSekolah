import React, { useEffect, useState, useCallback } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Loader from './Loader'
import Header from './Header'
import PembayaranBox from './PembayaranBox'

const Pembayaran = ({user, url}) => {
  const token = user.token
  const [pembayaran, setPembayaran] = useState([])

  const dummyData = {
    id:1,
    keterangan: 'test',
    nominal: 12000,
    createdAt: '19 maret',
    status: true
  }
  useEffect(() => {
    console.log('ini effect')
    return getPembayaran()
  }, [getPembayaran])

  const getPembayaran = useCallback(() => {
    fetch(`${url}/api/pembayaran?user_id=${user.id}`, {
      headers: {
        'auth-token': token
      }
    })
      .then(response => response.json())
      .then(commits => {console.log(commits.data);setPembayaran(commits.data)})
  }, [setPembayaran, token, url, user.id])

  return (
    <>
      {pembayaran.length === 0 ? <Loader loading={true} /> : <Loader loading={false} />}
      <Header title='Pembayaran' />
      <ScrollView contentContainerStyle={styles.container}>
        {
          pembayaran.length !== 0 ? 
          pembayaran.map((item) => <PembayaranBox key={item.id} data={item} />)
           : <Text>tidak ada pembayaran</Text>
        }
        {/* <PembayaranBox data={dummyData} /> */}
      </ScrollView>
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
  }
})

export default Pembayaran;
