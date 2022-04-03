import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
// import Loader from './Loader'
import Absen from './Absen';
import PembayaranStackScreen from './PembayaranStackScreen';
import PelajaranStackScreen from './PelajaranStackScreen';
import User from './User';
import JadwalStackScreen from './JadwalStackScreen';
import PendaftaranSiswa from './PendaftaranSiswa';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileStackScreen from './ProfileStackScreen';
import ListAbsenStackScreen from './ListAbsenStackScreen';

const Tab = createBottomTabNavigator();

const MenuScreen = ({navigation, route}) => {
  const user = route.params.user;
  const url = route.params.serverUrl;

  return (
    <>
      <Tab.Navigator initialRouteName="User">
        <Tab.Screen
          name="User"
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="person" color={color} size={size} />
            ),
          }}>
          {() => (
            <ProfileStackScreen navigation={navigation} user={user} url={url} />
          )}
        </Tab.Screen>
        {user.role === 1 && (
          <Tab.Screen
            name="PendaftaranSiswa"
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="person" color={color} size={size} />
              ),
            }}>
            {() => (
              <PendaftaranSiswa navigation={navigation} user={user} url={url} />
            )}
          </Tab.Screen>
        )}
        {user.role === 3 && (
          <Tab.Screen
            name="Absen"
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="input" color={color} size={size} />
              ),
            }}>
            {() => <Absen navigation={navigation} user={user} url={url} />}
          </Tab.Screen>
        )}
        {user.role !== 1 && (
          <Tab.Screen
            name="Data Absen"
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="list" color={color} size={size} />
              ),
            }}>
            {() => <ListAbsenStackScreen navigation={navigation} user={user} url={url} />}
          </Tab.Screen>
        )}
        {user.role !== 1 && (
          <Tab.Screen
            name="Jadwal"
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="schedule" color={color} size={size} />
              ),
            }}>
            {() => <JadwalStackScreen navigation={navigation} user={user} url={url} />}
          </Tab.Screen>
        )}
        {user.role !== 1 && (
          <Tab.Screen
            name="Pelajaran"
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="assessment" color={color} size={size} />
              ),
            }}>
            {() => (
              <PelajaranStackScreen
                navigation={navigation}
                user={user}
                url={url}
              />
            )}
          </Tab.Screen>
        )}
        {user.role !== 2 && (
          <Tab.Screen
            name="Pembayaran"
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="assignment" color={color} size={size} />
              ),
            }}>
            {() => (
              <PembayaranStackScreen
                navigation={navigation}
                user={user}
                url={url}
              />
            )}
          </Tab.Screen>
        )}
      </Tab.Navigator>
    </>
  );
};

// const styles = StyleSheet.create({
// })

export default MenuScreen;
