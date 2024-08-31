import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import MainHeader from '../components/MainHeader';
import ComandaCard from '../components/ComandaCard';
import { getComenzi } from '../api/ApiAxios';
import { UserContext } from '../context/UserContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const ComenzileMeleScreen = ({ navigation }) => {
    const [comenzi, setComenzi] = useState([]);
    const { userDetails } = useContext(UserContext);
    useEffect(() => {
        const getComenzi1 = async () => {
            const response = await getComenzi();
            setComenzi(response.data.data);
            console.log(comenzi);
        };
        getComenzi1();
    }, []);
    return (
        <View>
            <MainHeader
                leftIconName={'arrow-back'}
                onIconPress={navigation.pop}
            />
            <Text style={styles.comenziHeader}>Comenzile Mele</Text>
            <FlatList
                contentContainerStyle={{ paddingBottom: '35%' }}
                data={comenzi}
                renderItem={({ item }) => <ComandaCard comanda={item} />}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={
                    <View
                        style={{
                            height: 1,
                            width: '100%',
                            backgroundColor: 'grey',
                        }}
                    ></View>
                }
            />
        </View>
    );
};

export default ComenzileMeleScreen;

const styles = StyleSheet.create({
    comenziHeader: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 10,
        marginTop: 10,
    },
});
