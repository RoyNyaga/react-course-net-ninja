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
  const [person, setPerson] = useState({ name: "mario", age: 40 })

  const clickHandler = () => {
    setName("chun-li");
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={clickHandler} title="update state"/>
      </View>
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
  }
})


export default App;
