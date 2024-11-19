import React from 'react';
import Login from './screens/Login.tsx';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './navigators/HomeNavigator.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Main = (): React.JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  }
  return isAuthenticated ? (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <HomeNavigator/>
      </NavigationContainer>
    </GestureHandlerRootView>
  ) : (<Login onLogin={handleLogin}/>)
}
export default Main;
