import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import colors from '../assets/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Button = ({title, onBtnPress, isBgColor = true}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        isBgColor ? styles.btnWithBgColor : styles.btnWithOutBgColor,
      ]}
      onPress={() => {
        onBtnPress();
      }}>
      <Text
        style={[
          styles.text,
          {color: isBgColor ? '#ffffff' : colors.themeBlue},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  btn: {
    width: width * 0.8,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    paddingVertical: height * 0.018,
    margin: 15,
  },
  btnWithBgColor: {
    backgroundColor: colors.themeBlue,
  },
  btnWithOutBgColor: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderWidth:1,
    borderColor:colors.themeBlue,
  },
});

export default Button;
