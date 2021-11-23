import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import Header from '../components/Header';
import HistoryModal from '../components/HistoryModal';
import Heading from '../components/Heading';
import IconComp from '../components/IconComp';
import colors from '../assets/colors';
import smile from '../assets/Smile.png';
import RatingComp from '../components/RatingComp';
const {width, height} = Dimensions.get('window');

const RateUs = props => {

  const [rateValue, setRateValue] = useState([1, 2, 3, 4, 5]);

  const press = () => {
    console.log(rateValue);
  };

  return (
    <>
      <View style={styles.container}>
        <Header
          showBack={true}
          navigation={props.navigation}
          iconName="arrow-back"
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: height * 0.09,
          }}>
          <Image
            source={smile}
            style={{justifyContent: 'center', alignItems: 'center'}}
          />
          <RatingComp onclick={press}  onFinishRating={rateValue}/>

          <Heading
            title={'ThankYou for Rating'.toUpperCase()}
            passedStyle={styles.heading}
          />
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: width * 0.017,
  },
  heading: {
    color: colors.themeBlue,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.1,
    textAlign: 'center',
  },
});
export default RateUs;
