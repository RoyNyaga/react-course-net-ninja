/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const [name, setName] = useState("shaun")
  const [age, setAge] = useState("30")

  const clickHandler = () => {
    setName("chun-li");
  }

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
      multiline
      style={styles.input}
      placeholder="e.g Jogn Doe"
      onChangeText={(val) => {setName(val)}}/>

      <Text>name: {name}, age: {age}</Text>

      <Text>Enter age:</Text>
      <TextInput 
      keyboardType="numeric"
      style={styles.input}
      placeholder="e.g Jogn Doe"
      onChangeText={(val) => {setAge(val)}}/>

      <Text>name: {name}, age: {age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 8,
    width: 200,
  }
})


export default App;
