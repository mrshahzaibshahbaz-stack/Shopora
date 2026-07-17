import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import { HreatIcon } from '../assets/Icons';

interface ProductInterface {
  id: string;
  productLink: string;
  title: string;
  discount: string;
}

const ProductData: ProductInterface[] = [
  {
    id: '1',
    productLink: 'https://m.media-amazon.com/images/I/91z5KuonXrL.jpg',
    title: 'Redmi Note 4',
    discount: '50% OFF',
  },
  {
    id: '2',
    productLink:
      'https://tse4.mm.bing.net/th/id/OIP.UxLEuHuztZuJ0dEjS-Q0ugHaG0?r=0&pid=ImgDet&w=184&h=169&c=7&dpr=1.3&o=7&rm=3',
    title: 'Apple Watch - series 6',
    discount: '50% OFF',
  },
  {
    id: '3',
    productLink:
      'https://tse1.mm.bing.net/th/id/OIP.RdD-SxPMcCQITb6bepe-KgHaIp?r=0&pid=ImgDet&w=184&h=215&c=7&dpr=1.3&o=7&rm=3',
    title: 'Redmi Note 4',
    discount: '50% OFF',
  },
  {
    id: '4',
    productLink:
      'https://tse1.mm.bing.net/th/id/OIP.b4ey1rkjtNI-3RcPTSXxzAHaHa?r=0&pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3',
    title: 'Redmi Note 4',
    discount: '50% OFF',
  },
];

const ProductItem = () => {
  const renderItem = ({ item }: { item: ProductInterface }) => (
    <View style={styles.productCard}>
      <Text style={styles.productDiscount}>{item.discount}</Text>
      <HreatIcon style={styles.hreatIcon} />
      <Image source={{ uri: item.productLink }} style={styles.productImage} />
      
      {/* Bottom info: title on top, price below */}
      <View style={styles.bottomInfo}>
        <Text style={styles.productTitle} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Rs 45,000</Text>
          <Text style={[styles.priceText, styles.originalPrice]}>Rs 55,000</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={ProductData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.columnWrapper}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: s(10),
    paddingVertical: s(10),
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: s(15),
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: s(10),
    padding: s(10),
    marginHorizontal: s(5),
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: {
    width: '60%',
    height: s(120),
    resizeMode: 'contain',
    borderRadius: s(8),
  },
  productDiscount: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: s(10),
    color: '#000000BF',
    position: 'absolute',
    start: s(10),
    top: s(5),
  },
  hreatIcon: {
    position: 'absolute',
    top: s(5),
    end: s(10),
  },
  // NEW: vertical container for title and price
  bottomInfo: {
    width: '100%',
    marginTop: s(6),
    alignItems: 'flex-start', // left align both
  },
  productTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: s(12),
    color: '#000',
    marginBottom: s(3), // space before price
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: s(11),
    color: '#000',
    marginRight: s(4),
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: s(10),
    fontWeight: '400',
  },
});