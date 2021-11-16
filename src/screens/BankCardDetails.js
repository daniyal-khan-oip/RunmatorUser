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
import background_img from '../assets/backgroung-image.png';
import Heading from '../components/Heading'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BankCardDetails = ({navigation,route}) => {
  const [cardnumber, setCardnumber] = useState('');
  console.log(route.params)

  const _onPressSignUp = () => {
    if (cardnumber === '') {
      alert('All fields required');
    } else {
      navigation.navigate('Otp');
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={background_img} style={styles.image}>

          {/* <Text style={styles.text}>BANK ACCOUNT DETAILS</Text> */}

          <Heading title="BANK ACCOUNT DETAILS" />

        <View style={styles.inputBoxes}>
          <Inputbox
            value={cardnumber} 
            setTextValue={setCardnumber}
            placeholderTilte="Card Details"
            isSecure={true}
          />
        </View>
        <Button title="Sign Up" onBtnPress={() => _onPressSignUp()} />
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
  image: {
    justifyContent: 'center',
    width: width,
    height: height,
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

export default BankCardDetails;
