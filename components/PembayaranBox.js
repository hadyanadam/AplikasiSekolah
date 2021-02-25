import React, { useEffect, useState, useCallback } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { masaTenggangText } from '../utils/textUtils'

const PembayaranBox = ({data}) => {
  const masaTenggang = masaTenggangText(data.createdAt)
  console.log(masaTenggang)
  return (
    <View style={styles.pembayaranBox}>
      <View style={styles.pembayaranHeader}>
        <Text>Untuk Pembayaran:</Text>
        <Text>{data.keterangan}</Text>
      </View>
      <View style={styles.pembayaranContent}>
        <View style={styles.pembayaranSubContent}>
          <Text>Nominal</Text>
          <Text>{`Rp ${data.nominal}`}</Text>
        </View>
        <View style={styles.pembayaranSubContent}>
          <Text>Masa Tenggang</Text>
          <Text>{masaTenggang}</Text>
        </View>
      </View>
    </View>
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
