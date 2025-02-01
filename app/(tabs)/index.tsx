import { Text, StyleSheet, SafeAreaView, Modal } from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen() {

  const [clickVis, setClickVis] = useState(false);
  
  return (
    <SafeAreaView style={styles.mainView}>
        <Text style={styles.largeText}>Welcome to Touch and Go</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  largeText: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'sans-serif-thin',
    borderRadius: 15,
    padding: 8,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
    margin: 'auto',
  },
  mainView: {
    backgroundColor: 'black',
  },
});
