import React, { useState, useCallback, useEffect } from 'react'
import {Text, Modal, View, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import Loader from './Loader'

const NilaiGuru = ({nilaiList, setLoading, setNilaiList, user, pelajaran, token, url}) => {
  const [modalEditVisible, setModalEditVisible] = useState(false)
  const [modalCreateVisible, setModalCreateVisible] = useState(false)
  const [inputNilai, setInputNilai] = useState({})

  const editNilai = () => {
    setLoading(true)
    fetch(`${url}/api/nilai/${inputNilai.id}`, {
      method: 'PUT',
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: inputNilai.value})
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.json()))
      .then(commits => {
        setNilaiList(nilaiList.map((nilai) => nilai.id === inputNilai.id ? {
          ...nilai, value: commits.message.value} : nilai))
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
    setInputNilai({})
    setModalEditVisible(!modalEditVisible)
  }

  const tambahNilai = () => {
    setLoading(true)
    fetch(`${url}/api/nilai`, {
      method: 'POST',
      headers: {
        'auth-token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...inputNilai, pelajaran_id: pelajaran.id, user_id:user.id})
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.json()))
      .then(commits => {
        setNilaiList([...nilaiList, commits.message])
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
    setInputNilai({})
    setModalCreateVisible(!modalCreateVisible)
  }

  return (
    <>
      <View style={styles.container}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalCreateVisible}
          onRequestClose={() => setModalCreateVisible(!modalCreateVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHead}>
                <Text style={styles.modalText}>Tambah Tugas</Text>
              </View>
              <View style={styles.modalBody}>
                <Text style={styles.label}>Nama</Text>
                <View style={styles.input}>
                  <TextInput onChangeText={(text) => setInputNilai({...inputNilai, nama: text})}/>
                </View>
                <Text style={styles.label}>Nilai</Text>
                <View style={styles.input}>
                  <TextInput keyboardType='numeric' onChangeText={(text) => setInputNilai({...inputNilai, value: Number(text)})}/>
                </View>
                <View style={styles.modalButonStyle}>
                  <Button title="Add" onPress={() => tambahNilai()}/>
                </View>
                <View style={styles.modalButonStyle}>
                  <Button title="Cancel" color="red" onPress={() => setModalCreateVisible(!modalCreateVisible)}/>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalEditVisible}
          onRequestClose={() => setModalEditVisible(!modalEditVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHead}>
                <Text style={styles.modalText}>Edit Nilai</Text>
              </View>
              <View style={styles.modalBody}>
                <View style={styles.input}>
                  <TextInput keyboardType='numeric' onChangeText={(text) => setInputNilai({...inputNilai, value: Number(text)})}/>
                </View>
                <View style={styles.modalButonStyle}>
                  <Button title="Edit" onPress={() => editNilai()}/>
                </View>
                <View style={styles.modalButonStyle}>
                  <Button title="Cancel" color="red" onPress={() => setModalEditVisible(!modalEditVisible)}/>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.head}>
          <View style={textNo}>
            <Text>No</Text>
          </View>
          <View style={textNama}>
            <Text>Nama</Text>
          </View>
          <View style={textNilai}>
            <Text>Nilai</Text>
          </View>
        </View>
        {nilaiList.map((item, i) => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => {
              setInputNilai({...inputNilai, id: item.id})
              setModalEditVisible(!modalEditVisible)
            }}
          >
          <View style={textNo}>
              <Text>{i+1}</Text>
            </View>
            <View style={textNama}>
              <Text>{item.nama}</Text>
            </View>
            <View style={textNilai}>
              <Text>{item.value}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.btnTambah}>
        <Button title="Tambah Nilai" onPress={() => setModalCreateVisible(!modalCreateVisible)}/>
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

export default NilaiGuru