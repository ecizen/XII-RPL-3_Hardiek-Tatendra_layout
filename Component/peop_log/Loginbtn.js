import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'

export default function Loginbtn(prop) {
  return (
    <View>
     <TouchableOpacity  onPress={prop.onPress} style={{width:320, height: 45, borderRadius: 20, backgroundColor: 'black',paddingTop: 10}}>
      <Text
     
       style={{fontWeight: 'bold', fontSize: 14, color: 'white', textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}