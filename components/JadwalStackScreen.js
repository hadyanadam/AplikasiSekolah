import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Jadwal from './JadwalPelajaran'
import JadwalHarian from './JadwalHarian'
import Guru from './GuruMapel'
const JadwalStack = createStackNavigator()

const JadwalStackScreen = ({navigation, user, url}) => {
  return (
    <JadwalStack.Navigator initialRouteName="Jadwal Pelajaran">
      <JadwalStack.Screen name="Jadwal Pelajaran" options={{headerShown: false}}>
        {() => <Jadwal navigation={navigation} user={user} token={user.token} url={url}/>}
      </JadwalStack.Screen>
      <JadwalStack.Screen name="Senin" component={JadwalHarian} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
      <JadwalStack.Screen name="Selasa" component={JadwalHarian} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
      <JadwalStack.Screen name="Rabu" component={JadwalHarian} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
      <JadwalStack.Screen name="Kamis" component={JadwalHarian} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
      <JadwalStack.Screen name="Jumaat" component={JadwalHarian} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
      {/*  */}
      <JadwalStack.Screen name="Bahasa Indonesia" component={Guru} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
      <JadwalStack.Screen name="Bahasa Inggris" component={Guru} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
      <JadwalStack.Screen name="Bahasa PKN" component={Guru} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
      <JadwalStack.Screen name="Bahasa IPA" component={Guru} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
      <JadwalStack.Screen name="Bahasa IPS" component={Guru} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
    </JadwalStack.Navigator>
  )
}

export default JadwalStackScreen