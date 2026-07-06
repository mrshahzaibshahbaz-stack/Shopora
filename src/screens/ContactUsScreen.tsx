import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  StatusBar,
} from 'react-native';
import UserAvator from '../components/UserAvator';

export default function ContactUsScreen() {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <UserAvator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },

});
