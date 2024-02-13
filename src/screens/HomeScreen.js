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
import {
	ListItem,
	Header,
	Badge,
	Icon,
	Button,
	Slider,
	Input,
} from '@rneui/themed';
import FilterModal from '../components/FilterModal';
import MainHeader from '../components/MainHeader';
import ShopListItem from '../components/ShopListItem';

import { DrawerActions } from '@react-navigation/native';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const HomeScreen = ({ navigation }) => {
	const { shoppingCartCount } = useContext(ShoppingCartContext);

	const [modalVisible, setModalVisible] = useState(false);

	const { produse, totalPages, applyFilters } = useProduse();

	// useEffect(() => {
		
	// } , [shoppingCartCount])

	return (
		<>
			<MainHeader />
			<View style={styles.subheader}>
				<View style={{ flexDirection: 'row' }}>
					<Text style={{ fontWeight: 'bold', marginTop: 4, fontSize: 16 }}>
						Filtreaza
					</Text>
					<Icon
						name='sort'
						onPress={() => {
							setModalVisible(!modalVisible);
						}}
						size={35}
					/>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
					<View>
						{shoppingCartCount == 0 ? null : (
							<Badge
								status='success'
								value={shoppingCartCount}
								containerStyle={{ position: 'absolute', zIndex: 1, right: 20 }}
							/>
						)}
						<Icon name='shopping-cart' size={35} />
					</View>
				</TouchableOpacity>
			</View>
			<FlatList
				data={produse}
				renderItem={({ item }) => {
					return <ShopListItem item={item} />;
				}}
				keyExtractor={(item) => item.id}
			/>
			<FilterModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				applyFilters={applyFilters}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	subheader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingTop: 7,
	},
});

export default HomeScreen;
