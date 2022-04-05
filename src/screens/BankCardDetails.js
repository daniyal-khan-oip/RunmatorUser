import React, {useState} from 'react';
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
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
import * as actions from '../store/Actions/index';
import background_img from '../assets/backgroung-image.png';
import Heading from '../components/Heading';
import colors from '../assets/colors';
import {StripeProvider} from '@stripe/stripe-react-native';
import StripeCardComp from '../components/StripeCardComp';
import {connect} from 'react-redux';
import {PUB_KEY_STRIPE} from '../configurations/config';
import LottieView from 'lottie-react-native';
import Header from '../components/Header';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BankCardDetails = ({navigation, route, userSignup, setErrorModal}) => {
  const navParams = route.params;
  console.log(navParams)
  const [stripeGeneratedKey, setStripeGeneratedKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const _onPressSignUp = async () => {
    setIsLoading(true);
    let data = {
      ...navParams,
      custoken: stripeGeneratedKey,
    };
    if (stripeGeneratedKey === '') {
      alert('Card number is required');
    } else {
      // console.log(data)
      await userSignup(data, _onSignUpFailed);
    }
  };

  const _onSignUpFailed = () => {
    setIsLoading(false);
  };
  return (
    <ImageBackground source={background_img} style={styles.image}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button
          title="Back"
          onBtnPress={() => navigation.goBack()}
          isBgColor={false}
          btnStyle={styles.backButton}
          // btnTextStyle={styles.btnTextStyle}
        />
        <View style={styles.centerView}>
          <Heading
            title="BANK ACCOUNT DETAILS"
            fontType="extra-bold"
            passedStyle={styles.heading}
          />

          <View style={styles.stripeInputView}>
            <StripeProvider publishableKey={PUB_KEY_STRIPE}>
              <StripeCardComp setId={setStripeGeneratedKey} />
            </StripeProvider>
          </View>

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
              title="Sign Up"
              onBtnPress={() => _onPressSignUp()}
              isBgColor={true}
              btnStyle={styles.btnStyle}
              btnTextStyle={styles.btnTextStyle}
            />
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: width * 0.2,
    borderWidth: 0,
    margin: 0,
    borderRadius: 0,
  },
  stripeInputView: {
    flexDirection: 'row',
    marginHorizontal: width * 0.03,
    marginVertical: height * 0.03,
  },
  centerView: {
    height: height,
    alignItems:'center',
    marginTop:height * 0.15,
  },
  lottieStyles: {
    height: height * 0.12,
    width: 100,
  },
  heading: {
    color: colors.themeBlue,
    textAlign: 'center',
    fontSize: width * 0.09,
  },
  btnStyle: {
    backgroundColor: colors.themeBlue,
    borderRadius: width * 0.8,
    width: width * 0.8,
  },
  btnTextStyle: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },

  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLinePosition: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: width * 0.5,
  },
  image: {
    width: width,
    height: height,
  },
  inputBoxes: {
    marginTop: height * 0.02,
  },
});

export default connect(null, actions)(BankCardDetails);
