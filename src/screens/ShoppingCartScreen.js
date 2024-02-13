import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ShoppingCartItem from '../components/ShoppingCartItem';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { Button } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainHeader from '../components/MainHeader';

const ShoppingCartScreen = ({ navigation }) => {
	const { shoppingCart, shoppingCartCount } = useContext(ShoppingCartContext);

	return (
		<View>
			<MainHeader />
			<SafeAreaView style={{ padding: 10 }}>
				{shoppingCart.length == 0 ? (
					<Text style={{ fontWeight: 'bold' }}>0 produse</Text>
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

				{shoppingCartCount === 0 ? (
					<Text style={{ fontWeight: 'bold' }}>
						Nu puteti plasa comanda. Cosul dumneavoastra este gol
					</Text>
				) : (
					<Button
						title='Finalizare Comanda'
						buttonStyle={styles.butonComanda}
						color='rgb(230,0,62)'
						onPress={() => {
							if (shoppingCartCount == 0) {
							}
							navigation.navigate('Comanda');
						}}
					/>
				)}
			</SafeAreaView>
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
