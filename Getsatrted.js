import { View, Text, Image, TextInput, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

import Button from './Component/prop_get/ButtonLog'
import Button2 from './Component/prop_get/ButtonRegis'
import Ui from './tes.png'
import Ui2 from './profil11.png'



export default function Getsatrted({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems:'center', top: 60}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Welcome !!</Text>
        <Text style={{fontSize: 20, color: 'gray'}}>Sign in or create a new account</Text>
        <View style={{alignItems:'center' , justifyContent: 'center'}}>
        <Image source={Ui} style={{marginLeft:40,width: 282, height: 92, marginTop: 100}}></Image>
        <Image source={Ui2} style={{width: 250, height: 250, }}></Image>
        </View>
       <Button onPress={() => navigation.navigate('Login')}/>
       <Button2 onPress={() => navigation.navigate('Register')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
    

  
  },
});