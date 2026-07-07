import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { s } from 'react-native-size-matters';
import SocialCircle from './SoicalCircle';
import { SendIcon } from '../assets/Icons';

interface SocialSectionProps {
  title: string;
  icon: string;
  color?: string;
}

const SocialSection: React.FC<SocialSectionProps> = ({
  title,
  icon,
  color = '#3b5998',
}) => {
  return (
    <View style={styles.container}>
      <SocialCircle iconName={icon} color={color} />
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.sendIcon}>
        <SendIcon style={styles.sendIcon}/>
      </TouchableOpacity>
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6E8',
    paddingVertical: s(15),
  },
  sendIcon: {
    width: s(46),
    height: s(46),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1077AF',
    borderRadius: s(23),
  },
  text: {
    color: '#8083A3',
    marginStart: s(14),
    flex: 1,
    fontFamily: 'Public Sans',  
    fontSize: s(12),
  },
});