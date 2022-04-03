import React, {useState, useEffect, useCallback} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from './Header'
import Loader from './Loader'
import {capitalizeText} from '../utils/textUtils'

const Guru = (props) => {
    const params = props.route.params
  return (
    <>
      <Header title={'Guru Mata Pelajaran'}/>
      <View style={styles.container}>
          <View style={styles.profileSection}>
            <MaterialIcons name="person" size={200}/>
            <View style={styles.profileInfo}>
              <Text style={styles.profileLabel}>Nama</Text>
              <Text style={styles.profileText}>{params.nama}</Text>
              <Text style={styles.profileLabel}>Mata Pelajaran</Text>
              <Text style={styles.profileText}>{params.title}</Text>
              <Text style={styles.profileLabel}>Nomor Induk</Text>
              <Text style={styles.profileText}>{params.nis}</Text>
              <Text style={styles.profileLabel}>Tempat Tgl lahir</Text>
              <Text style={styles.profileText}>{params.ttl ? capitalizeText(params.ttl) : ''}</Text>
            </View>
          </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileSection: {
    flexDirection: 'row',
  },
  profileInfo: {
    width: '35%',
    flexDirection: 'column',
    paddingTop: 10,
  },
  profileLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileText: {
    fontSize: 12,
    fontWeight: 'normal',
    borderWidth: 1,
    borderColor: 'white',
    borderBottomColor: 'black'
  },
  logoutBtn: {
    marginTop: 5,
  },
  choice: {
    padding: 15,
    backgroundColor: 'lightgrey',
    borderBottomWidth: 1,
    borderColor: '#eee'
  }
})

export default Guru;
