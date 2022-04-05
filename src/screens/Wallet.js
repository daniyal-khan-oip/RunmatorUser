import React, {useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import {useIsFocused} from '@react-navigation/native';
import Heading from '../components/Heading';
import * as actions from '../store/Actions/index';
import colors from '../assets/colors';
import {connect} from 'react-redux';
import Button from '../components/Button';
import {useState} from 'react';
import BuyCreditsModal from '../components/BuyCreditsModal';

const {width, height} = Dimensions.get('window');

const HistoryScreen = ({
  UserReducer,
  navigation,
  getUserWalletBalance,
  buyCredits,
}) => {
  let isFocused = useIsFocused();
  let accessToken = UserReducer?.accessToken;
  let userId = UserReducer?.userData?.id;
  const [credits, setCredits] = useState('');
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const data = {
    user_id: userId,
  };
  useEffect(() => {
    if (isFocused === true) {
      getUserWalletBalance(data, accessToken);
    }
  }, [UserReducer?.myWallet, isFocused]);

  console.log(UserReducer?.myWallet,"UserReducer?.myWallet")
  const _onPressBuyCredits = () => {
    setIsLoading(true);
    // let formData = new FormData();
    // formData.append('user_id', UserReducer?.userData?.id);
    // formData.append('credit', credits);
    // formData.append('token', UserReducer?.userData?.token);
    const data = {
      credit: credits,
      user_id: UserReducer?.userData?.id,
      // token: UserReducer?.userData?.token,
    };
    buyCredits(data, accessToken).then(() => {
      setIsLoading(false);
      setShowCreditModal(false);
    });
  };


  return (
    <>
      <View style={styles.container}>
        <Header showBack={true} navigation={navigation} iconName="arrow-back" />
        <Heading title="Wallet" passedStyle={styles.heading} fontType="bold" />
        <View style={styles.centerView}>
          <View>
            <Heading
              passedStyle={styles.totalAmountInAcc}
              title="Total amount in your account:"
              fontType="medium"
            />
            <Heading
              passedStyle={styles.amount}
              title={`$${
                UserReducer?.myWallet !== ''
                  ? `${UserReducer?.myWallet}.00`
                  : '0.00'
              }`}
              fontType="bold"
            />
          </View>
          <Button
            title="Buy Credits ($)"
            onBtnPress={() => setShowCreditModal(true)}
            isBgColor={true}
            btnStyle={{alignSelf: 'center', marginBottom: 40}}
          />
        </View>
        {showCreditModal && (
          <BuyCreditsModal
            title={'Credit Details'}
            onPress={_onPressBuyCredits}
            isModalVisible={showCreditModal}
            setIsModalVisible={setShowCreditModal}
            showLoader={isLoading}
            credits={credits}
            buttonText="Buy"
            setCredits={setCredits}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centerView: {
    justifyContent: 'space-between',
    height: height * 0.8,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    marginLeft: width * 0.08,
    marginTop: height * 0.04,
  },
  totalAmountInAcc: {
    marginLeft: width * 0.08,
    marginTop: height * 0.03,
    color: 'rgba(0,0,0,0.7)',
    fontSize: width * 0.05,
  },
  amount: {
    color: colors.themeBlue,
    fontSize: height * 0.05,
    marginLeft: width * 0.08,
  },
});

const mapStateToProps = ({UserReducer}) => {
  return {UserReducer};
};
export default connect(mapStateToProps, actions)(HistoryScreen);
