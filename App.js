import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './component/Home/HomeScreen';
import DetailScreen from './component/Detail/DetailScreen';

import ServiceScreen from './component/Services/ServiceScreen';
import HeartScreen from './component/Hearts/HeartScreen';
import UserScreen from './component/Users/UserScreen';
import FavouriteScreen from './component/Users/FavouriteScreen';
import AnUongScreen from './component/Services/AnUongScreen';
import GiaiTriScreen from './component/Services/GiaiTriScreen';
import DonDepScreen from './component/Services/DonDepScreen';
import MatxaScreen from './component/Services/MatxaScreen';

import Login from './component/login';
import Signup from './component/Singup';

import { FavoritesProvider } from './Context/FavoritesContext';

const Stack = createStackNavigator(); // Add this line to create a stack navigator

  export default function App() {
    return (
      <FavoritesProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />

          <Stack.Screen name="Service" component={ServiceScreen} />
          <Stack.Screen name="Heart" component={HeartScreen} />
          <Stack.Screen name="User" component={UserScreen} />
          <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
          <Stack.Screen name="AnUongScreen" component={AnUongScreen} />
          <Stack.Screen name="GiaiTriScreen" component={GiaiTriScreen} />
          <Stack.Screen name="MatxaScreen" component={MatxaScreen} />
          <Stack.Screen name="DonDepScreen" component={DonDepScreen} />

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />

          </Stack.Navigator>
          </NavigationContainer>

      </FavoritesProvider>
    );
  }

