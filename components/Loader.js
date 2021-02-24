import React from 'react'
import {View, Text, StyleSheet, Modal, ActivityIndicator} from 'react-native'

const Loader = ({loading}) => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
    >
      <View style={styles.modalBackground}>
        <ActivityIndicator size="large" color="green" animating={loading}/>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
})

export default Loader;
