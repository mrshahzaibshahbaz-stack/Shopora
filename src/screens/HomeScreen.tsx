import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  useColorScheme,
  FlatList,
} from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import TopTab from '../components/TopTab';
import Meditation from '../components/Meditation';
import { dummyData } from '../data/data';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? '#000000' : '#FFFFFF';
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={backgroundColor}
        translucent={false}
      />
      <View style={styles.container}>
        <Text style={styles.title}>HomeScreen</Text>

        <Text
          style={{
            color: '#2C2016',
            fontSize: s(14),
            marginBottom: vs(16),
          }}
        >
          Lorem Ipsum is simply dummy text
        </Text>
        <TopTab />
        <FlatList
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Meditation imageURL={item.image} title={item.title} date={item.date}/>}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{
            marginBottom: s(16),
            justifyContent: 'space-between',
          }}
          contentContainerStyle={
            {
              paddingBottom: vs(150),
              paddingTop: vs(24)
            }
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: s(30),
    marginHorizontal: s(16),
    gap: 6,
  },
  title: {
    fontSize: s(20),
    fontFamily: 'Montserrat',
    fontWeight: 'semibold',
    color: '#1D150F',
  },
  titleBody: {
    fontSize: s(14),
    fontFamily: 'Montserrat',
    fontWeight: '400',
    color: '#2C2016',
  },
});
