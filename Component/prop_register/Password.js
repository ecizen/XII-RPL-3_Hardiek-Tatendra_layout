import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Password() {
  return (
    <View>
      <Text>email</Text>
        <TextInput style={{width: 320, height: 45, backgroundColor: '#D9D9D9', marginTop: 10, borderRadius: 10, paddingLeft: 20,}}
        placeholder='masukan email anda'
        >
       
        </TextInput>

        <View style={{flexDirection :"row" , }}>
        <Text style={{marginTop: 20}}>password</Text>
        <Text style={{marginTop: 20, marginLeft: 110}}>confirm</Text>
        </View>
       
        <View style={{flexDirection: 'row', }}>
        <TextInput style={{width: 150, height: 45, backgroundColor: '#D9D9D9', marginTop: 10, borderRadius: 10, paddingLeft: 20,}}
        placeholder='password anda'
        ></TextInput>
       
        <TextInput style={{width: 150, height: 45, backgroundColor: '#D9D9D9', marginTop: 10, borderRadius: 10, paddingLeft: 20, marginLeft: 20}}
        placeholder='confirm '
        ></TextInput>
        </View>
    </View>
  )
}