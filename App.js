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
    { name: "sharn", key: "1" },
    { name: "yoshi", key: "2" },
    { name: "mario", key: "3" },
    { name: "Luigi", key: "4" },
    { name: "peach", key: "5" },
    { name: "six", key: "6" },
    { name: "seven", key: "7" },
    { name: "eight", key: "8" },
    { name: "nine", key: "9" },
    { name: "ten", key: "10" },

  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        { people.map((item) => {
          return(
            <View>
              <Text style={styles.item} key={item.key}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>
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
    fontSize: 25
  }

})


export default App;
