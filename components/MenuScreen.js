import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'
// import Loader from './Loader'
import Absen from './Absen'
import Pembayaran from './Pembayaran'
import Nilai from './Nilai'
import User from './User'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const MenuScreen = ({navigation, route}) => {
  const user = route.params.user
  const url = route.params.serverUrl

  return (
    <>
      <Tab.Navigator initialRouteName="User">
        <Tab.Screen
          name="User"
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="person" color={color} size={size} />
            )
          }}
        >
          {() => <User navigation={navigation} user={user} url={url}/>}
        </Tab.Screen>
        <Tab.Screen
          name="Absen"
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="input" color={color} size={size} />
            )
          }}
        >
          {() => <Absen  navigation={navigation} user={user} url={url}/>}
        </Tab.Screen>
        <Tab.Screen
          name="Nilai"
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="assessment" color={color} size={size} />
            )
          }}
        >
          {() => <Nilai navigation={navigation} user={user} url={url}/>}
        </Tab.Screen>
        <Tab.Screen
          name="Pembayaran"
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="assignment" color={color} size={size} />
            )
          }}
        >
          {() => <Pembayaran navigation={navigation} user={user} url={url}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

// const styles = StyleSheet.create({
// })

export default MenuScreen;
