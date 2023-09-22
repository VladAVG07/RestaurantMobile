import { ListItem } from '@rneui/themed';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const FilterListItem = ({ item, handleClick }) => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<ListItem>
				<ListItem.Content
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-start',
					}}
				>
					<ListItem.Title style={styles.title}>{item.nume}</ListItem.Title>
					<ListItem.CheckBox
						checked={checked}
						onPress={() => {
							setChecked(!checked);
							handleClick(item, checked);
						}}
					/>
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
