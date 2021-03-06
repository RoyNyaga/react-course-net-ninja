import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, View } from "react-native"

export default function AddTodo({ submitHandler }){

  const [text, setText] = useState("")
  const changeHandler = (val) => {
    setText(val);
  }

  return(
    <View>
      <TextInput
      style={styles.input}
      placeholder="new todo...."
      onChangeText={changeHandler}>

      </TextInput>
      <Button onPress={() => submitHandler(text)} title="add todo" color="coral" />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 10,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
})