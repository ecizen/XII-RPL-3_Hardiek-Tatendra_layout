// Header.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profil from '../Home_prop/kwon.jpg'

const Header = ({ onProfilePress }) => (
  <View style={styles.header}>
    <Icon name="bars" size={30} color="black" style={styles.headerIcon} />
    <TouchableOpacity style={styles.profileButton} onPress={onProfilePress}>
      <Image source={Profil} style={styles.profileImage} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 10,
  },
  profileButton: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 230,
    elevation: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default Header;  // Make sure to export the component
