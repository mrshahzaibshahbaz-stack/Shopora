import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

// Define the props this component expects
interface BannerProps {
  title: string;
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  buttonText: string;
}

const BannerComponent = ({
  title,
  backgroundColor,
  textColor,
  buttonColor,
  buttonText,
}: BannerProps) => {
  return (
    <View style={[styles.bannerCard, { backgroundColor }]}>
      <Text style={[styles.bannerTitle, { color: textColor }]}>
        {title}
      </Text>
      <View style={[styles.bannerButton, { backgroundColor: buttonColor }]}>
        <Text style={{ color: buttonText, fontFamily: 'Inter', fontWeight: '700' }}>
          Get Now
        </Text>
      </View>
    </View>
  );
};

export default BannerComponent;

const styles = StyleSheet.create({
  bannerCard: {
    width: s(250),
    borderRadius: s(15),
    padding: s(15),
    marginRight: s(12),
    justifyContent: 'center',
  },
  bannerTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: s(16),
    marginBottom: s(15),
  },
  bannerButton: {
    paddingHorizontal: s(15),
    paddingVertical: s(8),
    borderRadius: s(20),
    alignSelf: 'flex-start',
  },
});