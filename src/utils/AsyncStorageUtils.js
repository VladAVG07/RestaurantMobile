// AsyncStorageUtils.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (keyName, value) => {
	try {
		await AsyncStorage.setItem(`@${keyName}`, value);
	} catch (e) {
		console.log('AsyncStorage', 'storeData()', e);
	}
};

export const loadData = async (keyName) => {
	try {
		const value = JSON.parse(await AsyncStorage.getItem(`@${keyName}`));
		return value != null ? value : null;
	} catch (e) {
		console.log('AsyncStorage', 'loadData()', e);
		return null;
	}
};
