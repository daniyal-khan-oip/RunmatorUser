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
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
import logo from '../assets/run-matter-logo.png';
import background_img from '../assets/backgroung-image.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _onPressLogIn = () => {
    if (email === '' || password === '') {
      alert('Invalid Login');
    } else {
      navigation.navigate('Home');
      console.log(email);
    }
  };
  const _onPressSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={background_img} style={styles.image}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.inputBoxes}>
          <Inputbox
            value={email}
            setTextValue={setEmail}
            placeholderTilte="Email"
          />
          <Inputbox
            value={password}
            setTextValue={setPassword}
            placeholderTilte="Password"
            isSecure={true}
          />
        </View>
        <Button title="Login" onBtnPress={() => _onPressLogIn()} />
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'center',
          }}>
          <Text>Forgot Password?</Text>
          <TouchableOpacity>
            <Text style={{color: 'blue'}}> Click Here</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalLinePosition}>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={{width: 30, textAlign: 'center'}}>Or</Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>
        <View style={{position: 'relative'}}>
          <Button
            title="Sign Up Now"
            onBtnPress={() => _onPressSignUp()}
            isBgColor={false}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

  logo: {
    margin: 15,
    width: width * 0.5,
    height: height * 0.16,
    marginTop: height * 0.1,
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

export default LogIn;
