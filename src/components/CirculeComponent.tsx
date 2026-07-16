import { StyleSheet, View } from 'react-native';
import React from 'react';

interface IconInterface {
  icon: React.ReactNode;
}

const CirculeComponent = ({ icon }: IconInterface) => {
  return (
    <View style={styles.container}>
      {icon}
    </View>
  );
};

export default CirculeComponent;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCF3F6',
    borderWidth: 1,
    borderColor: '#F83758',
  },
});