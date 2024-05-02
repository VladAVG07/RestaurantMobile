import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='Home2'
			//screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name='Home2'
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name='Restaurant' component={RestaurantScreen} />
		</Stack.Navigator>
	);
};

export default OrderNavigator;
