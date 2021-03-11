import React, { useState, useCallback, useEffect } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import Loader from './Loader'

const NilaiItemGuru = () => {

  return (
    <View>
      <View>
        <Text>No</Text>
      </View>
      <View>
        <Text>Nama</Text>
      </View>
      <View>
        <Text>Nilai</Text>
      </View>
    </View>
  )
}

export default NilaiItemGuru