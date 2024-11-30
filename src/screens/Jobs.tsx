import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
} from "react-native";



// JobCard Component
const JobCard = ({ title, description, location, startDate, pay }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.jobTitle}>{title}</Text>
      <Text style={styles.jobDescription}>{description}</Text>
      <Text style={styles.location}>{location}</Text>

      <View style={styles.jobDetails}>
        <Text style={styles.startDate}>Start Date</Text>
        <Text style={styles.date}>{startDate}</Text>
      </View>
      <View style={styles.jobDetails}>
        <Text style={styles.pay}>Pay</Text>
        <Text style={styles.payRate}>{pay}</Text>
      </View>

      <TouchableOpacity
        style={styles.applyButton}
        accessibilityLabel={`Apply for ${title}`}
        accessibilityHint="Tap to apply for this job"
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>

      
    </View>
  );
};

const Jobs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const partTimeJobs = [
    {
      id: "1",
      title: "Tim Hortons Sales",
      description:
        "Lorem ipsum Lorem Ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      location: "Barrie, ON JKS 90L",
      startDate: "16th August 2024",
      pay: "16/hr CAD",
    },
    {
      id: "2",
      title: "LCBO Customer Representative",
      description:
        "Lorem ipsum Lorem Ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      location: "Barrie, ON JKS 90L",
      startDate: "16th August 2024",
      pay: "16/hr CAD",
    },
    {
      id: "3",
      title: "Walmart Associate",
      description:
        "Lorem ipsum Lorem Ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      location: "Barrie, ON JKS 90L",
      startDate: "16th August 2024",
      pay: "16/hr CAD",
    },
  ];

  const fullTimeJobs = [
    {
      id: "4",
      title: "Software Engineer",
      description:
        "Develop and maintain software applications. Experience with React Native and Node.js required.",
      location: "Toronto, ON",
      startDate: "1st September 2024",
      pay: "80,000 CAD/year",
    },
    {
      id: "5",
      title: "Project Manager",
      description:
        "Manage project timelines, budgets, and teams. PMP certification preferred.",
      location: "Vancouver, BC",
      startDate: "1st October 2024",
      pay: "90,000 CAD/year",
    },
    {
      id: "6",
      title: "Marketing Specialist",
      description:
        "Create and implement marketing strategies to increase brand awareness.",
      location: "Montreal, QC",
      startDate: "15th August 2024",
      pay: "70,000 CAD/year",
    },
    {
      id: "7",
      title: "HR Manager",
      description: "Handle recruitment, employee relations, and HR policies.",
      location: "Ottawa, ON",
      startDate: "10th August 2024",
      pay: "75,000 CAD/year",
    },
  ];

  // Functions to handle tab selection
  const selectTab1 = () => setSelectedTab(1);
  const selectTab2 = () => setSelectedTab(2);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.welcomeText}>Welcome to Jobs</Text> */}

      <View style={styles.tabButtonContainer}>
        {/* Part-Time Tab */}
        <TouchableOpacity
          onPress={selectTab1}
          accessibilityLabel="Part-time jobs"
          accessibilityHint="Tap to view part-time jobs"
        >
          <Text
            style={[styles.tabText, selectedTab === 1 && styles.activeTabText]}
          >
            Part-time
          </Text>
          {selectedTab === 1 && <View style={styles.underline} />}
        </TouchableOpacity>

        {/* Full-Time Tab */}
        <TouchableOpacity
          onPress={selectTab2}
          accessibilityLabel="Full-time jobs"
          accessibilityHint="Tap to view full-time jobs"
        >
          <Text
            style={[styles.tabText, selectedTab === 2 && styles.activeTabText]}
          >
            Full-time
          </Text>
          {selectedTab === 2 && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>

      {/* Display the content based on the selected tab */}
      {selectedTab === 1 && (
        <FlatList
          data={partTimeJobs}
          renderItem={({ item }) => (
            <JobCard
              title={item.title}
              description={item.description}
              location={item.location}
              startDate={item.startDate}
              pay={item.pay}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.scrollContainer}
        />
      )}

      {selectedTab === 2 && (
        <FlatList
          data={fullTimeJobs}
          renderItem={({ item }) => (
            <JobCard
              title={item.title}
              description={item.description}
              location={item.location}
              startDate={item.startDate}
              pay={item.pay}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.scrollContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  welcomeText: {
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 24,
  },
  tabButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginBottom: 20,
  },
  tabText: {
    fontSize: 18,
    color: "gray",
  },
  activeTabText: {
    color: "black",
    fontWeight: "bold",
  },
  underline: {
    height: 2,
    backgroundColor: "black",
    marginTop: 5,
  },
  scrollContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  location: {
    fontSize: 14,
    color: "#999",
    marginBottom: 10,
  },
  jobDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  startDate: {
    fontSize: 14,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#007bff",
  },
  pay: {
    fontSize: 14,
    fontWeight: "bold",
  },
  payRate: {
    fontSize: 14,
    color: "#666",
  },
  applyButton: {
    backgroundColor: "#d0e3ff",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 15,
  },
  applyButtonText: {
    fontSize: 16,
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default Jobs;
