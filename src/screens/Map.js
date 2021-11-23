import React,{useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import colors from '../assets/colors';
import Map_img from '../assets/Map.png';
import Button from '../components/Button';
import userimg from '../assets/user_image.png';
import IconComp from '../components/IconComp';
import Header from '../components/Header';
import GooglePlacesInput from '../components/GooglePlacesInput';
import ConfirmationPopupComp from '../components/ConfirmationPopupComp'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Map = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const onItemPress = (item, index) => {
    setModalData(item);
    setIsModalVisible(true);
  };
  return (
    <View>
      <Image source={Map_img} style={StyleSheet.absoluteFillObject} />
      <Header showBack={true} navigation={navigation} iconName="arrow-back" />
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:width*0.05}}>
          <GooglePlacesInput />
          <IconComp
            iconName="location-pin"
            type={'MaterialIcons'}
            passedStyle={{marginRight: width * 0.87,marginTop:height*0.04,color:'grey'}}
          />
        </View>
        <View style={styles.boxContainer}>
          <Image source={userimg} style={{marginLeft: width * 0.04}} />
          <Text style={styles.text}>Michael Reimer</Text>
          <TouchableOpacity>
            <IconComp
              iconName="chevron-with-circle-right"
              type={'Entypo'}
              passedStyle={styles.icon_style}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.boxContainer2}>
            <IconComp
              iconName="my-location"
              type={'MaterialIcons'}
              passedStyle={{fontSize: width * 0.07}}
            />
          </View>
        </TouchableOpacity>
        <Button title="Confirm" onBtnPress={() => onItemPress()} />
      </View>
      {isModalVisible && (
        <ConfirmationPopupComp
          data={modalData}
          showModal={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.92,
    alignItems: 'center',
  },

  boxContainer: {
    flexDirection: 'row',
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
    marginLeft: width * 0.6,
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
    fontSize: height * 0.03,
    fontWeight: 'bold',
    color: 'black',
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
