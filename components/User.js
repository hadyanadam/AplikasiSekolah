import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from './Header'
import Loader from './Loader'

const User = ({navigation, user, url}) => {
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    Object.entries(userData).length === 0 ? setLoading(true) : setLoading(false)
    const timer = setInterval(() => {
      fetch(`${url}/api/user?id=${user.id}`, {
        headers: {
          'auth-token': user.token
        }
      })
        .then(response => response.json())
        .then(commits => {console.log(commits); setUserData(commits.data[0])})
    }, 10000)
    return () => clearInterval(timer)
  }, [user, loading, url, setLoading, userData, setUserData])

  return (
    <>
      <Loader loading={loading}/>
      <Header title={'User Info'}/>
      <View style={styles.container}>
          <View style={styles.profileSection}>
            <MaterialIcons name="person" size={200}/>
            <View style={styles.profileInfo}>
              <Text style={styles.profileLabel}>Name</Text>
              <Text style={styles.profileText}>{userData.name}</Text>
              <Text style={styles.profileLabel}>Kelas</Text>
              <Text style={styles.profileText}>Kelas</Text>
              <Text style={styles.profileLabel}>NIS</Text>
              <Text style={styles.profileText}>{userData.nis}</Text>
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
    flexDirection: 'row'
  },
  profileInfo: {
    flexDirection: 'column',
    paddingTop: 10,
  },
  profileLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileText: {
    fontSize: 18,
    fontWeight: 'normal'
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
