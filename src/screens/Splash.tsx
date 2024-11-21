import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const Splash = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      {/* Add your image */}
      <Image
        source={require('../assets/appstore.png')} // Adjust the path based on your project structure
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Class Connect</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6682F3', // Background color
  },
  image: {
    width: 150, // Adjust the width of the image
    height: 150, // Adjust the height of the image
    marginBottom: 20, // Add spacing between the image and the text
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Text color
  },
});

export default Splash;
