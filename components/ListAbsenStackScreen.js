import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListAbsen from './ListAbsen'
import AbsenSiswaList from './AbsenSiswaList'
import AbsenMataPelajaran from './AbsenMataPelajaranList'

const ListAbsenStack = createStackNavigator()

const ListAbsenStackScreen = ({navigation, user, url}) => {
  return (
    <ListAbsenStack.Navigator initialRouteName="Absen Mata Pelajaran">
      <ListAbsenStack.Screen name="Jadwal Pelajaran" options={{headerShown: false}}>
        {() => <AbsenMataPelajaran navigation={navigation} user={user} url={url} />}
      </ListAbsenStack.Screen>
      <ListAbsenStack.Screen name="Absen Mapel" component={ListAbsen} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
      <ListAbsenStack.Screen name="Absen Siswa" component={AbsenSiswaList} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
    </ListAbsenStack.Navigator>
  )
}

export default ListAbsenStackScreen