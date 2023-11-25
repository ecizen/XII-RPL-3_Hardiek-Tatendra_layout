// TaskItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onPress, onDelete }) => (
  <View style={styles.taskContainer}>
    <TouchableOpacity style={styles.taskItem} onPress={onPress}>
      <Text style={styles.taskName}>{task.name}</Text>
      <Text style={styles.taskDate}>{`Nama pembimbing: ${task.pembimbing}`}</Text>
      <Text style={styles.taskDate}>{`Waktu: ${task.waktu}`}</Text>
      <Text style={styles.taskDate}>{`Ruangan: ${task.ruangan}`}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskItem: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
  taskName: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  taskDate: {
    color: 'black',
  },
  deleteButton: {
    width: 70,
    height: 35,
    backgroundColor: '#f44336',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    top: 30,
    right: 90
  },
  deleteButtonText: {
    fontSize: 14,
    color: 'white',
  },
});

export default TaskItem;
