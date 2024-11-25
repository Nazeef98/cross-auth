import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.profileTitle}>Profile</Text> */}
      </View>
      <Image
        style={styles.avatar}
        source={require("../assets/profile.png")}
      />
      <Text style={styles.name}>Nazeef Ahmad Farooqui</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Email Address</Text>
          <Text style={styles.info}>Test@gmail.com</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Phone Number</Text>
          <Text style={styles.info}>XXXXXXXXXX</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.info}>74 Bayfield, Barrie, ON</Text>
        </View>
      </View>
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
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 30,
  },
  infoContainer: {
    marginHorizontal: 20,
  },
  infoBox: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  label: {
    fontSize: 16,
    color: "#888",
  },
  info: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 5,
  },
});

export default Profile;
