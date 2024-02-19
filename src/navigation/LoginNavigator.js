// LoginNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
//import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='Login'>
			<Stack.Screen
				name='Login'
				options={{ headerShown: false }}
				component={LoginScreen}
			/>
			{/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
		</Stack.Navigator>
	);
};

export default LoginNavigator;
