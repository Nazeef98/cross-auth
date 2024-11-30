import React, { PropsWithChildren, useState } from "react";
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
const api = "http://localhost:1337/api/auth/signUp"
type SignupProps = PropsWithChildren<{
  navigation: any;
}>;

const Signup = ({ navigation }: SignupProps): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Validate name
  const validateName = () => {
    if (!name) {
      setNameError("Name is required.");
      return false;
    }
    setNameError("");
    return true;
  };

  // Validate email
  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setEmailError("Email is required.");
      return false;
    }
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email.");
      return false;
    }
    setEmailError("");
    return true;
  };

  // Validate password
  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required.");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  // Validate confirm password
  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  // Handle form submission
  const handleSignup = () => {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      console.log("Signup Successful", { name, email });
      // Proceed with signup logic, e.g., call API, navigate, etc.
      createUser();
      // navigation.replace("Home");
    } else {
      console.log("Please fill in all fields correctly.");
    }
  };
  const createUser = () => {
    const data = {
      "firstName": name,
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
        .then(handleSignupResponse)
        .catch(handleSignupError)
  }
  const handleSignupResponse = (data: any) => {
    console.log(data);
    if (data.status !== 200) {
      console.log(data.message);
      return Alert.alert("Signup failed", data.message.message);
    }
    console.log("Signup successful");
    navigation.replace("Home");
  }
  const handleSignupError = (error: any) => {
    console.log("Signup failed");
  }
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>

        <TextInput
            style={[styles.input, nameError ? { borderColor: "red" } : null]}
            placeholder="Name"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
            onBlur={validateName}
        />
        {nameError && <Text style={styles.errorText}>{nameError}</Text>}

        <TextInput
            style={[styles.input, emailError ? { borderColor: "red" } : null]}
            placeholder="Email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            onBlur={validateEmail}
        />
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}

        <TextInput
            style={[styles.input, passwordError ? { borderColor: "red" } : null]}
            placeholder="Password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            onBlur={validatePassword}
        />
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

        <TextInput
            style={[styles.input, confirmPasswordError ? { borderColor: "red" } : null]}
            placeholder="Re-enter Password"
            placeholderTextColor="#aaa"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
            onBlur={validateConfirmPassword}
        />
        {confirmPasswordError && <Text style={styles.errorText}>{confirmPasswordError}</Text>}

        <TouchableOpacity
            style={[styles.signupButton, { opacity: name && email && password && confirmPassword && !nameError && !emailError && !passwordError && !confirmPasswordError ? 1 : 0.5 }]}
            onPress={handleSignup}
            disabled={nameError || emailError || passwordError || confirmPasswordError || !name || !email || !password || !confirmPassword}
        >
          <Text style={styles.signupButtonText}>Signup</Text>
        </TouchableOpacity>
      </View>
  );
};

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
  signupButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default Signup;
