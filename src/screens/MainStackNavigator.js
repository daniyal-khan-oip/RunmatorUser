import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';
import BankCardDetails from './BankCardDetails';
import Otp from './Otp';
import ForgotPassword from './ForgotPassword'
import ConfirmPassword from './ConfirmPassword'
import HistoryScreen from './HistoryScreen';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="History"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LogIn" component={LogIn} />

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="BankCardDetails" component={BankCardDetails} />

        <Stack.Screen name="Otp" component={Otp} />

        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />

        <Stack.Screen name="History" component={HistoryScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
