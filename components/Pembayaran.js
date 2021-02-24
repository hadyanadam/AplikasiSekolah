import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Pembayaran = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.pembayaranBox}>
          <Text>Pembayaran screen</Text>
          <Icon name={'done'} size={30} color="green"/>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  pembayaranBox: {
    width: '90%',
    padding: 10,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2
  }
})

export default Pembayaran;
