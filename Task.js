// File: TaskList.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import CustomTextInput from './Component/Task_input/TaskInput';
import TaskItem from './Component/Task_input/TaskItem';


const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskJenis] = useState('');
  const [taskPembimbing, setTaskPembimbing] = useState('');
  const [taskWaktu, setTaskWaktu] = useState('');
  const [taskRuangan, setTaskRuangan] = useState('');
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addTask = () => {
    if (taskName && taskPembimbing && taskWaktu && taskRuangan) {
      const newTask = {
        id: Date.now().toString(),
        name: taskName,
        pembimbing: taskPembimbing,
        waktu: taskWaktu,
        ruangan: taskRuangan,
      };
      setTasks([...tasks, newTask]);
      setTaskJenis('');
      setTaskPembimbing('');
      setTaskWaktu('');
      setTaskRuangan('');
    }
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === selectedTaskId
        ? {
            ...task,
            name: taskName,
            pembimbing: taskPembimbing,
            waktu: taskWaktu,
            ruangan: taskRuangan,
          }
        : task
    );
    setTasks(updatedTasks);
    setSelectedTaskId(null);
    setTaskJenis('');
    setTaskPembimbing('');
    setTaskWaktu('');
    setTaskRuangan('');
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const renderTaskItem = ({ item }) => (
    <TaskItem
      task={item}
      onPress={() => {
        setSelectedTaskId(item.id);
        setTaskJenis(item.name);
        setTaskPembimbing(item.pembimbing);
        setTaskWaktu(item.waktu);
        setTaskRuangan(item.ruangan);
      }}
      onDelete={() => deleteTask(item.id)}
    />
  );

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Estrakurikuler list</Text>

      <CustomTextInput
        placeholder="Cari berdasarkan nama tugas"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <View style={styles.inputContainer}>
        <CustomTextInput
          placeholder="Nama Tugas"
          value={taskName}
          onChangeText={(text) => setTaskJenis(text)}
        />
        <CustomTextInput
          placeholder="Masukan Nama Pembimbing"
          value={taskPembimbing}
          onChangeText={(text) => setTaskPembimbing(text)}
        />
        <CustomTextInput
          placeholder="Waktu"
          value={taskWaktu}
          onChangeText={(text) => setTaskWaktu(text)}
        />
        <CustomTextInput
          placeholder="Ruangan"
          value={taskRuangan}
          onChangeText={(text) => setTaskRuangan(text)}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={selectedTaskId ? updateTask : addTask}
        >
          <Text style={styles.addButtonText}>
            {selectedTaskId ? 'Update Tugas' : 'Tambah Tugas'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList data={filteredTasks} keyExtractor={(item) => item.id} renderItem={renderTaskItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ecf0f1',
    marginTop: 40
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222831',
  },
  inputContainer: {
    marginBottom: 20,
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

export default TaskList;
