// AllDayText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AllDayText = () => (
  <Text style={styles.allDayText}>All day</Text>
);

const styles = StyleSheet.create({
  allDayText: {
    fontWeight: '500',
    color: 'gray',
    marginTop: 30,
  },
});

export default AllDayText;
