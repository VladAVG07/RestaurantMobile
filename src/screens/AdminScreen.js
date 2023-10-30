import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainHeader from '../components/MainHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

const AdminScreen = () => {
	return (
		<>
			<SafeAreaView>
				<MainHeader />
				<View></View>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({});

export default AdminScreen;
