import React from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import SwiperScreen from './screens/SwiperScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
