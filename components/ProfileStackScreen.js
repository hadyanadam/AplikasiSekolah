import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from './User';
import EditUser from './EditUser';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({navigation, user, token, url}) => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" options={{headerShown: false}}>
        {() => (
          <User navigation={navigation} user={user} token={token} url={url} />
        )}
      </ProfileStack.Screen>
      <ProfileStack.Screen name="Edit User" component={EditUser} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
