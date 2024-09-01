import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import ComandaScreen from '../screens/ComandaScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home2'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name='Home2'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} />
            <Stack.Screen name='ShoppingCart' component={ShoppingCartScreen} />
            <Stack.Screen name='Comanda' component={ComandaScreen} />
        </Stack.Navigator>
    );
};

export default OrderNavigator;
