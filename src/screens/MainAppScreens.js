import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, StyleSheet, Text, View,SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import HistoryScreen from './HistoryScreen';
import AllServices from './AllServices';
import RateUs from './RateUs';
import Profile from './Profile';
import Wallet from './Wallet';
import Map from './Map';
import CustomDrawer from '../CustomDrawer';
import Help from './Help';
import HomeScreensStack from './HomeStackScreens';
import AlertModal from '../components/AlertModal';
import ChangePassword from './ChangePassword';
import CurrentBookings from './CurrentBookings';
const Drawer = createDrawerNavigator();

export default function MainAppScreens({navigation}) {
  const [loading, setLoading] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const routes = [
    {
      id: 1,
      iconName: 'home',
      iconType: 'Entypo',
      routeName: 'home',
    },
    {
      id: 2,
      iconName: 'history',
      iconType: 'MaterialIcons',
      routeName: 'history',
    },
    {
      id: 3,
      iconName: 'wallet',
      iconType: 'Entypo',
      routeName: 'wallet',
    },
    {
      id: 4,
      iconName: 'person-circle-sharp',
      iconType: 'Ionicons',
      routeName: 'profile',
    },
    // {
    //   id: 5,
    //   iconName: 'home-repair-service',
    //   iconType: 'MaterialIcons',
    //   routeName: 'current bookings',
    // },
    {
      id: 6,
      iconName: 'onepassword',
      iconType: 'MaterialCommunityIcons',
      routeName: 'change password',
    },
    // {
    //   id: 6,
    //   iconName: 'help-outline',
    //   iconType: 'MaterialIcons',
    //   routeName: 'help',
    // },
  ];

  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         title: 'Run Matter',
  //         message: 'Run Matter needs access to your camera.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the camera');
  //     } else {
  //       console.log('Camera permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // useEffect(() => {
  //   !loading && requestCameraPermission();
  // });

  // useEffect(() => {
  //   console.log(isErrorModalVisible)
  //   if (UserReducer?.errorModal?.status) {
  //     setIsErrorModalVisible(true);
  //     console.log("ttttttttttttttttttttttt")
  //   }
  //   if (UserReducer?.errorModal?.status === false) {
  //     setIsErrorModalVisible(false);
  //   }
  // }, [UserReducer?.errorModal]);

  if (loading) {
    return <Text>Main Screens Loading</Text>;
  } else {
    return (
      <>
        <Drawer.Navigator
          initialRouteName="home"
          screenOptions={{headerShown: false}}
          drawerContent={props => {
            return (
              <CustomDrawer
                navigation={props.navigation}
                routes={routes}
                drawerRoutes={props.state.routeNames}
              />
            );
          }}>
          <Drawer.Screen name="home" component={HomeScreensStack} />
          <Drawer.Screen name="history" component={HistoryScreen} />
          <Drawer.Screen name="current bookings" component={CurrentBookings} />
          <Drawer.Screen name="wallet" component={Wallet} />
          <Drawer.Screen name="rate us" component={RateUs} />
          <Drawer.Screen name="profile" component={Profile} />
          <Drawer.Screen name="change password" component={ChangePassword} />
        </Drawer.Navigator>
      </>
    );
  }
}

const styles = StyleSheet.create({});
