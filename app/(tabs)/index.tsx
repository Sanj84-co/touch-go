import { Text, StyleSheet, SafeAreaView, Modal, View, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';

export default function HomeScreen() {

  const [clickVis, setClickVis] = useState(false);

  const [swipeVis, setSwipeVis] = useState(false);

  const [typeVis, setTypeVis] = useState(false);

  const [moveVis, setMoveVis] = useState(false);

  const [text, setText] = useState('');

  const [bgCol, setBgCol] = usestate("red");

  const [switchCol, setSwitchCol] = useState("black");
  
  let colArr = ['white', 'green', 'yellow'];

  return (
    <SafeAreaView style={styles.mainView}>
      <Modal visible={clickVis} animationType="fade" onRequestClose={() => setClickVis(false)} presentationStyle="pageSheet">
        <View style={styles.container}>
          <Text style={styles.largeText}>Click!</Text>
          <Pressable onPress={() => setBgCol(colArr[Math.floor(Math.random() * 3)]}>
            <Text style={{ margin: 'auto', marginBottom: 50, borderRadius: 90, padding: 75, backgroundColor: bgCol, }}> </Text>
          </Pressable>
        </View>
      </Modal>
      <Modal visible={swipeVis} animationType="fade" onRequestClose={() => setSwipeVis(false)} presentationStyle="pageSheet">
        <View style={{ backgroundColor: switchCol, styles.container }}>
          <Text style={styles.largeText}>Switch</Text>
          <Pressable onPress={() => setSwitchCol('white')}>
          <Text style={{ padding: 40, backgroundColor: 'white', margin: 'auto', }}> </Text>
          </Pressable>
        </View>
      </Modal>
      <Modal visible={typeVis} animationType="fade" onRequestClose={() => setTypeVis(false)} presentationStyle="pageSheet">
        <View style={styles.container}>
          <Text style={styles.largeText}>Type!</Text>
          <TextInput 
            style = {styles.input}
            placeholder = "Start Typing"
            onChangeText = {setText}
            value = {text}
            ></TextInput>
        </View>
      </Modal>
      <Modal visible={moveVis} animationType="fade" onRequestClose={() => setMoveVis(false)} presentationStyle="pageSheet">
        <View style={styles.container}>
          <Text style={styles.largeText}>Swipe!</Text>
          <Slider style={{ width: 200, height: 40, }} minimumValue={0} maximumValue={1} minimumTrackTintColor="#FFFFFF" maximumTrackTintColor="#000000" />
        </View>
      </Modal>
        <Text style={styles.largeText}>Welcome to Touch and Go</Text>
        <Pressable onPress={() => setClickVis(true)} style={styles.buttons}>Click</Pressable>
        <Pressable onPress={() => setSwipeVis(true)} style={styles.buttons}>Switch</Pressable>
        <Pressable onPress={() => setTypeVis(true)} style={styles.buttons}>Type</Pressable>
        <Pressable onPress={() => setMoveVis(true)} style={styles.buttons}>Swipe</Pressable>
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
  input: {
    padding: 10,
    borderRadius: 15,
  },
});
