import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonRegis(prop) {
  return (
    <View>
       <TouchableOpacity style={{width: 320, height: 50, backgroundColor: 'white', marginTop: 20,borderRadius: 20, borderWidth: 3, borderColor: 'gray', justifyContent: 'center'} } onPress={prop.onPress}><Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>Create new account</Text></TouchableOpacity>
   
    </View>
  )
}