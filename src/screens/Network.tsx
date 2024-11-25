import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const Network = () => {
  const students = [
    { name: "Aditya", onboardedDate: "4 August 2024" },
    { name: "Nazeef", onboardedDate: "4 August 2024" },
    { name: "Simran", onboardedDate: "4 August 2024" },
    { name: "Rahul", onboardedDate: "5 August 2024" },
    { name: "Anjali", onboardedDate: "6 August 2024" },
    { name: "Priya", onboardedDate: "7 August 2024" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {students.map((student, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.header}>Student Name</Text>
            <Text style={styles.studentName}>{student.name}</Text>

            {/* Accommodation Row */}
            <View style={styles.row}>
              <Image
                source={require("../assets/check.png")}
                style={styles.icon}
              />
              <Text style={styles.accommodationText}>Need Accommodation</Text>
            </View>

            {/* Recommend Part-time Row */}
            <View style={styles.row}>
              <Image
                source={require("../assets/slash.png")}
                style={styles.icon}
              />
              <Text style={styles.recommendationText}>
                Recommend Part-time
              </Text>
            </View>

            {/* Buttons Row */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.emailButton}>
                <Text style={styles.emailButtonText}>Email</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dmButton}>
                <Text style={styles.dmButtonText}>DM</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.onboardedText}>
              Onboarded - {student.onboardedDate}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: 14,
    color: "#999",
    marginBottom: 5,
  },
  studentName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  accommodationText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 10,
  },
  recommendationText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  emailButton: {
    backgroundColor: "#e6e7e8",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  dmButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  emailButtonText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "bold",
  },
  dmButtonText: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "bold",
  },
  onboardedText: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    marginTop: 5,
  },
});

export default Network;
