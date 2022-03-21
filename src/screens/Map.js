import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import colors from '../assets/colors';
import Button from '../components/Button';
import IconComp from '../components/IconComp';
import LottieView from 'lottie-react-native';
import Header from '../components/Header';
import BottomSheet from '../components/BottomSheet';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {connect} from 'react-redux';
import * as actions from '../store/Actions/index';
import Heading from '../components/Heading';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.010101;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = ({
  UserReducer,
  navigation,
  requestForService,
  route,
  getCurrentBookings,
}) => {
  const sheetRef = useRef();
  const [modalData, setModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = UserReducer?.accessToken;
  const [location, setLocation] = useState('Karachi');
  const [coordinates, setCoordinates] = useState(UserReducer?.coords);
  const [phoneNumber, setPhoneNumber] = useState('030322221112');
  const SERVICE = route?.params?.item;

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

  const confirmBooking = () => {
    setIsLoading(true);
    const apiData = {
      user_id: UserReducer?.userData?.id,
      service_id: SERVICE?.id,
      lat: coordinates?.lat,
      long: coordinates?.lng,
      radius: 10,
    };
    requestForService(
      apiData,
      accessToken,
      _onFailed,
      _onPressModalSuccessButton,
      isLoading,
    );
  };

  const _onFailed = () => {
    setIsLoading(false);
  };

  const _onPressModalSuccessButton = () => {
    navigation.navigate('Home');
  };
  
  return (
    <View style={styles.container}>
      <Header showBack={true} navigation={navigation} iconName="arrow-back" />
      <MapView
        style={{width: '100%', height: '100%', position: 'absolute', top: 60}}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: coordinates?.lat || UserReducer?.coords?.lat,
          longitude: coordinates?.lng || UserReducer?.coords?.lng,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}>
        <Marker
          coordinate={{
            latitude: coordinates?.lat || UserReducer?.coords?.lat,
            longitude: coordinates?.lng || UserReducer?.coords?.lng,
          }}
        />
      </MapView>
      <View style={styles.contentContainer}>
        <View
          style={{
            height: height * 0.4,
            // shadowColor: '#000',
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
            // shadowOpacity: 0.25,
            // shadowRadius: 3.84,
            // backgroundColor: 'white',
            // elevation: 5,
          }}>
          {/* Rider Search Component  */}
          <GooglePlacesAutocomplete
            placeholder="Enter Your Location"
            fetchDetails={true}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              console.log(details?.geometry?.location);
              setCoordinates(details?.geometry?.location);
              setLocation(data?.description);
            }}
            query={{
              key: 'AIzaSyAE-uaXvfrMbCdPVqIF3xL_4pfzocEdM48',
              language: 'en',
            }}
            onFail={err => console.log('error is here:::', err)}
            renderLeftButton={() => (
              <IconComp
                iconName="location-pin"
                type="Entypo"
                passedStyle={styles.locationIcon}
              />
            )}
            styles={{
              textInputContainer: {
                width: width * 0.9,
                backgroundColor: 'white',
                borderRadius: width * 0.025,
                height: height * 0.084,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              },
              textInput: {
                borderRadius: width * 0.025,
                height: height * 0.084,
                color: '#5d5d5d',
                fontSize: width * 0.04,
              },
            }}
          />
        </View>

        {/* Current Location & Confirm Button Container  */}
        <View>
          {/* Current Location  */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setCoordinates(UserReducer?.coords)}
            style={styles.boxContainer2}>
            <IconComp
              iconName="my-location"
              type={'MaterialIcons'}
              passedStyle={styles.myLocIconStyle}
            />
          </TouchableOpacity>

          {/* Confirm Button  */}
          {isLoading ? (
            <View style={styles.lottieContainer}>
              <LottieView
                speed={1}
                style={styles.lottieStyles}
                autoPlay
                colorFilters={'blue'}
                loop
                source={require('../assets/Lottie/loading-yellow.json')}
              />
              <Heading
                title={'Requesting...'}
                passedStyle={styles.requestLabel}
              />
            </View>
          ) : (
            <Button
              title="CONFIRM"
              onBtnPress={() => confirmBooking()}
              isBgColor={true}
              btnStyle={styles.btnStyle}
              btnTextStyle={styles.btnTextStyle}
            />
          )}
        </View>
      </View>

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
  container: {
    flex: 1,
  },
  myLocIconStyle: {
    fontSize: width * 0.08,
  },
  lottieStyles: {
    height: height * 0.12,
    width: 100,
    marginLeft: width * 0.03,
    marginTop: height * -0.01,
  },
  requestLabel: {
    fontSize: width * 0.055,
    color: 'white',
    // backgroundColor: 'red',
    position: 'absolute',
    marginLeft: width * 0.3,
    top: height * 0.02,
    zIndex: 999,
  },
  lottieContainer: {
    backgroundColor: colors.themeBlue,
    borderRadius: width * 0.02,
    width: width * 0.9,
    height: height * 0.08,
  },
  locationIcon: {
    color: 'gray',
    alignSelf: 'center',
    fontSize: width * 0.052,
    paddingLeft: width * 0.03,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: width * 0.05,
    justifyContent: 'space-between',
    marginVertical: height * 0.03,
  },
  btnStyle: {
    backgroundColor: colors.themeBlue,
    borderRadius: width * 0.02,
    width: width * 0.9,
    margin: 0,
    marginTop: height * 0.03,
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
    marginTop: height * 0.12,
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
    alignSelf: 'flex-end',
    justifyContent: 'center',
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

const mapStateToProps = ({UserReducer}) => {
  return {UserReducer};
};

export default connect(mapStateToProps, actions)(Map);

/* <View
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
      </View> */

/* Selected Rider Popup  */
/* <TouchableOpacity style={styles.boxContainer} activeOpacity={0.8}>
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
          </TouchableOpacity> */
