// import React, {PropsWithChildren} from 'react';
// import {
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// type LoginProps = PropsWithChildren<{
//   onLogin: () => void;
// }>
// const Login = (
//   {
//     onLogin
//   }: LoginProps): React.JSX.Element => {
//   // const navigation = useNavigation();
//   const handleGoogleLogin = () => {
//     // Add your Google login functionality here
//     console.log("Google Login Pressed");
//   };

//   const handleLogin = () => {
//     onLogin();
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome Back!</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           placeholderTextColor="#aaa"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#aaa"
//           secureTextEntry={true}
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.orText}>OR</Text>
//       <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
//         <Image
//           source={{
//             uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
//           }}
//           style={styles.googleIcon}
//         />
//         <Text style={styles.googleButtonText}>Login with Google</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f8f9fa",
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#333",
//   },
//   inputContainer: {
//     width: "100%",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: "#ddd",
//   },
//   loginButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#007bff",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loginButtonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   orText: {
//     fontSize: 16,
//     color: "#666",
//     marginVertical: 15,
//   },
//   googleButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     width: "100%",
//     height: 50,
//     justifyContent: "center",
//   },
//   googleIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 10,
//   },
//   googleButtonText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
// });
// export default Login;
import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type LoginProps = {
  navigation: any;
  onLogin: () => void;
  

};



const Login = ({ navigation, onLogin }: LoginProps) => {
  console.log('jxsbxbqsx')


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginButtonText} >Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.googleButton} onPress={() => console.log("Google Login Pressed")}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
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
});

export default Login;
