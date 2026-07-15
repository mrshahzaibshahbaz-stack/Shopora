import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import { s, vs } from 'react-native-size-matters';
import { PaymentList } from '../components/PaymentList';
import { CardView } from '../components/CardView';
import PrimaryButton from '../components/PrimaryButton';

export const PaymentScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.paymentText}>Payment</Text>
      </View>
      <View>
        <PaymentList />
      </View>
      <View
        style={{
          marginHorizontal: s(20),
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardView />
      </View>
      <View style={{ marginHorizontal: s(20) }}>
        <PrimaryButton title="Add New" icon="plus" />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.totalText}>TOTAL:</Text>
        <Text style={styles.priceText}>$96</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 20, 
          left: 20, 
          right: 20, 
        }}
      >
        <PrimaryButton
          title="PAY & CONFIRM"
          borderWidth={0}
          backgroundColor="#FF7622"
          textColor="#ffffff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: s(20),
    marginStart: s(20),
  },
  paymentText: {
    fontSize: s(17),
    color: '#181C2E',
    marginStart: s(15),
    fontWeight: '600',
  },
  priceContainer: {
    marginHorizontal: s(20),
    marginTop: vs(70),
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalText: {
    color: '#A0A5BA',
    fontWeight: '400',
    fontSize: 14,
    marginRight: s(10),
  },
  priceText: {
    fontSize: 30,
  },
});
