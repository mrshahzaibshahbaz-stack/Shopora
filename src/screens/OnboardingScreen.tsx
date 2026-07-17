import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { s } from 'react-native-size-matters';
import PrimaryButton from '../components/PrimaryButton';

const OnboardingScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/euxieu6pfnxqedvcxzph',
      }}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark Overlay */}
      <View style={styles.overlay} />

      {/* Content */}
      <View style={styles.container}>
        <Text style={styles.heading}>You want Authentic, here you go!</Text>
        <View>
          <Text style={styles.body}>Find it here, buy it now!</Text>
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <PrimaryButton
          title="Get Started"
          textColor="#ffffff"
          borderColor="#F83758"
          backgroundColor='#F83758'

        />
      </View>
    </ImageBackground>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: s(20),
    marginTop: s(200),
  },

  heading: {
    color: '#fff',
    fontSize: s(30),
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  body: {
    color: '#F2F2F2',
    fontFamily: 'Montserrat',
  },

  buttonStyle: {
    marginHorizontal: s(40),
    marginBottom: s(20)
  },
});
