import React from 'react';
import { StyleSheet, View } from 'react-native';
import { s } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface SocialCircleProps {
  iconName: string;
  size?: number;
  color?: string;
}

const SocialCircle: React.FC<SocialCircleProps> = ({
  iconName,
  size = 24,
  color = '#3b5998',
}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        size={size}
        color={color}
        brand={true} // Brand icons ke liye true
      />
    </View>
  );
};

export default SocialCircle;

const styles = StyleSheet.create({
  container: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    backgroundColor: '#f8f8fc',
    borderColor: '#E4E6E8',
    borderWidth: s(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
});