import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ItemList from './ItemList'
import Header from './Header'

const Nilai = ({token}) => {
  const dummyList = [
    {
      id: 1,
      pelajaran: 'Bahasa Indonesia',
      nilai: 90
    },
    {
      id: 2,
      pelajaran: 'Bahasa Inggris',
      nilai: 80
    },
    {
      id: 3,
      pelajaran: 'Matematika',
      nilai: 90
    },
  ]
  return (
      <View>
        <Header title={'Daftar Nilai'}/>
        <FlatList
          data={dummyList}
          renderItem={(item) => <ItemList item={item}/>}
          keyExtractor={(item) => item.id}
        />
      </View>
  );
};

const styles = StyleSheet.create({
})

export default Nilai;
