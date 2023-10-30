import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, ListItem } from '@rneui/themed';

const ShopListItem = ({ item }) => {
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
							console.log(item);
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
