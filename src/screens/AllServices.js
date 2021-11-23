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
import wheel from '../assets/Wheel.png';
import construction from '../assets/Construction.png';
import fuel_Out from '../assets/FuelOut.png';
import malfunction from '../assets/Malfunction.png';
import Header from '../components/Header';
import IconComp from '../components/IconComp';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function AllServices(props) {
  const _onPress = () => {
    console.log('Pressed');
  };
  let boxes_data = [
    {title: 'Towing', image: construction, navigation: 'History'},
    {title: 'Battery', image: battery, navigation: 'Wallet'},
    {title: 'Accident', image: car, navigation: 'Wallet'},
    {title: 'Flat Tire', image: wheel, navigation: 'Wallet'},
    {title: 'Fuel Out', image: fuel_Out, navigation: 'Wallet'},
    {
      title: 'Malfucntion',
      image: malfunction,
      navigation: 'Wallet',
    },
  ];
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Header
        showBack={true}
        navigation={props.navigation}
        iconName="arrow-back"
      />

      <Heading title="All Services" passedStyle={styles.heading} />
      <View style={styles.container}>
        {boxes_data.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                _onPress();
              }}>
              <View style={styles.boxContainer}>
                <Image source={item.image} />
              </View>
              <View style={styles.texticonhandler}>
                <Text style={styles.text}>{item.title}</Text>
                <IconComp
                  iconName="arrow-with-circle-right"
                  type={'Entypo'}
                  passedStyle={styles.icon}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.06,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor:'yello w',
    justifyContent: 'space-between',
  },
  heading: {
    marginLeft: width * 0.12,
  },
  boxContainer: {
    borderRadius: width * 0.02,
    height: height * 0.2,
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    // paddingHorizontal: width * 0.2,
    // paddingVertical: height * 0.005,
  },

  text: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: width * 0.02,
  },
  texticonhandler: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02,
  },

  icon: {
    // marginRight: width * 0.8,
  },
});

export default AllServices;
