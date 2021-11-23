import React from 'react';
import {Rating} from 'react-native-ratings';

import {Dimensions,TouchableOpacity, Text} from 'react-native';
import {useState} from 'react';

const {width, height} = Dimensions.get('window');

const RatingComp = ({onclick}) => {
  return (
    <Rating
      showRating
      style={{marginTop: height * 0.1}}
      type="star"
      onFinishRating = {onclick()}
      fractions={true}
    />
  );
};

export default RatingComp;
