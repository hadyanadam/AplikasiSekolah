import React, { useEffect, useState, useCallback } from 'react'
import {View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const PembayaranBox = ({data, bayar}) => {
  return (
    <TouchableHighlight style={!data.status ? styles.pembayaranBoxDone : styles.pembayaranBox}
      onPress={() => !data.status ? Alert.alert('','Sudah dibayar') : Alert.alert(
          'Bayar',
          'Apakah Anda yakin untuk melakukan pembayaran?',
          [
            {
              text: 'Ya',
              onPress: () => bayar(data.id)
            },
            {
              text: 'Tidak',
              onPress: () => console.log('Tidak pressed'),
            }
          ]
        )}
      underlayColor='white'
    >
      <View>
        <View style={styles.pembayaranHeader}>
          <Text>Untuk Pembayaran:</Text>
          <Text>{data.keterangan}</Text>
        </View>
        <View style={styles.pembayaranContent}>
          <View style={styles.pembayaranSubContent}>
            <Text>Nominal</Text>
            <Text>{`Rp ${data.nominal}`}</Text>
          </View>
            {!data.status ? (
              <View style={styles.pembayaranSubContent}>
                <Text>LUNAS</Text>
              </View>
              )
            :
              (
              <View style={styles.pembayaranSubContent}>
                <Text>Masa Tenggang</Text>
                <Text>{data.masaTenggang}</Text>
              </View>
              )
            }
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  pembayaranBox: {
    width: '92%',
    padding: 10,
    backgroundColor: 'lightgrey',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10
  },
  pembayaranBoxDone: {
    width: '92%',
    padding: 10,
    backgroundColor: 'lightgreen',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10
  },
  pembayaranHeader: {
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    borderColor: 'lightgrey',
    borderBottomColor: 'black',
    padding: 5,
    marginBottom: 10
  },
  pembayaranContent: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  pembayaranSubContent: {
    alignItems: 'center'
  }
})

export default PembayaranBox;
