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
import MainHeader from '../components/MainHeader';
import ShopListItem from '../components/ShopListItem';

import { DrawerActions } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const { produse, totalPages, applyFilters } = useProduse();

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
				<Icon name='shopping-cart' size={35} />
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
