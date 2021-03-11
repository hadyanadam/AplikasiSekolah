import React, { useState, useEffect, useCallback } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { cos } from 'react-native-reanimated'
import NilaiItem from './NilaiItem'
import Loader from './Loader'
import NilaiGuru from './NilaiGuru'

const ListNilai = ({navigation, route}) => {
  const [nilaiList, setNilaiList] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(route.params)
  const user = route.params.guruUser !== undefined ? route.params.guruUser : route.params.user
  useFocusEffect(
    useCallback(() => {
      fetch(`${route.params.url}/api/nilai?user_id=${route.params.user.id}&pelajaran_id=${route.params.pelajaran.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': route.params.guruUser !== undefined ? route.params.token : route.params.user.token
        }
      })
        .then(res => res.json())
        .then(commits => {setNilaiList(commits.data);console.log(commits);setLoading(false)})
        // .catch(error => {console.log(error);setLoading(false)})
    }, [route])
  )

  return (
    <>
      <Loader loading={loading} />
      <View style={styles.container}>
        {user.role === 2 ? <NilaiGuru nilaiList={nilaiList} setLoading={setLoading} user={route.params.user} pelajaran={route.params.pelajaran} url={route.params.url} token={route.params.guruUser !== undefined ? route.params.token : route.params.user.token} setNilaiList={setNilaiList}/> : nilaiList !== 0 ? <FlatList
          data={nilaiList}
          renderItem={({item}) => <NilaiItem nama={item.nama} nilai={item.value} user={route.params.guruUser !== undefined ? route.params.guruUser : route.params.user} />}
          keyExtractor={(item) => item.id.toString()}
        /> : (
          <View style={styles.text}>
              <Text>Tidak ada nilai</Text>
          </View>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center'
  },
  text: {
    alignItems: 'center'
  }
})

export default ListNilai