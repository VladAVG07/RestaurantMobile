import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ShoppingCartItem from '../components/ShoppingCartItem';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

const ShoppingCartScreen = ({ navigation }) => {
	const { shoppingCart } = useContext(ShoppingCartContext);

	return (
		<SafeAreaView style={{ padding: 10 }}>
			{shoppingCart.length == 0 ? (
				<Text>Cosul dumneavoastra este gol</Text>
			) : (
				<FlatList
					data={shoppingCart}
					key={(item) => item.id}
					renderItem={({ item }) => {
						return <ShoppingCartItem produs={item} />;
					}}
				/>
			)}
			{/* <Text>Total: </Text> */}
			<Button
				title='Finalizare Comanda'
				buttonStyle={styles.butonComanda}
				color='rgb(230,0,62)'
				onPress={() => {
					navigation.navigate('Comanda');
				}}
			/>
		</SafeAreaView>
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
