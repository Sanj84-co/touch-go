import { Text, StyleSheet, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainView}>
        <Text style={styles.largeText}>Welcome to Touch and Go</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  largeText: {
    fontSize: 32,
  },
  mainView: {
    backgroundColor: '#000080',
  },
});
