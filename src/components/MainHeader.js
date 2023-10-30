import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon } from '@rneui/themed';
import { DrawerActions, NavigationContext } from '@react-navigation/native';

const MainHeader = () => {
	const navigation = useContext(NavigationContext);

	return (
		<>
			<Header
				centerComponent={
					<Text style={styles.headerTtitle}>Retea de restaurante</Text>
				}
				leftComponent={
					<Icon
						name='menu'
						size={30}
						color='#FFFF'
						onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
					/>
				}
				rightComponent={<Icon name='person' size={30} color='#FFFF' />}
				backgroundColor='rgb(230,0,62)'
				containerStyle={styles.header}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	headerTtitle: {
		fontWeight: 'bold',
		color: 'white',
		fontSize: 20,
	},
	header: {
		borderBottomColor: 'black',
		borderBottomWidth: 5,
	},
});

export default MainHeader;
