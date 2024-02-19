import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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
import RootNavigator from './src/navigation/RootNavigator';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createMaterialBottomTabNavigator();

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'white',
	},
};

// const DrawerComponent = () => {
// 	return (
// 		<Drawer.Navigator
// 			initialRouteName='Home'
// 			screenOptions={{ headerShown: false }}
// 		>
// 			<Drawer.Screen name='Home' component={HomeScreen} />
// 			<Drawer.Screen name='Admin Panel' component={AdminScreen} />
// 		</Drawer.Navigator>
// 	);
// };

// const BottomNavigatorTabComponent = () => {
// 	return (
// 		<Tab.Navigator barStyle={styles.bottomBar} initialRouteName='Home'>
// 			<Tab.Screen name='Home' component={HomeScreen} />
// 			<Tab.Screen name='ShoppingCart' component={ShoppingCartScreen} />
// 			<Tab.Screen name='Admin Panel' component={AdminScreen} />
// 		</Tab.Navigator>
// 	);
// };

// const ShoppingCartStack = () => {
// 	<Stack.Navigator initialRouteName='ShoppingCart'>
// 		<Stack.Screen name='ShoppingCart' component={ShoppingCartScreen} />
// 		<Stack.Screen name='ComandaScreen' component={ComandaScreen} />
// 	</Stack.Navigator>;
// };

export default function App() {
	return (
		<SafeAreaProvider>
			<UserProvider>
				<ShoppingCartProvider>
					<NavigationContainer
						theme={theme}
						screenOptions={{ gesturesEnabled: false, headerShown: false }}
					>
						{/* <Stack.Navigator
							initialRouteName='Splash'
							screenOptions={{ headerShown: false }}
						>
							<Stack.Screen
								name='Splash'
								component={SplashScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen name='Login' component={LoginScreen} />
							<Stack.Screen name='HomeStack' component={DrawerComponent} />
							<Stack.Screen
								name='HomeStack'
								component={BottomNavigatorTabComponent}
							/>
							<Stack.Screen name='Comanda' component={ComandaScreen} />
							<Stack.Screen
								name='ShoppingCart'
								component={ShoppingCartScreen}
							/>
						</Stack.Navigator> */}
						<RootNavigator />
					</NavigationContainer>
				</ShoppingCartProvider>
			</UserProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	bottomBar: {
		borderTopWidth: 1,
		backgroundColor: 'white',
	},
});
