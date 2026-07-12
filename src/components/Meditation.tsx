import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { VideoIcon } from '../assets/Icons';


const PhoneDimensions = Dimensions.get("window").width
const CardDimension = (PhoneDimensions - s(16)*3)/2


const Meditation = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YTGZCxSIRYDM4tUMA_oaf9DR_skcwuoTC3kr6BZEhw&s=10',
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
        <Text style={styles.title}>Meditation</Text>
        <View style={styles.dateContainer}>
          <VideoIcon />
          <Text style={styles.dateText}>31th Jan - 9:00 AM</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Meditation;

const styles = StyleSheet.create({
  container: {
    height: s(150),
    width: CardDimension,
    borderRadius: s(12),
    overflow: 'hidden',
    marginTop: s(10)
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
