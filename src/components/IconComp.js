import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const IconComp = ({iconName, iconSize, type, passedStyle}) => {
  switch (type) {
    case 'MaterialIcons':
      return (
        <MaterialIcons
          name={iconName}
          size={iconSize || 20}
          color={'#0756A3'}
          style={passedStyle}
        />
      );
    case 'Entypo':
      console.log(
        {iconName, iconSize, type, passedStyle},
        'Entypo-------------------------------',
      );
      return (
        <Entypo
          name={iconName}
          size={iconSize || 20}
          color={'#0756A3'}
          style={passedStyle}
        />
      );

    case 'Ionicons':
      return (
        <Ionicons
          name={iconName}
          size={iconSize || 20}
          color={'#0756A3'}
          style={passedStyle}
        />
      );

    default:
      return null;
      break;
  }
};

const styles = StyleSheet.create({});
export default IconComp;
