import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// Course Component
const Course = () => {
  const subjects = [
    { id: '1', name: 'Subject Name 1', time: 'Monday, Tuesday' },
    { id: '2', name: 'Subject Name 2', time: 'Wednesday' },
    { id: '3', name: 'Subject Name 3', time: 'Thursday' },
    { id: '4', name: 'Subject Name 4', time: 'Friday' },
    { id: '5', name: 'Subject Name 5', time: 'Monday' },
    { id: '6', name: 'Subject Name 5', time: 'Monday' },
    { id: '7', name: 'Subject Name 5', time: 'Monday' },
  ];

  return (
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
              style={styles.searchInput}
              placeholder="Search Courses by Code"
              placeholderTextColor="#999"
          />
        </View>

        {/* Course Name */}
        <Text style={styles.courseName}>Course Name - MDEV</Text>

        {/* Book List Section */}
        <View style={styles.bookListContainer}>
          <Text style={styles.bookListText}>Book List</Text>
          <TouchableOpacity>
            <Text style={styles.viewMoreText}>View More &gt;</Text>
          </TouchableOpacity>
        </View>

        {/* Subject List */}
        <FlatList
            data={subjects}
            renderItem={({ item }) => (
                <View style={styles.subjectCard}>
                  <Text style={styles.subjectName}>{item.name}</Text>
                  <Text style={styles.classTime}>Class Time</Text>
                  <Text style={styles.days}>{item.time}</Text>
                </View>
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false} // Hides the vertical scrollbar
        />
      </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bookListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f4ff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookListText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewMoreText: {
    fontSize: 14,
    color: '#007bff',
  },
  subjectCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 10,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  classTime: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  days: {
    fontSize: 14,
    color: '#007bff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  navItem: {
    fontSize: 12,
    color: '#666',
  },
  activeNavItem: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default Course;
