import { View, Text, Image, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

import Password from './Component/prop_register/Password'
import BOY from './BOY.png'
import Login from './Component/prop_register/Login'
import Btn from './Component/prop_register/Btn'

export default function Register({navigation}) {
  return (
    <View>
        <View style={styles.container}>
        <Text style={{fontSize: 30, fontWeight: 'bold', top: 60, marginLeft: 20}}>Register</Text>
        <View style={{ marginTop: 60}}>
        <View style={{flexDirection: 'row'}}>
        <Image source={BOY} style={{width: 300, height: 300,}}></Image>
        </View>
    </View>
    <View style={{justifyContent: 'flex-start', marginLeft: 20}}>
      <Password/>
       <Login onPress={() => navigation.navigate('Home')}/>
      <Text style={{textAlign: 'center', marginRight: 20, fontWeight: 'bold', marginTop: 30, color: 'gray'}}>------------------------ OR -------------------------</Text>
      <Btn/>
        </View>
        
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    backgroundColor : 'white',
    height: '100%'
    },
    touchableOpacity: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10
      },
    touchableOpacity1: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginLeft: 20
      },
      container1: {
        flexDirection: 'row',
        alignItems: 'center',marginTop: 7,
        justifyContent: 'center',

        
        
      },
      image: {
        width: 25, // Sesuaikan dengan ukuran gambar yang diinginkan
        height: 25, // Sesuaikan dengan ukuran gambar yang diinginkan
        resizeMode: 'cover',
        bottom: 2
      
      },
      image1: {
        width: 30, // Sesuaikan dengan ukuran gambar yang diinginkan
        height: 30, // Sesuaikan dengan ukuran gambar yang diinginkan
        resizeMode: 'cover',
        bottom: 2
      
      },
      text: {
        marginLeft: 1,
        marginBottom: 8,
        fontSize: 15


      },

})