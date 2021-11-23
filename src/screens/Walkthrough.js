import React from 'react';
import Heading from '../components/Heading';
import Button from '../components/Button';
import background_img from '../assets/backgroung-image.png';
import logo from '../assets/run-matter-logo.png';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Walkthrough = ({navigation}) => {
  const _onPressSignUp = () => {
    navigation.navigate('LogIn');
  };
  return (
    <ImageBackground source={background_img} style={styles.image}>
      <Image resizeMode="contain" source={logo} style={styles.logo} />
        <View style={{marginVertical:height*0.2}}>
        <Button
            title="Get Started >"
            onBtnPress={() => _onPressSignUp()}
            isBgColor={true}
        />
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    alignSelf: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.6,
    height: height * 0.22,
    marginTop: height * 0.4,
  },
});

export default Walkthrough;
