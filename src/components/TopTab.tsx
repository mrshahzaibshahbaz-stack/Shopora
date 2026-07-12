import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const tabsArr = ["Live", "Recorded"];

const ACTIVE_BG = "#75563B";

const ACTIVE_TEXT = "#FFFFFF";
const INACTIVE_TEXT = "#2C2016";

const TopTabs = () => {
  const [activeTab, setActiveTab] = useState("Live");

  return (
    <View style={styles.container}>
      {tabsArr.map((tabName) => {
        const isActive = activeTab === tabName;

        return (
          <TouchableOpacity
            style={[
              styles.tabButton,
              isActive && { backgroundColor: ACTIVE_BG },
            ]}
            onPress={() => setActiveTab(tabName)}
            key={tabName}
          >
            <Text style={isActive ? styles.activeText : styles.inActiveText}>
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    height: vs(48),
    flexDirection: "row",
    alignItems: "center",
    padding: s(4),
  },
  tabButton: {
    height: vs(32),
    flex: 1,
    borderRadius: s(8),
    justifyContent: "center",
    alignItems: "center",
  },
  activeText: {
    color: ACTIVE_TEXT,
    fontSize: s(14),
    fontWeight: "semibold",
  },
  inActiveText: {
    fontSize: s(14),
    color: INACTIVE_TEXT,
  },
});
