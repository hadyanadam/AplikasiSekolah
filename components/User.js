import React, {useState, useEffect, useCallback} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from './Header'
import Loader from './Loader'
import {capitalizeText} from '../utils/textUtils'

const User = ({navigation, user, url}) => {
  const token = user.token
  const [userData, setUserData] = useState({})
  useEffect(() => {
    console.log('userEffect')
    return getUserData()
  }, [user, url, getUserData])

  const getUserData = useCallback(() => {
    fetch(`${url}/api/user?id=${user.id}`, {
      headers: {
        'auth-token': token
      }
    })
      .then(response => response.json())
      .then(commits => {console.log(commits); setUserData(commits.data[0])})
  }, [user.id, url, setUserData, token])

  return (
    <>
      {Object.entries(userData).length === 0 ? <Loader loading={true}/> : <Loader loading={false}/>}
      <Header title={'User Info'}/>
      <View style={styles.container}>
          <View style={styles.profileSection}>
            <MaterialIcons name="person" size={200}/>
            <View style={styles.profileInfo}>
              <Text style={styles.profileLabel}>Name</Text>
              <Text style={styles.profileText}>{userData.nama}</Text>
              <Text style={styles.profileLabel}>Kelas</Text>
              <Text style={styles.profileText}>{userData.kelas}</Text>
              <Text style={styles.profileLabel}>NIS</Text>
              <Text style={styles.profileText}>{userData.nis}</Text>
              <Text style={styles.profileLabel}>Tempat Tgl lahir</Text>
              <Text style={styles.profileText}>{userData.ttl ? capitalizeText(userData.ttl) : ''}</Text>
              <Text style={styles.profileLabel}>Status</Text>
              <Text style={styles.profileText}>{userData.status ? 'Aktif' : 'Non Aktif'}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.choice}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <View style={styles.logoutBtn}>
            <Button title="LOGOUT" onPress={() => navigation.navigate('Login')}/>
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

export default User;
