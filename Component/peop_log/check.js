import { CheckBox } from 'react-native-elements';

import { StyleSheet } from 'react-native';
import React from 'react'

export default function check(props) {
    const {
        title,
        checked,
        onPress,
        containerStyle,
        textStyle,
        checkedColor,
      } = props;
    
      return (
        <CheckBox
          title={title}
          checked={checked}
          onPress={onPress}
          containerStyle={containerStyle}
          textStyle={textStyle}
          checkedColor={checkedColor}
        />
      );
}
