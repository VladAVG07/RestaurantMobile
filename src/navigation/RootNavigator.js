// RootNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginNavigator from './LoginNavigator';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='Splash'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name='Splash' component={SplashScreen} />
			<Stack.Screen name='Login' component={LoginNavigator} />
			<Stack.Screen name='HomeStack' component={HomeTabNavigator} />
		</Stack.Navigator>
	);
};

export default RootNavigator;
