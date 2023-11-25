import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function FormLog(props) {
  const { placeholder } = props;

  return (
    <View>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={placeholder}
        style={{
          width: 320,
          height: 45,
          backgroundColor: '#D9D9D9',
          marginTop: 10,
          borderRadius: 10,
          paddingLeft: 20,
        }}
      ></TextInput>
    
    </View>
  );
}
