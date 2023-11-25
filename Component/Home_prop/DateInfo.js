// DateInfo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateInfo = () => (
  <View style={styles.dateContainer}>
    <Text style={styles.dateText}>Senin</Text>
    <Text style={styles.dateText}>27 November 2023</Text>
  </View>
);

const styles = StyleSheet.create({
  dateContainer: {
    width: 310,
    height: 120,
    backgroundColor: '#1A1C20',
    marginTop: 20,
    borderRadius: 20,
    paddingLeft: 20,
  },
  dateText: {
    fontSize: 27,
    color: 'white',
    marginTop: 10,
  },
});

export default DateInfo;
