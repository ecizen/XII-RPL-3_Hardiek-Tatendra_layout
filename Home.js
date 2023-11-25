// Home.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Component/Home_prop/Header';
import Greeting from './Component/Home_prop/Gretting'; // Corrected import
import SearchBar from './Component/Home_prop/SearchBar';
import DateInfo from './Component/Home_prop/DateInfo';
import ListHeader from './Component/Home_prop/ListHeader';
import AllDayText from './Component/Home_prop/AllDayText';
import TaskCard from './Component/Home_prop/TaskCard';

const Home = ({ navigation }) => {
  const [isChecked, setChecked] = React.useState(false);
  const [isChecked1, setChecked1] = React.useState(false);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Header onProfilePress={() => console.log("Profile button pressed")} />
        <Greeting />
        <SearchBar />
        <DateInfo />
        <ListHeader />
        <AllDayText />

        <TaskCard
          title="Futsal"
          description="Datang Tepat waktu futsal"
          checked={isChecked}
          onCheckPress={() => setChecked(!isChecked)}
        />

        <TaskCard
          title="Another Task"
          description="Description for another task"
          checked={isChecked1}
          onCheckPress={() => setChecked1(!isChecked1)}
        />

        {/* Add more TaskCard components or other components as needed */}
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Task')} >
        <Icon name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F5F7F8"
  },
  container: {
    top: 50,
    left: 20
  },
  addButton: {
    backgroundColor: '#222831',
    padding: 10,
    borderRadius: 10,
    height: 45,
    width: 45,
    marginLeft: 270,
    marginTop: 70,
  },
});
