import { StyleSheet, Text, View, StatusBar, useColorScheme } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundColor = isDarkMode ? '#000000' : '#FFFFFF';
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={backgroundColor}
        translucent={false}
      />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;