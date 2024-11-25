import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Saved</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Time Spent</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default Settings;
