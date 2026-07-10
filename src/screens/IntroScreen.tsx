import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';
import FoodLogo from '../assets/FoodLogo';
import SunImage from '../assets/SunImage';

export default function IntroScreen() {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FoodLogo />
      <Text>Intro Screen</Text>
      <SunImage style={styles.sunImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunImage:{
    position: 'absolute',
    bottom: 0,
    right: 0,
  }
});
