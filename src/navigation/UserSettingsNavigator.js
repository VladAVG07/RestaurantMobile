import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminScreen from '../screens/AdminScreen';
import ComenzileMeleScreen from '../screens/ComenzileMeleScreen';

const Stack = createNativeStackNavigator();

const UserSettingsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Profil'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='Profil' component={AdminScreen} />
            <Stack.Screen
                name='ComenzileMele'
                component={ComenzileMeleScreen}
            />
        </Stack.Navigator>
    );
};

export default UserSettingsNavigator;

const styles = StyleSheet.create({});
