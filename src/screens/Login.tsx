
import React, {useState} from "react";
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

type LoginProps = {
  navigation: any;
};

const api = "http://localhost:1337/api/auth/signIn"

const Login = ({ navigation }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validate email
  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  // Validate password
  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  // Handle Login
  const onLogin = () => {
    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      return;
    } else {
      setEmailError("");
    }

    if (!password || !validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else {
      setPasswordError("");
    }

    // Proceed with login action (if validation passes)
    // navigation.replace("Home");
    verifyUser();
  };
  const verifyUser = () => {
    const data = {
      "email": email,
      "password": password,
    }
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then(handleLoginResponse)
        .catch(handleLoginError)
  }

  const handleLoginResponse = (response: any) => {
    if (response.status !== 200) {
      console.log(response.message);
      Alert.alert("Login failed", response.message);
    } else {
      console.log("Login successful", response.data);
      navigation.replace("Home");
    }
  }
  const handleLoginError = (error: any) => {
    console.log(error);
    Alert.alert("Login Error", "Unable to connect to the server. Please try again later.");

  }

  // Handle Signup
  const onSignup = () => {
    navigation.navigate("signup");
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <View style={styles.inputContainer}>
          <TextInput
              style={[styles.input, emailError ? { borderColor: "red" } : null]}
              placeholder="Email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <TextInput
              style={[styles.input, passwordError ? { borderColor: "red" } : null]}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

          <TouchableOpacity
              style={[styles.loginButton, { opacity: email && password && !emailError && !passwordError ? 1 : 0.5 }]}
              onPress={onLogin}
              disabled={!email || !password || emailError || passwordError}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity onPress={onSignup}>
          <Text style={styles.signupText}>Don't have an account? Signup</Text>
        </TouchableOpacity>
      </View>
  );
};

// Add the styles here...



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    color: "#666",
    marginVertical: 15,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  signupText: {
    fontSize: 16,
    color: "#007bff",
    marginTop: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default Login;
