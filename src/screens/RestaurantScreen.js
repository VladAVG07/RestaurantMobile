import React from 'react';
import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';
import MainHeader from '../components/MainHeader';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ProdusCard from '../components/ProdusCard';

const RestaurantScreen = ({ route, navigation }) => {
    const insets = useSafeAreaInsets();
    const { categorii } = route.params.restaurant;
    console.log(categorii);
    let data = [];
    categorii.forEach((categorie) => {
        data.push({ title: categorie.nume, data: categorie.produse });
    });
    console.log(data);
    return (
        <View
            style={{
                flex: 1,
                paddingLeft: insets.left,
                paddingRight: insets.right,
                paddingBottom: insets.bottom,
            }}
        >
            <MainHeader />
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={({ section: { title } }) => (
                    <Text>{title}</Text>
                )}
                renderItem={({ item }) => <ProdusCard item={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default RestaurantScreen;
