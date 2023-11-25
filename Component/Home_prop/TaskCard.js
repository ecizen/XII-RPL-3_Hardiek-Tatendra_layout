// TaskCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'; // Use CheckBox from react-native-elements

const TaskCard = ({ title, description, checked, onCheckPress }) => (
  <View style={styles.cardContainer}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <View style={styles.checkboxContainer}>
      <CheckBox checked={checked} onPress={onCheckPress} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    width: 310,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    elevation: 5,
    marginBottom: 10,
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  checkboxContainer: {
    marginLeft: 80,
  },
});

export default TaskCard;
