// components/PrimaryButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface PrimaryButtonProperty {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  icon?: string;
  iconSize?: number;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
}

export const PrimaryButton = ({
  title,
  onPress,
  disabled = false,
  icon,
  iconSize = 15,
  textColor = '#FF7622',
  backgroundColor = '#FFFFFF',
  borderColor = '#F0F5FA',
  borderWidth = 2,
}: PrimaryButtonProperty) => {
  

  const finalTextColor = disabled ? '#B0B0B0' : textColor;
  const finalBgColor = disabled ? '#F0F0F0' : backgroundColor;
  const finalBorderColor = disabled ? '#E0E0E0' : borderColor;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: finalBgColor,
          borderColor: finalBorderColor,
          borderWidth: borderWidth,
          opacity: disabled ? 0.6 : 1,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      {icon && (
        <Icon
          name={icon}
          size={iconSize}
          color={finalTextColor}
          style={styles.iconSpacing}
        />
      )}

      <Text style={[styles.text, { color: finalTextColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  iconSpacing: {
    marginRight: 5,
  },
});

export default PrimaryButton;