import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

import Heading from '../components/Heading';
import IconComp from '../components/IconComp';
import colors from '../assets/colors';
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
import AvatarComp from '../components/AvatarComp';
import {color} from 'native-base/lib/typescript/theme/styled-system';
const {width, height} = Dimensions.get('window');

const Profile = props => {
  const pressed = () => {
    console.log('pressed');
  };
  var str = 'Michael Reimer';
  var matches = str.match(/\b(\w)/g);
  var acronym = matches.join('');
  return (
    <>
      <View style={styles.container}>
        <Header
          showBack={true}
          navigation={props.navigation}
          iconName="arrow-back"
          iconSize={25}
        />
        <View style={{flexDirection: 'row'}}>
          <Heading title="Profile Setting" passedStyle={styles.heading} />
        </View>
        <View style={styles.boxContainer}>
          <Text
            style={{fontSize: 24, fontWeight: 'bold', color: colors.themeBlue}}>
            {acronym}
          </Text>
          <TouchableOpacity onPress={() => pressed()}>
            <IconComp
              iconName="camera-alt"
              type={'MaterialIcons'}
              passedStyle={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: height * 0.035, marginRight: width * 0.01}}>
          Michael Reimer
          </Text>
          <TouchableOpacity onPress={() => pressed()}>
            <IconComp iconName="pencil-sharp" type={'Ionicons'} iconSize={20} />
          </TouchableOpacity>
        </View>
        <Inputbox
          passedStyle={styles.border_line}
          placeholderTilte="Change Password"
        />
        <Inputbox
          passedStyle={styles.border_line}
          placeholderTilte="Confirm Password"
        />
        <View style={{alignItems: 'center', marginTop: height * 0.1}}>
          <Button title="Save" onBtnPress={() => pressed()} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLinePosition: {
    flexDirection: 'row',
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
  },
  heading: {
    color: 'black',
    marginLeft: width * 0.08,
    fontSize: width * 0.11,
    marginTop: height * 0.04,
    fontWeight: 'bold',
  },
  boxContainer: {
    borderRadius: width * 0.5,
    height: height * 0.27,
    width: width * 0.55,
    alignItems: 'center',
    marginLeft: width * 0.22,
    marginTop: width * 0.06,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#C7C7C7',
    paddingHorizontal: width * 0.2,
    paddingVertical: height * 0.005,
    position: 'relative',
  },

  boxContainer1: {
    borderRadius: (width * 0.5) / 2,
    height: height * 0.07,
    position: 'absolute',
    marginLeft: width * 0.65,
    marginTop: width * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#0756A3',
    paddingHorizontal: width * 0.07,
  },
  icon: {
    backgroundColor: colors.themeBlue,
    color: '#ffffff',
    position: 'absolute',
    top: height * 0.03,
    left: width * 0.13,
    paddingVertical: height * 0.01,
    paddingHorizontal: height * 0.01,
    borderRadius: width,
  },
  border_line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: width * 0.95,
  },
});
export default Profile;
