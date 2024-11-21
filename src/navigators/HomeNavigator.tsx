import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home.tsx';
import About from '../screens/About.tsx';
import SampleOne from '../screens/Sample One.tsx';
import React from 'react';
import Login from '../screens/Login.tsx';

const Drawer = createDrawerNavigator();

const HomeNavigator = (): React.JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Page" component={SampleOne} />
      <Drawer.Screen name="About" component={About} />

    </Drawer.Navigator>
  )
}
export default HomeNavigator;
