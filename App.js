import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import AdminScreen from './src/screens/AdminScreen';
import { UserProvider } from './src/context/UserContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
				<NavigationContainer
					theme={theme}
					screenOptions={{ gesturesEnabled: false }}
				>
					<Stack.Navigator initialRouteName='Splash'>
						<Stack.Screen
							name='Splash'
							component={SplashScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen name='Login' component={LoginScreen} />
						<Stack.Screen
							name='HomeStack'
							component={DrawerComponent}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</UserProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({});
