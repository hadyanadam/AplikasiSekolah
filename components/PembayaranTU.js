import React, {useState, useEffect, useCallback} from 'react'
import { Text, StyleSheet, View, ScrollView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Loader from './Loader'


const PembayaranTU = ({route}) => {
  const [loading, setLoading] = useState(false)
  const pembayaran = route.params.pembayaran
  const users = route.params.users

  return (
    <>
      <Loader loading={loading} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.head}>
          <View style={styles.text}>
            <Text>No</Text>
          </View>
          <View style={styles.text}>
            <Text>User</Text>
          </View>
          <View style={styles.text}>
            <Text>Keterangan</Text>
          </View>
          <View style={styles.text}>
            <Text>Nominal</Text>
          </View>
          <View style={styles.text}>
            <Text>Status</Text>
          </View>
        </View>
        {pembayaran.map((item, i) => (
          <View style={styles.item}>
            <View styles={styles.text}>
              <Text>{i+1}</Text>
            </View>
            <View styles={styles.text}>
              <Text>{users.filter(user => user.id === item.user_id)[0].nama}</Text>
            </View>
            <View styles={styles.text}>
              <Text>{item.keterangan}</Text>
            </View>
            <View styles={styles.text}>
              <Text>{item.nominal}</Text>
            </View>
            <View styles={styles.text}>
              {item.status ? <Icon name="checkmark-circle" size={20} color='green' /> : <Icon name="close-circle" size={20} color='red'/>}
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  head: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'darkslateblue',
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    elevation: 5,
  },
  item: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'darkslateblue',
    backgroundColor: 'whitesmoke',
    elevation: 5,
    marginVertical: 5,
    padding: 5
  },
  text: {
    padding: 10,
    width: '20%',
    borderColor: 'darkslateblue',
    borderRightWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
})

export default PembayaranTU