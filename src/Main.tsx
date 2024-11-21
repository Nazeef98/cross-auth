

// import React from 'react';
// import Login from './screens/Login.tsx';
// import {NavigationContainer} from '@react-navigation/native';
// import HomeNavigator from './navigators/HomeNavigator.tsx';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import Splash from './screens/Splash.tsx'; // Import your splash screen

// //main container works first when app builds successfully
// const Main = (): React.JSX.Element => {
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);
//   const [isSplashVisible, setIsSplashVisible] = React.useState(true);

//   React.useEffect(() => {
// //splash screen logic for opening it when the app build successfully for 4 seconds 
//     const timer = setTimeout(() => setIsSplashVisible(false), 5000);
//     return () => clearTimeout(timer); // Cleanup the timer
//   }, []);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   if (isSplashVisible) {
//     return <Splash />; 
//   }

//   return isAuthenticated ? (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <HomeNavigator />
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   ) : (
//     <Login onLogin={handleLogin} />
//   );
// };

// export default Main;


import React from 'react';
import Login from './screens/Login.tsx';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './navigators/HomeNavigator.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Splash from './screens/Splash.tsx';
import Onboarding from './screens/Onboarding.tsx';
import Signup from './screens/Signup.tsx';

const Main = (): React.JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isSplashVisible, setIsSplashVisible] = React.useState(true);
  const [isOnboardingComplete, setIsOnboardingComplete] = React.useState(false);
  const [isSignup, setIsSignup] = React.useState(true);

  

  React.useEffect(() => {
    const timer = setTimeout(() => setIsSplashVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
if (!isSignup){
  return <Signup/>
}
  }

  if (isSplashVisible) {
    return <Splash />;
  }

  if (!isOnboardingComplete) {
    return <Onboarding onFinish={() => setIsOnboardingComplete(true)} />;
  }

  return isAuthenticated ? (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  ) : (
    <Login onSignup={handleSignup} onLogin={handleLogin} />
  );
};

export default Main;
