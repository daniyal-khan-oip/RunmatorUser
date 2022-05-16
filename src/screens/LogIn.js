import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  PermissionsAndroid,
  BackHandler,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
import logo from '../assets/run-matter-logo.png';
import background_img from '../assets/backgroung-image.png';
import colors from '../assets/colors';
import Heading from '../components/Heading';
import {connect} from 'react-redux';
import * as actions from '../store/Actions/index';
import LottieView from 'lottie-react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LogIn = ({navigation, UserReducer, userLogin, getCurrentLocation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [granted, setGranted] = useState(false);

  const _onPressLogIn = async () => {
    const data = {
      email: username,
      password: password,
      roll_id: 2,
    };
    setIsLoading(true);
    if (username === '' || password === '') {
      alert('Both fields required');
      onLoginFailed();
    } else {
      await userLogin(data, onLoginFailed);
    }
  };

  const _onPressSignUp = () => {
    navigation.navigate('SignUp');
  };

  const _onPresspassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const onLoginFailed = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (granted) {
      getCurrentLocation();
    }
  }, [granted]);

  useEffect(() => {
    async function requestLocationPermission() {
      try {
        const platformCheck = Platform.OS;
        if (platformCheck != 'ios') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setGranted(granted);
          } else {
            BackHandler.exitApp();
          }
        }
      } catch (err) {
        console.warn(err);
      }
    }
    requestLocationPermission();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={background_img} style={styles.image}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />

        {/* Input Fields  */}
        <View style={styles.inputBoxes}>
          <Inputbox
            value={username}
            setTextValue={setUsername}
            passedStyle={{
              margin: 0,
              borderWidth: 1,
              borderColor: colors.themeBlue,
            }}
            placeholderTilte="E-mail Address"
          />
          <Inputbox
            value={password}
            passedStyle={{
              color: 'black',
              margin: 0,
              borderWidth: 1,
              borderColor: colors.themeBlue,
            }}
            setTextValue={setPassword}
            placeholderTilte="Password"
            isSecure={true}
          />
        </View>

        {/* Login Button  */}
        {isLoading ? (
          <LottieView
            speed={1}
            style={styles.lottieStyles}
            autoPlay
            colorFilters={'blue'}
            loop
            source={require('../assets/Lottie/loading-blue.json')}
          />
        ) : (
          <Button
            title="Login"
            onBtnPress={() => _onPressLogIn()}
            isBgColor={true}
            btnStyle={styles.btnStyle}
            btnTextStyle={styles.btnTextStyle}
          />
        )}

        {/* Forgot Password  */}
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'center',
          }}>
          <Heading
            title="Forgot Password?"
            passedStyle={styles.forgetPass}
            fontType="medium"
          />
          <TouchableOpacity onPress={() => _onPresspassword()}>
            <Heading
              passedStyle={styles.clickHere}
              title="Click Here"
              fontType="semi-bold"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalLinePosition}>
          <View style={styles.horizontalLine} />
          <View>
            <Heading
              passedStyle={styles.orStyle}
              fontType="medium"
              title="Or"
            />
          </View>
          <View style={styles.horizontalLine} />
        </View>

        {/* Signup Button  */}
        <View style={{position: 'relative'}}>
          <Button
            title="Sign Up Now"
            onBtnPress={() => _onPressSignUp()}
            isBgColor={false}
            btnStyle={styles.btnSignUpStyle}
            btnTextStyle={styles.btnSignUpTextStyle}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lottieStyles: {
    height: height * 0.12,
    width: 100,
  },
  orStyle: {
    fontSize: width * 0.03,
    paddingHorizontal: width * 0.02,
    textAlign: 'center',
  },
  btnStyle: {
    backgroundColor: colors.themeBlue,
    borderRadius: width * 0.8,
    paddingHorizontal: height * 0.03,
    width: width * 0.8,
  },
  btnTextStyle: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },
  forgetPass: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: width * 0.035,
  },

  btnSignUpStyle: {
    backgroundColor: 'transparent',
    borderRadius: width * 0.8,
    width: width * 0.8,
    borderWidth: 1,
    borderColor: colors.themeBlue,
  },
  btnSignUpTextStyle: {
    color: colors.themeBlue,
    fontFamily: 'Montserrat-SemiBold',
  },

  clickHere: {
    color: colors.themeBlue,
    fontSize: width * 0.035,
    marginLeft: width * 0.01,
    textDecorationLine: 'underline',
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLinePosition: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: width * 0.5,
  },

  logo: {
    margin: 15,
    width: width * 0.5,
    height: height * 0.16,
    marginTop: height * 0.1,
    // backgroundColor:'red'
  },

  image: {
    // flex: 1,
    // resizeMode: 'stretch',
    justifyContent: 'center',
    width: width,
    height: height,
    // backgroundColor:'red',
    alignSelf: 'center',
    alignItems: 'center',
  },
  scrollview: {
    height: height,
  },
  inputBoxes: {
    marginTop: height * 0.02,
  },
});

// export default LogIn;
const mapStateToProps = ({UserReducer}) => {
  return {UserReducer};
};

export default connect(mapStateToProps, actions)(LogIn);
