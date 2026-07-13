import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { CashIcon, MasterIcon, PayPalIcon, VisaIcon } from '../assets/Icons';
import { PayMethodCard } from './PayMethodCard';
import { s } from 'react-native-size-matters';

const paymentMethods = [
  { label: 'Cash', icon: <CashIcon /> },
  { label: 'Vise', icon: <VisaIcon /> },
  { label: 'Mastercard', icon: <MasterIcon /> },
  { label: 'PayPal', icon: <PayPalIcon /> },
];

export const PaymentList = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  return (
    <View>
      <FlatList
        data={paymentMethods}
        keyExtractor={item => item.label}
        renderItem={({ item }) => (
          <PayMethodCard title={item.label} icon={item.icon} 
          onPress={()=> setSelectedMethod(item.label)}
          isSelected={selectedMethod===item.label}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: s(12), paddingHorizontal: s(15) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
