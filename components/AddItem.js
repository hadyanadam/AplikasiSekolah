import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'

const AddItem = ({addItem}) => {
  const [text, setText] = useState('')
  const onAdd = () => {
      addItem(text)
      setText('')
  }
  const onChange = textValue => setText(textValue)

  return (
      <View>
          <TextInput placeholder="Add item.." style={styles.input}
           onChangeText={onChange} value={text} />
          <TouchableOpacity>
            <Button title="Add Item" color="darkslateblue" size={20} onPress={() => {
              onAdd() }} disabled={!text ? true : false} />
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
})

export default AddItem;
