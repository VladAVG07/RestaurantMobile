import React, { useContext, useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Modal,
	TouchableOpacity,
} from 'react-native';
import { UserContext } from '../context/UserContext';
import useProduse from '../hooks/useProduse';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, Header, Icon, Button, Slider, Input } from '@rneui/themed';
import FilterModal from '../components/FilterModal';

import { DrawerActions } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const { produse, totalPages, applyFilters } = useProduse();

	return (
		<SafeAreaView>
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
				rightComponent={<Icon name='shopping-cart' size={30} color='#FFFF' />}
				backgroundColor='rgb(230,0,62)'
				containerStyle={styles.header}
			/>
			<View style={styles.subheader}>
				<Text style={{ flex: 1 }}>Total Pages</Text>
				<Text style={{ fontWeight: 'bold', marginTop: 4, marginRight: 10 }}>
					Filtreaza
				</Text>
				<Icon
					name='sort'
					onPress={() => {
						setModalVisible(!modalVisible);
					}}
					size={30}
				/>
			</View>
			<FlatList
				data={produse}
				renderItem={({ item }) => {
					return (
						<ListItem bottomDivider>
							<ListItem.Content>
								<ListItem.Title>{item.nume}</ListItem.Title>
								<ListItem.Subtitle>{item.pret_curent} RON</ListItem.Subtitle>
							</ListItem.Content>
						</ListItem>
					);
				}}
				keyExtractor={(item) => item.id}
			/>
			<FilterModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				applyFilters={applyFilters}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	subheader: {
		flexDirection: 'row',
		padding: 10,
	},
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

export default HomeScreen;
