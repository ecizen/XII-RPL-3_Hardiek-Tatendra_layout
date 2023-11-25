// Greeting.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Greeting = () => (
  <>
    <Text style={styles.greeting}>Hello create your daily,</Text>
    <Text style={styles.username}>Zen123</Text>
  </>
);

const styles = StyleSheet.create({
  greeting: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '500',
  },
  username: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Greeting;
