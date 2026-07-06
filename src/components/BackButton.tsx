import React from 'react';
import { TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import BackButtonIcon from '../assets/BackButtonIcon';

export default function BackButton() {
  return (
    <TouchableOpacity>
        <BackButtonIcon width={scale(40)} height={scale(40)}/>
    </TouchableOpacity>
  );
}