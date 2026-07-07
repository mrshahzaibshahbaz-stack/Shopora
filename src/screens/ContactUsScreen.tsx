import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  StatusBar,
} from 'react-native';
import { scale, s, vs } from 'react-native-size-matters';
import BackButton from '../components/BackButton';
import SocialSection from '../components/SocialSection';
import UserAvator from '../components/UserAvator';

export default function ContactUsScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'light';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <BackButton />
        <UserAvator />
      </View>

      <Text style={styles.screenTitle}>Contact Us</Text>

      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platform</Text>
        <SocialSection title="WhatsApp" icon="whatsapp" color="#25D366" />
        <SocialSection title="X" icon="x-twitter" color="#000000" />
        <SocialSection title="Instagram" icon="instagram" color="#E4405F" />
        <SocialSection title="Snap Chat" icon="snapchat" color="#FFFC00" />
        <SocialSection title="TikTok" icon="tiktok" color="#000000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: scale(50),
    marginHorizontal: scale(17),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialContainer: {
    backgroundColor: '#F5F5FA',
    borderRadius: scale(14),
    paddingHorizontal: scale(18),
    paddingVertical: scale(15),
    marginTop: scale(22),
  },
  socialTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: scale(6),
  },
  screenTitle: {
    fontSize: s(30),
    fontWeight: '600',
    marginTop: vs(20),
    marginStart: s(19),
    color: '#111827',
  },
});