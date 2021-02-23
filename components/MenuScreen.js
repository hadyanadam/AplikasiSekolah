import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'
import Absen from './Absen'
import Pelajaran from './Pelajaran'
import Nilai from './Nilai'
import User from './User'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const MenuScreen = ({navigation, route}) => {
  const token = route.params.token
  useEffect(() => {
    console.log('MENU',token)
  })
  return (
    <Tab.Navigator initialRouteName="Beranda">
      <Tab.Screen
        name="Beranda"
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          )
        }}
      >
        {() => <Home token={token} navigation={navigation}/>}
      </Tab.Screen>
      <Tab.Screen
        name="User"
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person" color={color} size={size} />
          )
        }}
      >
        {() => <User token={token} navigation={navigation}/>}
      </Tab.Screen>
      <Tab.Screen
        name="Absen"
        initialParams={{token: token}}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="input" color={color} size={size} />
          )
        }}
      >
        {() => <Absen token={token}  navigation={navigation}/>}
      </Tab.Screen>
      <Tab.Screen
        name="Nilai"
        initialParams={{token: token}}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="assessment" color={color} size={size} />
          )
        }}
      >
        {() => <Nilai token={token} navigation={navigation}/>}
      </Tab.Screen>
      <Tab.Screen
        name="Pelajaran"
        initialParams={{token: token}}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="assignment" color={color} size={size} />
          )
        }}
      >
        {() => <Pelajaran token={token} navigation={navigation}/>}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
// })

export default MenuScreen;
