import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';

import Loginbtn from './Component/peop_log/Loginbtn';
import FormLog from './Component/peop_log/FormLog';
import Check from './Component/peop_log/check';
import Registerbtn from './Component/peop_log/Registerbtn';
import Image1 from './ui.png'

export default function Login({navigation}) {
  const [isChecked, setChecked] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
  
    const fakeUsername = 'hardiek';
    const fakePassword = 'zen123';

    if (username === fakeUsername && password === fakePassword) {   
      navigation.navigate('Home');
    } else {
     
 setError('username atau password salah');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{top: 51, left: 20}}>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'gray', }}>Hello my frieend</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login Now!</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 70}}>
        <Image source={Image1} style={{width: 320, height: 320}}>
        </Image>
      </View>
      <View style={{ left: 20}}>
      <Text style={{textAlign: 'left'}}>email</Text>
      <FormLog placeholder="masukan email"  onChangeText={(text) => setUsername(text)} value={username}/>
      <Text style={{textAlign: 'left', marginTop: 20}}>email</Text>
      <FormLog placeholder="masukan password"  onChangeText={(text) => setPassword(text)} value={password}/>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Check title="Remember me"
      checked={isChecked}
      onPress={() => setChecked(!isChecked)}
      containerStyle={styles.checkboxContainer}
      textStyle={styles.checkboxText}
      checkedColor="black"/>
      <Loginbtn onPress={handleLogin}/>
      <View style={{flexDirection: 'row', gap: 5, marginTop: 15}}>
        <Text 
        style={{marginLeft: 70}}>Don’t yo have account?</Text>
        <Registerbtn onPress={() => navigation.navigate('Register')}/>

      </View>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0, // Menghilangkan border
  },
  checkboxText: {
    color: 'black',
    fontWeight: '600' // Warna teks checkbox
  },
  error: {
    color: 'red',
    marginBottom: 0,
  },
})