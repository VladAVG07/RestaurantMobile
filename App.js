import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import { UserProvider } from './src/context/UserContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'white',
	},
};

export default function App() {
	return (
		<SafeAreaProvider>
			<UserProvider>
				<NavigationContainer theme={theme}>
					<Stack.Navigator initialRouteName='Splash'>
						<Stack.Screen
							name='Splash'
							component={SplashScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen name='Login' component={LoginScreen} />
						<Stack.Screen
							name='Home'
							component={HomeScreen}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</UserProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({});
