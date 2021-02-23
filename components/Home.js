import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Home = ({token}) => {
  return (
      <View>
          <Text>Home screen</Text>
          <Text>token : {token}</Text>
      </View>
  );
};

// const styles = StyleSheet.create({
// })

export default Home;
