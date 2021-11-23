import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import AuthRootStackScreens from './AuthRootStackScreens';
import MainAppScreens from './MainAppScreens';
const MainNavigator = () => {
    
    const [token, setToken] = useState("sample");
    const [loading, setLoading] = useState(false);
  if (loading) {
    return <Text>Loading</Text>;
  } else {
    return (
      <NavigationContainer>
        {token != null ? <MainAppScreens /> : <AuthRootStackScreens />}
      </NavigationContainer>
    );
  }
};

export default MainNavigator;

const styles = StyleSheet.create({});
