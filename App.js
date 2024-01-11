import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import AdminScreen from './src/screens/AdminScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import { UserProvider } from './src/context/UserContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ShoppingCartProvider } from './src/context/ShoppingCartContext';
import ComandaScreen from './src/screens/ComandaScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'white',
	},
};

const DrawerComponent = () => {
	return (
		<Drawer.Navigator
			initialRouteName='Home'
			screenOptions={{ headerShown: false }}
		>
			<Drawer.Screen name='Home' component={HomeScreen} />
			<Drawer.Screen name='Admin Panel' component={AdminScreen} />
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<SafeAreaProvider>
			<UserProvider>
				<ShoppingCartProvider>
					<NavigationContainer
						theme={theme}
						screenOptions={{ gesturesEnabled: false, headerShown: false }}
					>
						<Stack.Navigator
							initialRouteName='Splash'
							screenOptions={{ headerShown: false }}
						>
							<Stack.Screen
								name='Splash'
								component={SplashScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen name='Login' component={LoginScreen} />
							<Stack.Screen
								name='HomeStack'
								component={DrawerComponent}
								options={{ headerShown: false, gestureEnabled: false }}
							/>
							<Stack.Screen
								name='ShoppingCart'
								component={ShoppingCartScreen}
							/>
							<Stack.Screen name='Comanda' component={ComandaScreen} />
						</Stack.Navigator>
					</NavigationContainer>
				</ShoppingCartProvider>
			</UserProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({});
