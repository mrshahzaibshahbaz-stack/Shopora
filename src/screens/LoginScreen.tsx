import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import CustomTextInput from '../components/CustomTextInput';
import Icon from 'react-native-vector-icons/FontAwesome6';
import PrimaryButton from '../components/PrimaryButton';
import CirculeComponent from '../components/CirculeComponent';
import { useNavigation } from '@react-navigation/native';
import { AppleIcon, FacebookIcon, GoogleIcon } from '../assets/Icons';

export const LoginScreen = () => {
  const navigation = useNavigation<any>()
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.welcomeText}>Back!</Text>
      <View>
        <CustomTextInput
          placeholder="Enter Email"
          keyboardType="email-address"
          leftIcon={<Icon name="user-large" />}
        />
      </View>

      <View style={{ marginTop: s(10) }}>
        <CustomTextInput
          placeholder="Password"
          isPassword={true}
          leftIcon={<Icon name="lock" />}
          rightIcon={<Icon name="eye" />}
        />
      </View>
      <View>
        <Text style={styles.forgetPassword}>Forget Password?</Text>
      </View>
      <View style={{ marginTop: 80 }}>
        <PrimaryButton
          title="Login"
          textColor="#ffffff"
          borderColor="#F83758"
          backgroundColor="#F83758"
          onPress={() => navigation.replace('HomeScreen')}
        />
      </View>
      <View style={styles.continueText}>
        <Text>- OR Continue with -</Text>
        <View style={styles.IconCircle}>
          <CirculeComponent icon=<GoogleIcon /> />
          <CirculeComponent icon=<AppleIcon /> />
          <CirculeComponent icon=<FacebookIcon /> />
        </View>
        <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Create An Account</Text>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: s(30),
    marginTop: s(50),
  },
  welcomeText: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 36,
    color: '#000000',
  },
  forgetPassword: {
    marginTop: s(8),
    position: 'absolute',
    end: 0,
    color: '#F83758',
  },
  continueText: {
    marginTop: s(40),
    justifyContent: 'center',
    alignItems: 'center',
    color: '#575757',
    fontFamily: 'Montserrat',
    fontSize: s(12),
  },
  IconCircle: {
    marginTop: s(10),
    flexDirection: 'row',
    gap: s(5),
  },
  accountContainer: {
    marginTop: s(10),
    flexDirection: 'row',
  },
  signUpText: {
    fontWeight: 700,
    marginLeft: s(5),
    color: '#F83758',
    textDecorationLine: 'underline',
    fontFamily: "Montserrat"
  },
  accountText: {
    color: "#575757",
    fontFamily: "Montserrat"
  }
});
