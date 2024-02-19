import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { loadData } from '../utils/AsyncStorageUtils';
import { Button } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../context/UserContext';

const SplashScreen = ({ navigation }) => {
	const { setCurrentUser } = useContext(UserContext);

	useEffect(() => {
		AsyncStorage.clear();
		const userData = async () => {
			const data = await loadData('userDetails');
			if (data) {
				setCurrentUser(data);
				navigation.navigate('HomeStack');
				return;
			}
			navigation.navigate('Login');
		};
		setTimeout(userData, 3000);
	}, []);

	return (
		<View style={styles.container}>
			<View style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
				<Text style={styles.title}>Retea de restaurante</Text>
				<ActivityIndicator size='large' color={'white'} />
			</View>
			<Image
				source={require('../../assets/mancare2.png')}
				style={styles.image}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		backgroundColor: 'rgb(230,0,62)',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 50,
		textAlign: 'center',
		marginBottom: 20,
	},
	image: {
		// position:'absolute',
		//bottom:30,
		width: '100%',
		height: 250,
		marginBottom: 30,
	},
});

export default SplashScreen;
