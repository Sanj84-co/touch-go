import { Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
     <Text style={styles.largeText}>Welcome to Touch and Go</Text>
  );
}

const styles = StyleSheet.create({
  largeText: {
    fontSize: 32,
  },
});
