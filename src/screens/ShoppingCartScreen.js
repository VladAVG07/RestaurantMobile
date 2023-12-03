import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ShoppingCartItem from '../components/ShoppingCartItem';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { Button } from '@rneui/themed';

const ShoppingCartScreen = ({ navigation }) => {
	const { shoppingCart } = useContext(ShoppingCartContext);

	return (
		<View style={{ padding: 10 }}>
			<FlatList
				data={shoppingCart}
				key={(item) => item.id}
				renderItem={({ item }) => {
					return <ShoppingCartItem produs={item} />;
				}}
			/>
			{/* <Text>Total: </Text> */}
			<Button
				title='Finalizare Comanda'
				buttonStyle={styles.butonComanda}
				color='rgb(230,0,62)'
				onPress={() => {
					navigation.navigate('Comanda');
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	butonComanda: {
		borderRadius: 10,
		borderWidth: 2,
		borderColor: 'black',
		marginVertical: 20,
	},
});

export default ShoppingCartScreen;
