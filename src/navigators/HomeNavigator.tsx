import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home.tsx';
import About from '../screens/About.tsx';
import SampleOne from '../screens/Sample One.tsx';
import React from 'react';
import Login from '../screens/Login.tsx';
import Network from '../screens/Network.tsx';
import Accomodation from '../screens/Accomodation.tsx';
import Course from '../screens/Course.tsx';
import Jobs from '../screens/Jobs.tsx';
import Dm from '../screens/Dm.tsx';
import Message from '../screens/Message.tsx';
import Profile from '../screens/Profile.tsx';
import Settings from '../screens/Settings.tsx';
import Logout from '../screens/Logout.tsx';

const Drawer = createDrawerNavigator();

const HomeNavigator = (): React.JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Network" component={Network} />
      <Drawer.Screen name="Accomodation" component={Accomodation} />
      <Drawer.Screen name="Course" component={Course} />
      <Drawer.Screen name="Jobs" component={Jobs} />
      <Drawer.Screen name="Dm's" component={Dm} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Profile" component={Profile} /> 
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Logout" component={Logout} />
</Drawer.Navigator>
  )
}
export default HomeNavigator;

