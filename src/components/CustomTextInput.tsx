import React, { ReactElement, useEffect, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { s } from 'react-native-size-matters';

interface Props extends TextInputProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;

  iconSize?: number;
  iconColor?: string;

  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  backgroundColor?: string;

  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;

  isPassword?: boolean;
}

const CustomTextInput = ({
  leftIcon,
  rightIcon,

  iconSize = 15,
  iconColor = '#626262',

  borderColor = '#A8A8A9',
  borderWidth = 2,
  borderRadius = 10,
  backgroundColor = '#F3F3F3',

  containerStyle,
  inputStyle,

  isPassword = false,

  ...props
}: Props) => {
  const [secure, setSecure] = useState(isPassword);

  useEffect(() => {
    setSecure(isPassword);
  }, [isPassword]);

  return (
    <View
      style={[
        styles.container,
        {
          borderColor,
          borderWidth,
          borderRadius,
          backgroundColor,
        },
        containerStyle,
      ]}>
      {/* Left Icon */}
      {leftIcon && (
        <View style={styles.icon}>
          {React.cloneElement(leftIcon, {
            width: s(iconSize),
            height: s(iconSize),
            size: s(iconSize),
            color: iconColor,
          } as any)}
        </View>
      )}

      {/* Input */}
      <TextInput
        {...props}
        style={[styles.input, inputStyle]}
        placeholderTextColor="#676767"
        secureTextEntry={secure}
      />

      {/* Right Icon */}
      {rightIcon && (
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={0.7}
          onPress={() => {
            if (isPassword) {
              setSecure(prev => !prev);
            }
          }}>
          {React.cloneElement(rightIcon, {
            size: s(iconSize),
            color: iconColor,
          } as any)}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    height: s(55),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(15),
    marginTop: s(20),
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    marginHorizontal: s(8),
    fontSize: s(15),
    color: '#000',
    paddingVertical: 0,
  },
});