import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  useColorScheme,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { s, vs } from 'react-native-size-matters';
import TopTab from '../components/TopTab';
import Meditation from '../components/Meditation';
import { dummyData } from '../data/data';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? '#000000' : '#FFFFFF';
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  const renderItem = ({ item }: { item: (typeof dummyData)[number] }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CategoriesScreen')}>
      <Meditation imageURL={item.image} title={item.title} date={item.date} />
    </TouchableOpacity>
  );

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
          renderItem={renderItem}
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
