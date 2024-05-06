import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabsNavigator from './TabsNavigator';
import DetailScreen from '../screens/DetailScreen';
import CreateRoom from '../screens/CreateRoom';
import ManagementPost from '../screens/ManagementPost';
import RentalPost from '../screens/RentalPost';
import CreatePost from '../screens/CreatePost';
import MessageScreen from '../screens/MessageScreen';

const Stack = createNativeStackNavigator();
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="CreateRoom" component={CreateRoom} />
        <Stack.Screen name="ManagementPost" component={ManagementPost} />
        <Stack.Screen name="RentalPost" component={RentalPost} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
