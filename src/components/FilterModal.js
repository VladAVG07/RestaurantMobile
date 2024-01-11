import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Modal,
	TouchableOpacity,
} from 'react-native';
import { getCategorii, getMinMaxPrices } from '../api/ApiAxios';
import { ListItem, Header, Icon, Button, Slider, Input } from '@rneui/themed';
import FilterListItem from '../components/FilterListItem';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const FilterModal = ({ modalVisible, setModalVisible, applyFilters }) => {
	const [categorii, setCategorii] = useState([]);
	const [categoriiBifate, setCategoriiBifate] = useState([]);
	const [pretMin, setPretMin] = useState('');
	const [pretMax, setPretMax] = useState('');

	const handleFilters = () => {
		const filters = {};
		categoriiBifate.forEach((categorie) => {
			filters.categorie = categorie.id;
		});
		filters.pret_curent = `${pretMin}-${pretMax}`;
		console.log(filters);
		if (applyFilters) {
			applyFilters(filters);
		}
	};

	useEffect(() => {
		const setMinMaxPrices = async () => {
			const response = await getMinMaxPrices();
			setPretMax(response.data.data[0].max_price);
			setPretMin(response.data.data[0].min_price);
			console.log('Use effect');
			console.log(response.data);
		};

		const fetchCategorii = async () => {
			const response = await getCategorii();
			setCategorii(response.data.data);
		};
		fetchCategorii();
		//setMinMaxPrices();
	}, [modalVisible && true]);

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
		<Modal
			animationType='fade'
			visible={modalVisible}
			onRequestClose={() => setModalVisible(!modalVisible)}
		>
			<SafeAreaView>
				<Text style={{ fontWeight: 'bold' }}>Filtreaza</Text>
				<View style={styles.filterContainer}>
					<Header
						backgroundColor='rgb(230,0,62)'
						rightComponent={
							<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
								<Text style={styles.modalAnuleaza}>Anuleaza</Text>
							</TouchableOpacity>
						}
					/>
					<Text style={styles.filterSubHeader}>Categorii:</Text>
					<FlatList
						data={categorii}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => {
							return <FilterListItem item={item} handleClick={handleClick} />;
						}}
					/>
					<Text style={styles.filterSubHeader}>Pret:</Text>
					<View style={styles.pretContainer}>
						<View style={styles.priceSelector}>
							<Input
								label='De la:'
								style={styles.priceIput}
								inputContainerStyle={{ borderBottomWidth: 0 }}
								labelStyle={{ color: 'black' }}
								value={pretMin}
								onChangeText={(text) => setPretMin(text)}
							/>
						</View>
						<View style={styles.priceSelector}>
							<Input
								label='Pana la:'
								style={styles.priceIput}
								inputContainerStyle={{ borderBottomWidth: 0 }}
								labelStyle={{ color: 'black' }}
								value={pretMax}
								onChangeText={(text) => setPretMax(text)}
							/>
						</View>
					</View>

					<Button
						title='Filtreaza'
						onPress={() => {
							// const filters = {};
							// foreach(categorii )
							handleFilters();
							setModalVisible(!modalVisible);
							// console.log(categoriiBifate);
							setCategoriiBifate([]);
						}}
						color='rgb(230,0,62)'
						buttonStyle={styles.filtreazaButton}
					/>
				</View>
			</SafeAreaView>
		</Modal>
	);
};

const styles = StyleSheet.create({
	filterContainer: {
		paddingTop: '9%',
	},
	modalAnuleaza: {
		fontWeight: 'bold',
		color: 'white',
		textDecorationLine: 'underline',
	},
	filtreazaButton: {
		alignSelf: 'center',
		width: '40%',
		borderRadius: 10,
	},
	filterSubHeader: {
		fontWeight: 'bold',
		fontSize: 20,
		marginLeft: 15,
		marginTop: 10,
	},
	pretContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 30,
	},
	priceSelector: {
		width: '40%',
	},
	priceIput: {
		borderWidth: 2,
		borderRadius: 5,
		paddingHorizontal: 8,
	},
});

export default FilterModal;
