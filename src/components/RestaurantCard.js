import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native';
import { Card, Image, Icon } from '@rneui/themed';

const RestaurantCard = ({ navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('Restaurant');
			}}
		>
			<Card containerStyle={styles.cardContainer} wrapperStyle={styles.wrapper}>
				<View style={styles.pozaView}>
					<Image
						style={styles.item}
						source={{
							uri: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg',
						}}
					/>

					<View style={styles.raiting}>
						<Icon type='material' name='thumb-up' color={'white'} />
						<Text style={{ color: 'white', marginLeft: 4, marginTop: 4 }}>
							Raiting
						</Text>
					</View>
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
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<Icon type='font-awesome' name='truck' />
					<Text style={{ marginHorizontal: 6 }}>5.99 RON</Text>
					<Text>25-35 min</Text>
				</View>
			</Card>
		</TouchableOpacity>
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
	raiting: {
		display: 'flex',
		flexDirection: 'row',
		zIndex: 1,
		position: 'absolute',
		right: 11,
		bottom: 10,
	},
});

export default RestaurantCard;
