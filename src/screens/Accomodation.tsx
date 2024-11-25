import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const AccommodationCard = ({ accommodation, onPressContact }) => {
  return (
    <View style={styles.card}>
      <View style={styles.column}>
        <Text style={styles.text}>{accommodation.title}</Text>
      </View>
      <View style={styles.column}>
        <Image style={styles.image} source={accommodation.image}></Image>
      </View>
      <View style={styles.row1}>
        <Text style={styles.subText}>{accommodation.desc}</Text>
      </View>
      <View style={styles.row}>
        <Image style={styles.icon} source={require("../assets/home.png")}></Image>
        <Text style={styles.subText}>{accommodation.address}</Text>
      </View>
      <View style={styles.row}>
        <Image style={styles.icon} source={require("../assets/check.png")}></Image>
        <Text style={styles.subText}>{accommodation.price}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.secondaryBtn} onPress={onPressContact}>
          <Text style={styles.secondaryText}>Contact to Visit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Accommodation = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const accommodations = [
    {
      title: "Looking for a Roommate",
      image: require("../assets/room2.png"),
      desc: "1 Bedroom, Kitchen, and 1 Bath - 600 Sq.ft",
      address: "35 Bayfield Street",
      price: "1500$ CAD/ month",
    },
    {
      title: "Cozy Apartment in Downtown",
      image: require("../assets/room1.png"),
      desc: "2 Bedrooms, 1 Kitchen, and 2 Baths - 800 Sq.ft",
      address: "100 King Street",
      price: "1800$ CAD/ month",
    },
    {
      title: "Shared Living Space",
      image: require("../assets/room2.png"),
      desc: "Shared Bedroom, Kitchen, and Bath - 500 Sq.ft",
      address: "250 Queen Street",
      price: "1200$ CAD/ month",
    },
    {
      title: "Modern Condo for Rent",
      image: require("../assets/room1.png"),
      desc: "1 Bedroom, Kitchen, and 1 Bath - 700 Sq.ft",
      address: "400 Wellington Street",
      price: "1600$ CAD/ month",
    },
    {
      title: "Furnished Studio Apartment",
      image: require("../assets/room1.png"),
      desc: "Studio, Kitchen, and 1 Bath - 450 Sq.ft",
      address: "50 Front Street",
      price: "1400$ CAD/ month",
    },
  ];

  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>List of Accommodations</Text>
          {accommodations.map((accommodationDetails, index) => (
            <AccommodationCard
              key={index}
              accommodation={accommodationDetails}
              onPressContact={handlePress}
            />
          ))}
        </View>
      </ScrollView>

      {/* Modal for Contact Confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Would you like to share your details with the property agent to book a visit?
            </Text>
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.primaryText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.secondaryText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 20,
    textAlign: "left",
  },
  card: {
    width: "100%",
    padding: 20,
    marginVertical: 10,
    borderWidth: 0.1,
    borderRadius: 10,
    shadowOpacity: 0.2,
    elevation: 2,
    backgroundColor: "#FFF",
  },
  row: {
    flexDirection: "row",
    padding: 5,
    marginBottom: 15,
    alignItems: "center",
  },
  row1: {
    flexDirection: "row",
    marginBottom: 15,
  },
  column: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  subText: {
    fontWeight: "300",
    paddingLeft: 10,
  },
  text: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "600",
  },
  icon: {
    width: 20,
    height: 20,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryBtn: {
    width: "100%",
    height: 40,
    backgroundColor: "#5E83FB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 10,
  },
  secondaryBtn: {
    width: "100%",
    height: 40,
    backgroundColor: "#E6EBFD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 20,
  },
  primaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryText: {
    color: "#5E83FB",
    fontSize: 16,
    fontWeight: "700",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Accommodation;
