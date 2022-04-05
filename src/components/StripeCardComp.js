import React from 'react';
import {connect} from 'react-redux';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import colors from '../assets/colors';

export const StripeCardComp = ({setId}) => {
  const {createToken} = useStripe();
  return (
    <>
      <CardField
        autofocus={true}
        postalCodeEnabled={false}
        placeholder={{
          number: '**** **** **** ****',
        }}
        cardStyle={{
          backgroundColor: 'white',
          textColor: colors.themeBlue,
          borderWidth: 1,
          borderColor: colors.themeBlue,
          borderRadius: 5,
        }}
        style={{
          width: '90%',
          height: 50,
          //   marginBottom: 10,
          //   alignSelf: 'center',
          //   backgroundColor:'red'
        }}
        onCardChange={cardDetails => {
          console.log(cardDetails);
          if (cardDetails?.complete) {
            createToken(cardDetails).then(res => {
              console.log(res);
              setId(res?.token?.id);
            });
          }
        }}
      />
    </>
  );
};

export default StripeCardComp;
