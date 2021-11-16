import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Heading from '../components/Heading';
import car from '../assets/Car.png';
import battery from '../assets/Battery.png';
import wave from '../assets/Wave.png';
import wheel from '../assets/Wheel.png';
import construction from '../assets/Construction.png';
import colors from '../assets/colors';
import BoxComp from '../components/BoxComp';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Home({navigation}) {
  // const { navigation } = props;
  let name = "Minhal";
  return (
    <View style={styles.container}>
      <Image source={wave} style={styles.img_wave} />

      <View style={{ flexDirection: "row" }}>
        <Heading title="Hello," passedStyle={styles.heading} />
        <Heading title={name} passedStyle={styles.heading_username} />

        <BoxComp />
      </View>
      <TouchableOpacity style={styles.boxContainer} onPress={() => { navigation.navigate("History") }}>
        <Heading title="History" passedStyle={styles.historyText} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img_wave: {
    marginTop: height * 0.15,
    marginLeft: width * 0.12,
  },
  heading: {
    color: 'black',
    marginLeft: width * 0.12,
    fontSize: width * 0.11,
    fontWeight: 'bold',

  },
  heading_username: {
    color: colors.themeBlue,
    fontSize: width * 0.11,
    fontWeight: 'bold',
    fontStyle: 'italic'

  },
  historyText: {
    color: colors.themeBlue,
    fontSize: width * 0.07,
    fontWeight: 'bold',

  },
  boxContainer: {
    borderRadius: width * 0.02,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.2,
    width: width * 0.45,
    paddingVertical: height * 0.005,
  }
});

export default Home;
