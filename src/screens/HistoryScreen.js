import React, {useEffect, useState} from 'react';

import {
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Header from '../components/Header';
import HistoryModal from '../components/HistoryModal';
import Heading from '../components/Heading';
import IconComp from '../components/IconComp';
const {width, height} = Dimensions.get('window');

const HistoryScreen = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const onItemPress = (item, index) => {
    setModalData(item);
    setIsModalVisible(true);
  };

  // useEffect(() => {
  //   console.log({isModalVisible});
  // }, [isModalVisible]);
  return (
    <>
      <View style={styles.container}>
        <Header showBack={true}  navigation={props.navigation} iconName='arrow-back'/>
        <View style={{flexDirection: 'row'}}>
          <Heading title="History" passedStyle={styles.heading} />
        </View>
        <View
          style={[
            styles.rowView,
            {marginHorizontal: width * 0.05, marginVertical: height * 0.01},
          ]}>
          <Text style={styles.heading1}>Last Service</Text>
          <Text style={styles.heading1}>Paid</Text>
        </View>
        <View style={{marginLeft: width * 0.04, marginRight: width * 0.09}}>
          <FlatList
            data={dummyData}
            vertical
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item._id.toString()}
            contentContainerStyle={{
              marginHorizontal: width * 0.05,
            }}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={index}
                style={styles.rowView}
                onPress={() => onItemPress(item, index)}>
                <Text style={styles.textStyle}>{`${index + 1}. ${
                  item.text
                }`}</Text>
                <Text style={styles.textStyle}>{`$${item.price}`}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      {isModalVisible && (
        <HistoryModal
          data={modalData}
          showModal={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    color: 'black',
    marginLeft: width * 0.08,
    fontSize: width * 0.11,
    marginTop: height * 0.04,
    fontWeight: 'bold',
  },
  heading1: {
    marginTop: height * 0.05,
    marginLeft: width * 0.04,
    marginRight: width * 0.09,
    fontSize: width * 0.06,
    fontWeight: '800',
    color: 'black',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: height * 0.009,
  },
  textStyle: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: width * 0.05,
  },
});

const dummyData = [
  {
    _id: 1,
    text: 'flat tire',
    price: 5,
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
  {
    _id: 2,
    text: 'battery',
    price: 20,
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
  {
    _id: 3,
    text: 'accident',
    price: 200,
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
  {
    _id: 4,
    text: 'fuel out',
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',

    price: 10,
  },
  {
    _id: 5,
    text: 'towing',
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',

    price: 30,
  },
  {
    _id: 6,
    text: 'malfunction',
    location:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',

    price: 5,
  },
];
