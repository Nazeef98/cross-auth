import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "../screens/Login.tsx";
import Signup from "../screens/Signup.tsx";
const Stack = createStackNavigator();
const AuthNavigator = (): React.JSX.Element => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'login'} component={Login} options={{title: "Login"}} />
            <Stack.Screen name={'signup'} component={Signup} options={{title: "Register"}} />
        </Stack.Navigator>
    )
}
export default AuthNavigator;
