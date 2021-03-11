import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Pembayaran from './Pembayaran'
import PembayaranTU from './PembayaranTU'

const PembayaranStack = createStackNavigator()

const PembayaranStackScreen = ({navigation, user, token, url}) => {
  return (
    <PembayaranStack.Navigator initialRouteName="Pembayaran">
      <PembayaranStack.Screen name="Pembayaran" options={{headerShown: false}}>
        {() => <Pembayaran navigation={navigation} user={user} token={token} url={url}/>}
      </PembayaranStack.Screen>
      <PembayaranStack.Screen name="List Pembayaran" component={PembayaranTU} options={{headerTintColor: 'whitesmoke',headerStyle: {backgroundColor: 'darkslateblue'}}}/>
    </PembayaranStack.Navigator>
  )
}

export default PembayaranStackScreen