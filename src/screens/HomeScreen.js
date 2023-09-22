import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Modal } from 'react-native';
import { UserContext } from '../context/UserContext';
import useProduse from '../hooks/useProduse';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, Header, Icon, Button } from '@rneui/themed';
import { getCategorii } from '../api/ApiAxios';
import FilterListItem from '../components/FilterListItem';

const HomeScreen = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [categorii, setCategorii] = useState([]);
	const [categoriiBifate, setCategoriiBifate] = useState([]);

	const { produse, totalPages, applyFilters } = useProduse();

	const fetchCategorii = async () => {
		const response = await getCategorii();
		setCategorii(response.data.data);
	};

	const handleClick = (newCategorie, checked) => {
		if (!checked) {
			setCategoriiBifate([...categoriiBifate, newCategorie]);
		} else {
			const arr = categoriiBifate.filter(
				(categorie) => categorie.id !== newCategorie.id
			);
			setCategoriiBifate(arr);
		}
	};

	return (
		<SafeAreaView>
			<Header
				centerComponent={
					<Text style={styles.headerTtitle}>Retea de restaurante</Text>
				}
				leftComponent={<Icon name='menu' size={30} color='#FFFF' />}
				rightComponent={<Icon name='shopping-cart' size={30} color='#FFFF' />}
				backgroundColor='rgb(230,0,62)'
				containerStyle={styles.header}
			/>
			<View style={styles.subheader}>
				<Text style={{ flex: 1 }}>Total Pages {totalPages}</Text>
				<Text style={{ fontWeight: 'bold', marginTop: 4, marginRight: 10 }}>
					Filtreaza
				</Text>
				<Icon
					name='sort'
					onPress={() => {
						fetchCategorii();
						setModalVisible(!modalVisible);
					}}
					size={30}
				/>
			</View>
			<Modal
				animationType='fade'
				visible={modalVisible}
				onRequestClose={() => setModalVisible(!modalVisible)}
			>
				<View style={styles.filterContainer}>
					<Text>Categorii:</Text>
					<FlatList
						data={categorii}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => {
							return <FilterListItem item={item} handleClick={handleClick} />;
						}}
					/>

					<Button
						title='Filtreaza'
						onPress={() => {
							setModalVisible(!modalVisible);
							console.log(categoriiBifate);
							setCategoriiBifate([]);
						}}
					/>
				</View>
			</Modal>
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
