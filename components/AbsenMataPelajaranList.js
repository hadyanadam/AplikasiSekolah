import React, { useState, useEffect, useCallback } from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import Header from './Header'

const AbsenMataPelajaran = ({navigation, user, url}) => {
  const token = user.token
  const listMapel = [
    {
      id: 1,
      name: 'Bahasa Indonesia 7A',
      siswa: [
          {id: 1001, nama: 'siswa1234', kelas: '7A',  absen: [1, 1, 1, 1, 1, 1, 1]},
          {id: 1002, nama: 'Budi Gunawan', kelas: '7A',  absen: [1, 1, 1, 1, 1, 1, 1]},
          {id: 1003, nama: 'Ahmad A', kelas: '7A',  absen: [1, 1, 1, 1, 1, 1, 1]},
          {id: 1004, nama: 'Dani', kelas: '7A',  absen: [1, 1, 1, 1, 1, 1, 1]},
          {id: 1005, nama: 'Roy', kelas: '7A',  absen: [1, 1, 1, 1, 1, 1, 1]},
      ]
    },
    {
      id: 2,
      name: 'Bahasa Inggris 7A',
      siswa: [
          {id: 1001, nama: 'siswa1234', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1002, nama: 'Budi Gunawan', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1003, nama: 'Ahmad A', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1004, nama: 'Dani', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1005, nama: 'Roy', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
      ]
    },
    {
      id: 3,
      name: 'PKN 7A',
      siswa: [
          {id: 1001, nama: 'siswa1234', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1002, nama: 'Budi Gunawan', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1003, nama: 'Ahmad A', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1004, nama: 'Dani', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1005, nama: 'Roy', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
      ]
    },
    {
      id: 4,
      name: 'IPA 7A',
      siswa: [
          {id: 1001, nama: 'siswa1234', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1002, nama: 'Budi Gunawan', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1003, nama: 'Ahmad A', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1004, nama: 'Dani', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1005, nama: 'Roy', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
      ]
    },
    {
      id: 5,
      name: 'IPS 7A',
      siswa: [
          {id: 1001, nama: 'siswa1234', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1002, nama: 'Budi Gunawan', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1003, nama: 'Ahmad A', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1004, nama: 'Dani', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
          {id: 1005, nama: 'Roy', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]},
      ]
    },
  ]
  const absenSiswa = {id: 1001, nama: 'siswa1234', kelas: '7A',  absen: [0, 1, 1, 1, 1, 1, 1]}
  const toPelajaran = (item) => navigation.navigate('Absen Mapel', {url: url, item: item, token: token, user: user})
  const toSiswa = () => navigation.navigate('Absen Siswa', {url: url, data: absenSiswa, token: token, user: user})
//   const [listPelajaran, setListPelajaran] = useState(null)
//   const [siswa, setSiswa] = useState([])
//   const [selectedSiswa, setSelectedSiswa] = useState('')

//   useFocusEffect(
//     useCallback(() => {
//       fetch(`${url}/api/pelajaran?user_id=${selectedSiswa === '' ? user.id : selectedSiswa.id}`, {
//         headers: {
//           'Content-Type': 'application/json',
//           'auth-token': token
//         }
//       })
//         .then(response => response.json())
//         .catch(error => Alert.alert('error', error))
//         .then(commits => setListPelajaran(commits.data))
//     }, [setListPelajaran, user.id, url, token, selectedSiswa])
//   )

//   useFocusEffect(
//     useCallback(() => {
//       user.role === 2 && (
//         fetch(`${url}/api/user?role=3`, {
//           headers: {
//             'auth-token': token,
//             'Content-Type': 'application/json',
//           }
//         })
//           .then(res => res.ok ? res.json() : Promise.reject(res.status))
//           .then(commits => setSiswa(commits.data))
//       )
//     }, [url, user.role, token])
//   )


  return (
    <>
      <Header title={'List Absen Mata Pelajaran'}/>
      <View style={styles.container}>
        {listMapel !== null ? listMapel.length !== 0 ?
          listMapel.map(item => (
            <View style={styles.listItem} key={item.id}>
                <TouchableOpacity onPress={() => user.role == 2 ? toPelajaran(item) : toSiswa()}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            </View>
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
  listItem: {
      width: '95%',
      padding: 15,
      backgroundColor: 'lightgrey',
      borderWidth: 1,
      borderColor: 'darkslateblue',
      marginVertical: 5
  },
})

export default AbsenMataPelajaran;
