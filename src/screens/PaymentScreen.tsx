import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackButton from '../components/BackButton';
import { s } from 'react-native-size-matters';
import { PayMethodCard } from '../components/PayMethodCard';
import { PaymentList } from '../components/PaymentList';

export const PaymentScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.paymentText}>Payment</Text>
      </View>
      <View>
       <PaymentList/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: s(20),
    marginStart: s(20)
  },
  paymentText: {
    fontSize: s(17),
    color: '#181C2E',
    marginStart: s(15),
    fontWeight: '600',
  },
});
