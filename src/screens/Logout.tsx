// LogoutScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Logout = ({ navigation }) => {
    const handleLogout = () => {
        // Perform any logout operations here (e.g., clear tokens)
        // Then navigate to the Login screen
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You have been logged out.</Text>
            <Button title="Go to Login" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default Logout;
