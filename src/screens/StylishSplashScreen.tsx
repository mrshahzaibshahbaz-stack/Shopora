import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StylishIcon } from '../assets/Icons';

const StylishSplashScreen = () => {
  return (
    <View style={styles.container}>
      <StylishIcon />
    </View>
  );
};

export default StylishSplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});
