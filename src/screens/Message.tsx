import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const messages = [
  { id: "1", name: "Alice", message: "Hello!", avatar: require("./avatar1.png") },
  { id: "2", name: "Bob", message: "How's it going?", avatar: require("./avatar2.png") },
  { id: "3", name: "Charlie", message: "Let's catch up!", avatar: require("./avatar3.png") },
];

const MessagesScreen = ({ navigation }) => {
  const handleNext = (item) => {
    navigation.navigate("Chat", { name: item.name });
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

const ChatScreen = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>&lt; Back</Text>
      </TouchableOpacity>
      <Text style={styles.header}>{name}</Text>
      <View style={styles.chatContainer}>
        <Text style={styles.chatBubble}>Hello {name}, did you start the assignment?</Text>
        <Text style={[styles.chatBubble, styles.reply]}>Long Back!</Text>
        <Text style={styles.chatBubble}>How are you doing?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a message"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Messages() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Messages">
        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  totalMessages: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
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
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    color: "#888",
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    color: "#007bff",
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  chatContainer: {
    flex: 1,
  },
  chatBubble: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  reply: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#007bff",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
