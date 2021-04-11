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
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const [people, setPeople] = useState([
    { name: "sharn", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "Luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "six", id: "6" },
    { name: "seven", id: "7" },
    { name: "eight", id: "8" },
    { name: "nine", id: "9" },
    { name: "ten", id: "10" },

  ])

  const pressHandler = (id) => {
    console.log(id)
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList 
      numColumns={2}
      data={people}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) =>(
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  buttonContainer: {
    marginTop: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 25,
    marginHorizontal: 10,
  }

})


export default App;
