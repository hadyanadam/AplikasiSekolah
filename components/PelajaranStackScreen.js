import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Pelajaran from './Pelajaran'
import ListNilai from './ListNilai'

const PelajaranStack = createStackNavigator()

const PelajaranStackScreen = ({navigation, user, token, url}) => {
  return (
    <PelajaranStack.Navigator initialRouteName="Pelajaran">
      <PelajaranStack.Screen name="Pelajaran" options={{headerShown: false}}>
        {() => <Pelajaran navigation={navigation} user={user} token={token} url={url}/>}
      </PelajaranStack.Screen>
      <PelajaranStack.Screen name="List Nilai" component={ListNilai} />
    </PelajaranStack.Navigator>
  )
}

export default PelajaranStackScreen