import React from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from './Header'

const User = ({navigation}) => {
  return (
    <>
      <Header title={'User Info'}/>
      <View style={styles.container}>
          <View style={styles.profileSection}>
            <MaterialIcons name="person" size={200}/>
            <View style={styles.profileInfo}>
              <Text style={styles.profileLabel}>Name</Text>
              <Text style={styles.profileText}>Nama</Text>
              <Text style={styles.profileLabel}>Kelas</Text>
              <Text style={styles.profileText}>Kelas</Text>
              <Text style={styles.profileLabel}>Status</Text>
              <Text style={styles.profileText}>Siswa</Text>
            </View>
          </View>
          <Button title="LOGOUT" onPress={() => navigation.navigate('Login')}/>
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
  }
})

export default User;
