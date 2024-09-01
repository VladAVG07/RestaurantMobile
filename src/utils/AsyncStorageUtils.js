// AsyncStorageUtils.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorSpace } from 'react-native-reanimated';

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

export const removeData = async (keyName) => {
    try {
        await AsyncStorage.removeItem(`@${keyName}`);
        console.log(`Data with key @${keyName} removed successfully.`);
    } catch (e) {
        console.log('AsyncStorage', 'removeItem()', e);
        return false;
    }
};
