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
import HeaderService from './HeaderNavigator/HeaderService';
import HeaderManagementPost from './HeaderNavigator/HeaderManagementPost';
import HeaderRentalPost from './HeaderNavigator/HeaderRentalPost';
import HeaderCreatePost from './HeaderNavigator/HeaderCreatePost';
import HeaderCreateRoom from './HeaderNavigator/HeaderCreateRoom';
import FavoriteScreen from '../screens/FavoriteScreen';
import HeaderFavorite from './HeaderNavigator/HeaderFavorite';
import PostScreen from '../screens/PostScreen';
import HeaderPost from './HeaderNavigator/HeaderPost';
import ContractManagement from '../screens/ContractManagement';
import HeaderContractManagement from './HeaderNavigator/HeaderContractManagement';
import BillManagement from '../screens/BillManagement';
import RoomManagement from '../screens/RoomManagement';
import HeaderRoomManagement from './HeaderNavigator/HeaderRoomManagement';
import HeaderBillManagement from './HeaderNavigator/HeaderBillManagement';

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

        <Stack.Screen
          name="RoomManagement"
          component={RoomManagement}
          options={{
            headerShown: true,
            header: ({navigation}) => (
              <HeaderRoomManagement navigation={navigation} />
            ),
          }}
        />

        <Stack.Screen
          name="BillManagement"
          component={BillManagement}
          options={{
            headerShown: true,
            header: ({navigation}) => (
              <HeaderBillManagement navigation={navigation} />
            ),
          }}
        />
        <Stack.Screen
          name="ContractManagement"
          component={ContractManagement}
          options={{
            headerShown: true,
            header: ({navigation}) => (
              <HeaderContractManagement navigation={navigation} />
            ),
          }}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{
            headerShown: true,
            header: ({navigation}) => <HeaderPost navigation={navigation} />,
          }}
        />
        <Stack.Screen
          name="FavoriteScreen"
          component={FavoriteScreen}
          options={{
            headerShown: true,
            header: ({navigation}) => (
              <HeaderFavorite navigation={navigation} />
            ),
          }}
        />
        <Stack.Screen
          name="CreateRoom"
          component={CreateRoom}
          options={{
            headerShown: true,
            header: ({navigation}) => (
              <HeaderCreateRoom navigation={navigation} />
            ),
          }}
        />
        <Stack.Screen
          name="RentalPost"
          component={RentalPost}
          options={{
            headerShown: true,
            header: ({navigation}) => (
              <HeaderRentalPost navigation={navigation} />
            ),
          }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{
            headerShown: true,
            header: ({navigation}) => (
              <HeaderCreatePost navigation={navigation} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
