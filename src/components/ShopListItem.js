import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, ListItem } from '@rneui/themed';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const ShopListItem = ({ item }) => {
	const { shoppingCart, addToShoppingCart, shoppingCartCount } =
		useContext(ShoppingCartContext);

	return (
		<View>
			<ListItem bottomDivider>
				<ListItem.Content style={{ flexDirection: 'row' }}>
					<View style={{ flexDirection: 'column', flex: 1 }}>
						<ListItem.Title>{item.nume}</ListItem.Title>
						<ListItem.Subtitle>{item.pret_curent} RON</ListItem.Subtitle>
					</View>
					<TouchableOpacity
						onPress={() => {
							addToShoppingCart(item);
							// badgeCountHandler(shoppingCartCount);
							// console.log(shoppingCartCount);
						}}
					>
						<Icon name='add-shopping-cart' size={35} />
					</TouchableOpacity>
				</ListItem.Content>
			</ListItem>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ShopListItem;
