// HomeTabNavigator.js
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyAccountScreen from '../screens/AdminScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import PromotiiScreen from '../screens/PromotiiScreen';
import { Icon, Badge, withBadge } from '@rneui/themed';
import OrderNavigator from './OrderNavigator';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import UserSettingsNavigator from './UserSettingsNavigator';
import MersiComandaScreen from '../screens/MersiComandaScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    const { shoppingCartCount } = useContext(ShoppingCartContext);
    const BadgedIcon = withBadge(shoppingCartCount)(Icon);
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: 'rgb(230,0,62)' },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                options={{
                    tabBarLabel: 'Acasa',
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
                component={OrderNavigator}
            />
            <Tab.Screen
                name="Oferte"
                options={{
                    tabBarLabel: 'Oferte speciale',
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="offer"
                            color={color}
                            size={size}
                        />
                    ),
                }}
                component={MersiComandaScreen}
            />
            <Tab.Screen
                name="ShoppingCart"
                options={{
                    tabBarLabel: 'Cos',
                    tabBarIcon: ({ color, size }) =>
                        shoppingCartCount == 0 ? (
                            <Icon
                                name="shopping-cart"
                                color={color}
                                size={size}
                            />
                        ) : (
                            <BadgedIcon
                                name="shopping-cart"
                                color={color}
                                size={size}
                            />
                        ),
                }}
                component={ShoppingCartScreen}
            />
            <Tab.Screen
                name="MyAccount"
                options={{
                    tabBarLabel: 'Profilul meu',
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="account"
                            color={color}
                            size={size}
                        />
                    ),
                }}
                component={UserSettingsNavigator}
            />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;
