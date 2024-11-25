import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const messages = [
  {
    id: "1",
    name: "Nazeef",
    message: "How are you doing?",
    avatar: require("../assets/profile1.png"),
  },
  {
    id: "2",
    name: "Simran",
    message: "You replied: Working on the assignment",
    avatar: require("../assets/profile2.png"),
  },
  {
    id: "3",
    name: "Nandini",
    message: "Lorem Ipsum",
    avatar: require("../assets/profile3.png"),
  },
  {
    id: "4",
    name: "Jeel",
    message: "Lorem Ipsum",
    avatar: require("../assets/profile4.png"),
  },
];

const Messages = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("Chat");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.totalMessages}>
        Total Messages ({messages.length})
      </Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNext(item)}>
            <View style={styles.messageContainer}>
              <Image source={item.avatar} style={styles.avatar} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.message}>{item.message}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  },
  totalMessages: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    fontSize: 16,
    color: "#555",
  },
});

export default Messages;
