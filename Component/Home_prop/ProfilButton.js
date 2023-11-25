// ProfileButton.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';



export default function ProfileButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.profileButton} onPress={onPress}>
      <Image source={require('./kwon.jpg')} style={styles.profileImage} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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

export { styles };
