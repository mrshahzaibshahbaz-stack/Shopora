import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CardIcon } from '../assets/Icons';
import { s } from 'react-native-size-matters';

export const CardView = () => {
  return (
    <View style={styles.container}>
      <CardIcon />
      <Text style={styles.title}>No master card added</Text>
      <Text style={styles.body}>
        You can save a mastercard and save it for later
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: s(220),
    backgroundColor: '#F7F8F9',
    marginVertical: s(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(20),
  },
  title: {
    marginTop: s(10),
    color: '#32343E',
    fontFamily: 'Sen',
    fontWeight: 700,
    fontSize: s(12.5),
  },
  body: {
    width: '65%',
    textAlign: 'center',
    letterSpacing: s(0.5),
    marginTop: s(5),
    lineHeight: s(15),
    fontSize: s(11),
    color: "#2D2D2D"
  },
});
