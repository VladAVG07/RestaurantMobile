import { ListItem } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const FilterListItem = ({ item, handleClick }) => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<ListItem>
				<ListItem.Content
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<View style={{ flexDirection: 'row' }}>
						<ListItem.CheckBox
							checked={checked}
							onPress={() => {
								setChecked(!checked);
								handleClick(item, checked);
							}}
						/>
						<ListItem.Title style={styles.title}>
							{item.categorie}
						</ListItem.Title>
					</View>
					<ListItem.Title
						style={{
							backgroundColor: '#cecece',
							padding: 2,
							fontWeight: 'bold',
							borderRadius: 5,
							width: 50,
							textAlign: 'center',
						}}
					>
						{item.numar_produse}
					</ListItem.Title>
				</ListItem.Content>
			</ListItem>
		</>
	);
};

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		marginRight: 10,
	},
});

export default FilterListItem;
