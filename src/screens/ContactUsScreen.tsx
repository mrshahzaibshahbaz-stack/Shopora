import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  StatusBar,
} from 'react-native';
import UserAvator from '../components/UserAvator';
import { scale } from 'react-native-size-matters';
import BackButton from '../components/BackButton';

export default function ContactUsScreen() {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <BackButton />
        <UserAvator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(50),
    marginHorizontal: scale(17),
  },
});
