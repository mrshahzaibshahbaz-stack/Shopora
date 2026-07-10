import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { s } from 'react-native-size-matters';

const tabs = ['Live', 'Recorded'];

const TopTab = () => {
  const [activeTab, setActiveTab] = useState('Live');

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <TouchableOpacity
            key={tab}
            activeOpacity={0.8}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tabButton,
              isActive && styles.activeTab,
            ]}>
            <Text
              style={[
                styles.tabText,
                isActive && styles.activeText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F4',
    borderRadius: s(12),
    padding: s(4),
    marginTop: s(20),
  },

  tabButton: {
    flex: 1,
    height: s(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(8),
  },

  activeTab: {
    backgroundColor: '#75563B',
  },

  tabText: {
    fontSize: s(14),
    fontWeight: '600',
    color: '#2C2016',
  },

  activeText: {
    color: '#FFFFFF',
  },
});