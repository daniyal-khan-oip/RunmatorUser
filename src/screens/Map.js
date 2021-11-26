import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Linking,
  Image,
} from 'react-native';
import colors from '../assets/colors';
import Map_img from '../assets/Map.png';
import Button from '../components/Button';
import userimg from '../assets/user_image.png';
import IconComp from '../components/IconComp';
import Header from '../components/Header';
import Heading from '../components/Heading';
import GooglePlacesInput from '../components/GooglePlacesInput';
import ConfirmationPopupComp from '../components/ConfirmationPopupComp';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from '../components/BottomSheet';
import {BlurView} from '@react-native-community/blur';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Map = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('030322221112');
  const sheetRef = useRef();

  // Option Press Handler
  const onItemPress = (item, index) => {
    setModalData(item);
    // setIsModalVisible(true);
    sheetRef.current.open();
  };

  const _onPressStartTracking = () => {
    console.log('start tracking');
    sheetRef.current.close();
  };

  const _onPressCallNow = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  // Current Location
  const _onPressCurrentLoc = () => {
    console.log('Curr location');
  };
  return (
    <View>
      <Image source={Map_img} style={StyleSheet.absoluteFillObject} />
      <Header showBack={true} navigation={navigation} iconName="arrow-back" />

      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: width * 0.05,
          }}>
          <GooglePlacesInput />
          <IconComp
            iconName="location-pin"
            type={'MaterialIcons'}
            passedStyle={{
              marginRight: width * 0.87,
              marginTop: height * 0.04,
              color: 'grey',
            }}
          />
        </View>

        {/* Selected Rider Popup  */}
        <TouchableOpacity style={styles.boxContainer} activeOpacity={0.8}>
          <View style={styles.rowView}>
            <Image source={userimg} />
            <View>
              <Heading
                passedStyle={styles.text}
                title={'Michael Reimer'}
                fontType="bold"
              />
              <Heading
                passedStyle={styles.textMechanic}
                title={'Mechanic'}
                fontType="medium"
              />
            </View>
          </View>

          <IconComp
            iconName="chevron-with-circle-right"
            type={'Entypo'}
            passedStyle={styles.icon_style}
          />
        </TouchableOpacity>

        {/* Current Location  */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => _onPressCurrentLoc}
          style={styles.boxContainer2}>
          <IconComp
            iconName="my-location"
            type={'MaterialIcons'}
            passedStyle={{fontSize: width * 0.07}}
          />
        </TouchableOpacity>

        {/* Confirm Button  */}
        <Button
          title="CONFIRM"
          onBtnPress={() => onItemPress()}
          isBgColor={false}
          btnStyle={styles.btnStyle}
          btnTextStyle={styles.btnTextStyle}
        />
      </View>
      {isModalVisible && (
        <ConfirmationPopupComp
          data={modalData}
          showModal={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}

      {/* Bottom Sheet Component  */}
      <BottomSheet
        sheetRef={sheetRef}
        onPress={_onPressStartTracking}
        onPressCallNow={_onPressCallNow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.themeBlue,
    borderRadius: width * 0.02,
    width: width * 0.9,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
    fontFamily: 'Montserrat-Bold',
  },
  image: {
    width: width,
    height: height * 0.92,
    alignItems: 'center',
  },

  boxContainer: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
    justifyContent: 'space-between',
    borderRadius: width * 0.02,
    height: height * 0.13,
    width: width * 0.9,
    marginTop: height * 0.02,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#fff',
  },

  boxContainer2: {
    borderRadius: width * 0.02,
    height: height * 0.07,
    width: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.45,
    // marginLeft: width * 0.6,
    shadowColor: '#000',
    shadowOffset: {
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#fff',
  },

  text: {
    fontSize: height * 0.025,
    color: 'black',
    marginLeft: width * 0.03,
  },

  textMechanic: {
    fontSize: height * 0.017,
    color: 'gray',
    marginLeft: width * 0.03,
  },

  icon_style: {
    marginLeft: width * 0.14,
  },

  header: {
    backgroundColor: 'white',
  },
});

export default Map;
