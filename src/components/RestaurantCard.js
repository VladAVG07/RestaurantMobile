import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Image } from '@rneui/themed';
import { FlipInEasyX } from 'react-native-reanimated';

const RestaurantCard = () => {
	return (
		<Card containerStyle={styles.cardContainer} wrapperStyle={styles.wrapper}>
			<View style={styles.pozaView}>
				<Image
					style={styles.item}
					source={{
						uri: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
					}}
				/>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Text style={{ fontWeight: 'bold', fontSize: 20 }}>
					Nume restaurant
				</Text>
				<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Categorie</Text>
			</View>
			<View></View>
			<Text>Cost livrare</Text>
			<Text>Raiting</Text>
			<Text>Timp livrare</Text>
		</Card>
	);
};

const styles = StyleSheet.create({
	item: {
		aspectRatio: 1,
		width: '100%',
		height: 150,
		// flex: 1,
		borderRadius: 20,
	},
	pozaView: {
		width: '100%',
		height: 150,
		borderRadius: 20,
	},
	cardContainer: {
		borderWidth: 0,
		shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow for iOS
		shadowOffset: { height: 0, width: 0 },
		shadowOpacity: 0,
		shadowRadius: 0,

		elevation: 0, // Remove Shadow for Android
		padding: -10,
	},
	wrapper: {
		borderWidth: 0,
		display: 'flex',
		flexDirection: 'column',
	},
});

export default RestaurantCard;
