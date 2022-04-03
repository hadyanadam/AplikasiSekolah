import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'

const AbsenMapelItem = () => {
    return (
        <View style={styles.listItem}>
        <TouchableOpacity onPress={(item) => toPelajaran(item)}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    input: {
      marginTop: 10,
      width: '95%',
      borderWidth: 1,
      borderColor: 'blue',
      marginBottom: 20
    },
    listItem: {
        width: '95%',
        padding: 15,
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        borderColor: 'darkslateblue',
        marginVertical: 5
    },
  })
  