import { Text, StyleSheet, SafeAreaView, Modal, View, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen() {

  const [clickVis, setClickVis] = useState(false);

  const [swipeVis, setSwipeVis] = useState(false);

  const [typeVis, setTypeVis] = useState(false);

  return (
    <SafeAreaView style={styles.mainView}>
      <Modal visible={clickVis} animationType="fade" onRequestClose={() => setClickVis(false)} presentationStyle="pageSheet">
        <View style={styles.container}>
          <Text style={styles.largeText}>Click!</Text>
        </View>
      </Modal>
      <Modal visible={swipeVis} animationType="fade" onRequestClose={() => setSwipeVis(false)} presentationStyle="pageSheet">
        <View style={styles.container}>
          <Text style={styles.largeText}>Swipe!</Text>
        </View>
      </Modal>
      <Modal visible={typeVis} animationType="fade" onRequestClose={() => setTypeVis(false)} presentationStyle="pageSheet">
        <View style={styles.container}>
          <Text style={styles.largeText}>Type!</Text>
        </View>
      </Modal>
        <Text style={styles.largeText}>Welcome to Touch and Go</Text>
        <Pressable onPress={() => setClickVis(true)} style={styles.buttons}>Click</Pressable>
        <Pressable onPress={() => setSwipeVis(true)} style={styles.buttons}>Swipe</Pressable>
        <Pressable onPress={() => setTypeVis(true)} style={styles.buttons}>Type</Pressable>
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
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 8,
  },
  buttons: {
    backgroundColor: 'white',
    fontSize: 24,
    fontFamily: 'sans-serif-thin',
    textAlign: 'center',
    margin: 'auto',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    width: 200,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
  },
});
