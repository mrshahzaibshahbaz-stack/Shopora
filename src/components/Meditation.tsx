import { ImageBackground, StyleSheet, Text, View, Dimensions,  } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';
import { VideoIcon } from '../assets/Icons';


const PhoneDimensions = Dimensions.get("window").width
const CardDimension = (PhoneDimensions - s(14)*3)/2

interface MeditationCardPros {
  imageURL: string,
  title: string,
  date: string,
}

const Meditation = ({imageURL, title, date}: MeditationCardPros) => {
  return (
    <ImageBackground
      source={{
        uri: imageURL,
      }}
      style={styles.container}
      imageStyle={styles.image}
      resizeMode="cover"
    >
      <View style={styles.liveContainer}>
        <Text style={styles.liveText}>Live</Text>
      </View>

      <View style={styles.overLay} />

      <View style={styles.textContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.dateContainer}>
          <VideoIcon />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Meditation;

const styles = StyleSheet.create({
  container: {
    height: s(160),
    width: CardDimension,
    borderRadius: s(12),
    overflow: 'hidden',
  },
  image: {
    borderRadius: s(12),
  },
  textContent: {
    position: 'absolute',
    left: s(10),
    bottom: s(10),
    zIndex: 2,
  },
  title: {
    color: '#ffffff',
    fontSize: s(12),
    fontWeight: '600',
  },
  overLay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.60)',
    zIndex: 1,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: '#ffffff',
    fontSize: s(12),
    marginStart: s(7),
  },
  liveContainer: {
    backgroundColor: '#E41111',
    width: s(39),
    height: s(22),
    borderRadius: s(90),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: s(8),
    right: s(8),
    zIndex: 2,
  },
  liveText: {
    color: '#ffffff',
    fontSize: s(12),
    fontWeight: '600',
  },
});
