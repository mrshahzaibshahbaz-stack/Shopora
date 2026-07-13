import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';
import { CashIcon } from '../assets/Icons';
import { s } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface payMethodCardPros {
  isSelected?: boolean;
  title: string;
  icon: ReactNode;
  onPress?: ()=> void;
}

export const PayMethodCard = ({
  isSelected = false,
  title,
  icon,
  onPress,
}: payMethodCardPros) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.cardContainer,
          isSelected && styles.selectedCardContainer,
        ]}
      >
        {isSelected && (
          <View style={styles.checkMarkContainer}>
            <Icon name="check" size={12} color={'#ffffff'} />
          </View>
        )}
        {icon}
      </View>
      <Text style={styles.cashText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: s(85),
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#F0F5FA',
    width: s(85),
    height: s(72),
    borderRadius: s(9.62),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: s(24),
  },
  cashText: {
    fontSize: s(14),
    color: '#464E57',
    fontWeight: 400,
  },

  selectedCardContainer: {
    backgroundColor: '#ffffff',
    borderWidth: s(2),
    borderColor: '#ff7622',
  },
  checkMarkContainer: {
    height: s(24),
    width: s(24),
    borderRadius: s(50),
    borderWidth: s(2),
    borderColor: '#ffffff',
    position: 'absolute',
    top: s(-10),
    right: s(-10),
    backgroundColor: '#ff7622',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
