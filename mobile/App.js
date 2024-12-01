import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import MainMenuScreen from './src/screens/MainMenuSreen';
import SearchScreen from './src/screens/SearchScreen';
import OrderScreen from './src/screens/OrderScreen';
import ProfileScreen from './src/screens/Profile'
import FinalizarCompraScreen from './src/screens/FinalScreen';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Meus Pedidos" component={OrderScreen} />
        <Stack.Screen name="Meu Perfil" component={ProfileScreen} />
        <Stack.Screen name="Finalizando Compra" component={FinalizarCompraScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

