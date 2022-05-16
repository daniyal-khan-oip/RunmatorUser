import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  LogBox,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Heading from '../components/Heading';
import car from '../assets/Car.png';
import battery from '../assets/Battery.png';
import wave from '../assets/Wave.png';
import wheel from '../assets/Wheel.png';
import construction from '../assets/Construction.png';
import colors from '../assets/colors';
import BoxComp from '../components/BoxComp';
import Button from '../components/Button';
import Header from '../components/Header';
import OptionsMapper from '../components/OptionsMapper';
import * as actions from '../store/Actions/index';
import {connect} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

LogBox.ignoreLogs(['new NativeEventEmitter']);

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function Home({navigation, UserReducer, getAllServices, ServicesReducer}) {
  const [services, setServices] = useState([]);
  let isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = UserReducer?.accessToken;
  const [options, setOptions] = useState(dummyOptions);
  let name = UserReducer?.userData?.name.split(' ')[0];
  // let name = 'Chrsitiano';

  // Options Handler
  const _onPressOptions = (item, index) => {
    navigation.navigate('Map', {item});
  };

  const _onPressSignUp = () => {
    navigation.navigate('AllServices');
  };

  useEffect(() => {
    if (isFocused === true) {
      setIsLoading(true);
      getAllServices(accessToken);
    }
  }, [isFocused]);

  useEffect(() => {
    if (ServicesReducer?.services?.length > 0) {
      let arr = [];
      ServicesReducer?.services?.map((ele, idx) => {
        if (idx < 4) {
          arr.push(ele);
        }
      });
      setServices(arr);
      setIsLoading(false);
    }
  }, [ServicesReducer?.services]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header title="Menu" navigation={navigation} />

        {/* Features FlatList  */}
        <FlatList
          vertical
          numColumns={2}
          nestedScrollEnabled={true}
          // style={{height: height * 0.83}}
          contentContainerStyle={styles.flatListContentContainerStyle}
          data={services?.length > 0 ? services : dummyOptions}
          keyExtractor={item => item?.id?.toString()}
          ListHeaderComponent={() => (
            <View style={styles.greetingContainer}>
              <View style={styles.animationView}>
                <Heading
                  title="Hello,"
                  passedStyle={styles.heading}
                  fontType="bold"
                />
                <Heading
                  title={
                    name?.length > 12 ? `${name?.substring(0, 12)}...` : name
                  }
                  passedStyle={[
                    styles.heading_username,
                    name?.length > 7 && {fontSize: width * 0.08},
                  ]}
                  fontType="bold"
                />
              </View>
              <Image source={wave} style={styles.img_wave} />
            </View>
          )}
          ListFooterComponentStyle={styles.footerStyles}
          ListFooterComponent={() => {
            return (
              !isLoading && (
                <Button
                  title="View All Services"
                  onBtnPress={() => _onPressSignUp()}
                  isBgColor={true}
                  btnStyle={styles.btnStyle}
                  btnTextStyle={styles.btnTextStyle}
                />
              )
            );
          }}
          renderItem={({item, index}) => (
            <OptionsMapper
              item={item}
              index={index}
              onPress={_onPressOptions}
              isLoading={isLoading}
            />
          )}
        />

        {/* All Services  */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  animationView: {
    flexDirection: 'column',
    justifyContent: 'center',
    // marginLeft: width * 0.05,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red',
    width: width * 0.8,
    justifyContent: 'space-between',
    textTransform: 'capitalize',
    marginTop: height * 0.02,
    marginHorizontal: width * 0.05,
  },
  btnStyle: {
    backgroundColor: colors.themeBlue,
    borderRadius: width * 0.08,
    width: width * 0.6,
  },
  btnTextStyle: {
    color: 'white',
    fontSize: width * 0.04,
  },
  flatListContentContainerStyle: {
    alignItems: 'center',
    // justifyContent:'space-between'
  },
  allServicesStyle: {
    // marginVertical: height * 0.05,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img_wave: {
    // marginTop: height * 0.08,
    width: width * 0.15,
    height: height * 0.08,
  },
  heading: {
    color: 'black',
    fontSize: width * 0.11,
  },
  heading_username: {
    color: colors.themeBlue,
    fontSize: width * 0.11,
    paddingLeft: width * 0.02,
  },
  boxContainer: {
    borderRadius: width * 0.02,
    height: height * 0.2,
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginLeft: width * 0.065,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.2,
    paddingVertical: height * 0.005,
  },

  text: {
    fontSize: width * 0.05,
    color: '#000',
    marginLeft: width * 0.08,
    marginRight: width * 0.22,
    marginTop: height * 0.01,
  },
  footerStyles: {
    paddingTop: height * 0.07,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
const mapStateToProps = ({UserReducer, ServicesReducer}) => {
  return {UserReducer, ServicesReducer};
};
export default connect(mapStateToProps, actions)(Home);

const dummyOptions = [
  {
    id: 1,
    services_name: 'Loading',
    services_icon: '',
  },
  {
    id: 2,
    services_name: 'Loading',
    services_icon: '',
  },
  {
    id: 3,
    services_name: 'Loading',
    services_icon: '',
  },
  {
    id: 4,
    services_name: 'Loading',
    services_icon: '',
  },
];
