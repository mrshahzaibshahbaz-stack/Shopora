import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { HelloFaloIcon, MenuIcon, SearchIcon } from '../assets/Icons';
import { s } from 'react-native-size-matters';
import BannerComponent from '../components/BannerComponent';
import CategoriesComponents from '../components/CategoriesComponents';
import ProductItem from '../components/ProductItem';

const dummyDiscountBanner = [
  {
    id: 0,
    title: '20% OFF DURING THE WEEKEND',
    backgroundColor: '#F17547',
    textColor: '#ffffff',
    buttonColor: '#ffffff',
    buttonText: '#F17547',
  },
  {
    id: 1,
    title: '20% OFF DURING THE WEEKEND',
    backgroundColor: '#1383F1',
    textColor: '#ffffff',
    buttonColor: '#50D63B',
    buttonText: '#ffffff',
  },
];

interface DiscountItem {
  id: number;
  title: string;
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  buttonText: string;
}

const CategoriesScreen = () => {
  // ✅ Correct typing: renderItem receives { item: DiscountItem }
  const renderItem = ({ item }: { item: DiscountItem }) => (
    <BannerComponent
      title={item.title}
      backgroundColor={item.backgroundColor}
      textColor={item.textColor}
      buttonColor={item.buttonColor}
      buttonText={item.buttonText}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconBg}>
          <MenuIcon />
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.iconBg}>
          <SearchIcon />
        </View>
      </View>

      <View style={styles.helloSection}>
        <Text style={styles.helloText}>Hello Fola</Text>
        <HelloFaloIcon />
      </View>
      <Text style={styles.letText}>Let’s start shopping!</Text>

      {/* FlatList with proper typing */}
      <View style={styles.bannerListContainer}>
        <FlatList
          data={dummyDiscountBanner}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerListContent}
        />
      </View>

      <View style={styles.Categories}>
        <Text style={styles.categoryTitle}>Top Categories</Text>
        <View style={{ flex: 1 }}></View>
        <Text style={styles.seeTitle}>See All</Text>
      </View>
      <View>
        <CategoriesComponents />
      </View>
      <View style={{flex: 1}}>
        <ProductItem />
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: s(30),
    marginHorizontal: s(20),
  },
  iconBg: {
    width: s(35),
    height: s(35),
    backgroundColor: '#D9D9D940',
    borderRadius: s(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloSection: {
    marginTop: s(20),
    marginHorizontal: s(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  helloText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: s(18),
    marginEnd: s(6),
  },
  letText: {
    fontFamily: 'Inter',
    marginHorizontal: s(20),
    color: '#00000080',
    marginBottom: s(10),
  },
  bannerListContainer: {
    marginStart: s(20),
    height: s(140), // adjust as needed
  },
  bannerListContent: {
    paddingVertical: s(5),
  },
  bannerCard: {
    width: s(250),
    borderRadius: s(15),
    padding: s(15),
    marginRight: s(12),
    justifyContent: 'center',
  },
  bannerTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: s(16),
    marginBottom: s(15),
  },
  bannerButton: {
    paddingHorizontal: s(15),
    paddingVertical: s(8),
    borderRadius: s(20),
    alignSelf: 'flex-start',
  },
  Categories: {
    flexDirection: 'row',
    marginHorizontal: s(20),
    marginTop: s(10),
    alignItems: 'center',
  },
  categoryTitle: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 20,
  },
  seeTitle: {
    color: '#F17547',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: s(13),
  },
});
