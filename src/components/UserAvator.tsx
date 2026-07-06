import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, useColorScheme } from 'react-native';
import { scale } from 'react-native-size-matters';
export default function UserAvator() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://www.superherotoystore.com/cdn/shop/articles/Toji_1200x.webp?v=1712589718',
        }}
        style={styles.avator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avator: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(25),
  },
});
