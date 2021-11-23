import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Heading from '../components/Heading';
import car from '../assets/Car.png';
import battery from '../assets/Battery.png';
import wave from '../assets/Wave.png';
import wheel from '../assets/Wheel.png';
import construction from '../assets/Construction.png';
import colors from '../assets/colors';
import BoxComp from '../components/BoxComp';
import Button from '../components/Button';
import Header from '../components/Header';
import {validatePathConfig} from '@react-navigation/core';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Home({navigation}) {
  let name = 'User';
  const _onPressSignUp = () => {
    navigation.navigate('AllServices');
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Header title="Menu" navigation={navigation} />
      <View style={styles.container}>
        <Image source={wave} style={styles.img_wave} />

        <View style={{flexDirection: 'row'}}>
          <Heading title="Hello," passedStyle={styles.heading} />
          <Heading title={name} passedStyle={styles.heading_username} />
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => {
              console.log('pressed');
            }}>
            <Image source={construction} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => {
              console.log('pressed');
            }}>
            <Image source={battery} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Towing</Text>
            <Text style={styles.text}>Battery</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => {
              console.log('pressed');
            }}>
            <Image source={car} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={() => {
              console.log('pressed');
            }}>
            <Image source={wheel} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Accident</Text>
            <Text style={styles.text}>Wheel</Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: height * 0.05,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            title="View All Services"
            onBtnPress={() => _onPressSignUp()}
            isBgColor={true}
          />
        </View>
        {/* </ScrollView> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img_wave: {
    marginTop: height * 0.05,
    marginLeft: width * 0.07,
  },
  heading: {
    color: 'black',
    marginLeft: width * 0.07,
    fontSize: width * 0.11,
    fontWeight: 'bold',
  },
  heading_username: {
    color: colors.themeBlue,
    fontSize: width * 0.11,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  boxContainer: {
    borderRadius: width * 0.02,
    height: height * 0.2,
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginLeft: width * 0.065,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.2,
    paddingVertical: height * 0.005,
  },

  text: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: width * 0.08,
    marginRight: width * 0.22,
    marginTop: height * 0.01,
  },
});

export default Home;
