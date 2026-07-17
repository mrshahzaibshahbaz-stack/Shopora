import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { WatchIcon, BagIcon, GlassesIcon, ShoeIcon } from '../assets/Icons';
import { ClockIcon } from 'react-native-heroicons/outline';
import { s } from 'react-native-size-matters';

interface CategoryItem {
  id: string;
  icon: (color: string) => React.ReactNode;
  name: string;
}

const dummyData: CategoryItem[] = [
  {
    id: '0',
    icon: (color) => <WatchIcon fill={color} fillOpacity={1} />,
    name: 'Watch',
  },
  {
    id: '1',
    icon: (color) => <ClockIcon color={color} />,   // only color
    name: 'Cloth',
  },
  {
    id: '2',
    icon: (color) => <BagIcon fill={color} fillOpacity={1} />,
    name: 'Bag',
  },
  {
    id: '3',
    icon: (color) => <ShoeIcon fill={color} fillOpacity={1} />,
    name: 'Shoe',
  },
  {
    id: '4',
    icon: (color) => <GlassesIcon fill={color} fillOpacity={1} />,
    name: 'Glasses',
  },
];

const CategoriesComponents = () => {
  const [selectedId, setSelectedId] = useState<string | null>('0');

  const renderItem = ({ item }: { item: CategoryItem }) => {
    const isSelected = selectedId === item.id;
    const iconColor = isSelected ? '#FFFFFF' : '#000000';

    return (
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => setSelectedId(item.id)}
        activeOpacity={0.7}
      >
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: isSelected ? '#F17547' : '#F0F0F0' },
          ]}
        >
          {item.icon(iconColor)}
        </View>
        <Text style={[styles.categoryName, { color: isSelected ? '#F17547' : '#333' }]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={dummyData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
    />
  );
};

export default CategoriesComponents;

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: s(20),
    paddingVertical: s(20),
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: s(15),
  },
  iconContainer: {
    width: s(60),
    height: s(60),
    borderRadius: s(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: s(5),
  },
  categoryName: {
    fontFamily: 'Inter',
    fontSize: s(12),
    textAlign: 'center',
  },
});