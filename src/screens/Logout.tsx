import React from 'react';
import { View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the type for your stack navigator
type RootStackParamList = {
    Login: undefined; // Add all your other screens here if needed
    Logout: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Logout'>;

const Logout: React.FC<Props> = ({ navigation }) => {
    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Go to Login" onPress={handleLogout} />
        </View>
    );
};

export default Logout;
