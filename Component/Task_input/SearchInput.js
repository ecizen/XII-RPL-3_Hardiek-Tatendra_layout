// TaskInput.js
import React from 'react';
import { TextInput, TouchableOpacity, Text, StyleSheet , View} from 'react-native';

const TaskInput = ({ taskName, taskPembimbing, taskWaktu, taskRuangan, onPress, buttonText }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="Task Name"
      value={taskName}
      onChangeText={(text) => setTaskJenis(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="masukan nama pembimbing"
      value={taskPembimbing}
      onChangeText={(text) => setTaskPembimbing(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Waktu"
      value={taskWaktu}
      onChangeText={(text) => setTaskWaktu(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Ruangan"
      value={taskRuangan}
      onChangeText={(text) => setTaskRuangan(text)}
    />

    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Text style={styles.addButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#ecf0f1',
    color: '#34495e',
  },
  addButton: {
    width: 150,
    height: 45,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  addButtonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
  },
});

export default TaskInput;
