import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import HistoryModal from '../components/HistoryModal';
import Heading from '../components/Heading';
import IconComp from '../components/IconComp';
import colors from '../assets/colors';

const {width, height} = Dimensions.get('window');

const HistoryScreen = props => {
  let amount = '1000.00';

  return (
    <>
      <View style={styles.container}>
        <Header
          showBack={true}
          navigation={props.navigation}
          iconName="arrow-back"
        />
        <View style={{flexDirection: 'row'}}>
          <Heading title="Wallet" passedStyle={styles.heading} />
        </View>
        <Text style={{marginLeft: width * 0.08, marginTop: height * 0.03}}>
          Total Amount in account
        </Text>
          <Text style={styles.amount}>${amount}</Text>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    marginLeft: width * 0.08,
    marginTop: height * 0.04,
  },

  amount: {
    color: colors.themeBlue,
    fontSize: height * 0.06,
    fontWeight: 'bold',
    marginLeft: width * 0.08,
  },
});
export default HistoryScreen;
