import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button, SocialIcon } from '@rneui/base';
import { storeData, loadData } from '../utils/AsyncStorageUtils';
import { loginUser } from '../services/AuthService';
import { UserContext } from '../context/UserContext';

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMessage, setErrMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const { setCurrentUser } = useContext(UserContext);

	const handleLogin = async () => {
		setIsLoading(true);
		setErrMessage('');

		const result = await loginUser({ email, password });

		if (result.error) {
			setErrMessage(result.error);
			setIsLoading(false);
		} else {
			storeData('userDetails', JSON.stringify(result));
			setCurrentUser(result);
			navigation.navigate('Home');
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Login</Text>
			<Input
				label='Email'
				labelStyle={{ color: 'black' }}
				placeholder='Enter Email'
				onChangeText={(newEmail) => setEmail(newEmail)}
				value={email}
			/>
			<Input
				secureTextEntry={true}
				label='Password'
				labelStyle={{ color: 'black' }}
				placeholder='Enter Password'
				onChangeText={(newPassword) => setPassword(newPassword)}
				value={password}
				errorMessage={errMessage}
			/>
			<Text style={styles.forgotPassword}>Forgot Password?</Text>
			<Button
				title='Login'
				buttonStyle={styles.button}
				onPress={handleLogin}
				loading={isLoading}
			/>
			<SocialIcon
				title='Sign In With Facebook'
				style={styles.social}
				button
				type='facebook'
			/>

			<SocialIcon
				title='Sign In With Google'
				style={styles.social}
				button
				type='google'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 10,
		marginTop: 20,
		paddingTop: '10%',
		//flexDirection: 'column',
		alignContent: 'center',
		//justifyContent: 'center',
		flex: 1,
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		width: '100%',
		padding: 20,
		marginBottom: 35,
		textAlign: 'center',
	},
	social: {
		width: '100%',
		borderRadius: 10,
		height: 50,
	},
	button: {
		borderRadius: 10,
		//width: '30%',
		marginLeft: 7,
		height: 50,
		marginBottom: 15,
	},
	forgotPassword: {
		marginLeft: 7,
		marginBottom: 20,
		fontWeight: 'bold',
		color: 'blue',
		textDecorationLine: 'underline',
	},
});

export default LoginScreen;
