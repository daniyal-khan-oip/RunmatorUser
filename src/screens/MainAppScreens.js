import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import HistoryScreen from './HistoryScreen';
import AllServices from './AllServices';
import RateUs from './RateUs';
import Profile from './Profile';
import Wallet from './Wallet';
import Map from './Map';

const Drawer = createDrawerNavigator();

export default function MainAppScreens({navigation}) {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Text>Main Screens Loading</Text>;
  } else {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown:false}}
        // drawerContent={() => }
        >
        <Drawer.Screen name="Home" component={Home} />

        <Drawer.Screen name="History" component={HistoryScreen} />

        <Drawer.Screen name="AllServices" component={AllServices} />

        <Drawer.Screen name="Wallet" component={Wallet} />

        <Drawer.Screen name="RateUs" component={RateUs} />

        <Drawer.Screen name="Profile" component={Profile} />

        <Drawer.Screen name="Map" component={Map} />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

