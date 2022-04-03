import React, { useState, useEffect, useCallback } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { cos } from 'react-native-reanimated'
import Loader from './Loader'
import AbsenItem from './AbsenItem'
import Header from './Header'
import Icons from 'react-native-vector-icons/Ionicons';
import AbsenSiswaList from './AbsenSiswaList'

const ListAbsen = ({navigation, route}) => {
//   const [nilaiList, setNilaiList] = useState([])
  const siswaList = route.params.item.siswa
  const toAbsenSiswa = (data) => navigation.navigate("Absen Siswa", {data: data})
  //   useFocusEffect(
//     useCallback(() => {
//       fetch(`${route.params.url}/api/nilai?user_id=${route.params.user.id}&pelajaran_id=${route.params.pelajaran.id}`, {
//         headers: {
//           'Content-Type': 'application/json',
//           'auth-token': route.params.guruUser !== undefined ? route.params.token : route.params.user.token
//         }
//       })
//         .then(res => res.json())
//         .then(commits => {setNilaiList(commits.data);console.log(commits);setLoading(false)})
//         // .catch(error => {console.log(error);setLoading(false)})
//     }, [route])
//   )

  return (
    <>
      <Header title={route.params.item.name} />
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={textNo}>
            <Text>No</Text>
          </View>
          <View style={textNama}>
            <Text>Nama</Text>
          </View>
          <View style={textNilai}>
            <Text>Kelas</Text>
          </View>
          <View style={textNilai}>
            <Text>Absen</Text>
          </View>
        </View>
        {siswaList.map((item, i) => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => toAbsenSiswa(item)}
          >
          <View style={textNo}>
              <Text>{i+1}</Text>
            </View>
            <View style={textNama}>
              <Text>{item.nama}</Text>
            </View>
            <View style={textNilai}>
              <Text>{item.kelas}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '5%'
  },
  centeredView: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '75%',
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  btnTambah: {
    margin: '3%',
    width: '40%',
  },
  head: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'darkslateblue',
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    elevation: 5,
  },
  item: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'darkslateblue',
    backgroundColor: 'whitesmoke',
    elevation: 5,
    marginVertical: 5,
    padding: 5
  },
  text: {
    padding: 10,
    width: '33%',
    borderColor: 'darkslateblue',
    borderRightWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '95%',
    borderWidth: 1,
    borderColor: 'blue',
  },
  modalHead: {
    width: '100%',
    backgroundColor: 'darkslateblue',
    padding: 15,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  modalText: {
    fontSize: 20,
    color: 'white'
  },
  modalBody: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalButonStyle: {
    width: '95%',
    marginTop: '3%',
  }
})

const textNo = StyleSheet.compose(styles.text, {width: '11%'})
const textNama = StyleSheet.compose(styles.text, {width: '69%'})
const textNilai = StyleSheet.compose(styles.text, {borderRightWidth: 0, width: '20%'})

export default ListAbsen