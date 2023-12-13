import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './component/Home/HomeScreen';
import DetailScreen from './component/Detail/DetailScreen';
import Login from './component/login';
import Signup from './component/Singup';

const Stack = createStackNavigator(); // Add this line to create a stack navigator

  export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home1" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Detail" component={DetailScreen} />


      </Stack.Navigator>
      </NavigationContainer>
    );
  }

