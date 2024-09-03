import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    Modal,
} from 'react-native';
import MainHeader from '../components/MainHeader';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShoppingCartItem from '../components/ShoppingCartItem';
import { Input, Icon, Button } from '@rneui/themed';
import { sendComanda } from '../api/ApiAxios';
import DropDownPicker from 'react-native-dropdown-picker';

const sendComanda1 = async (comanda, _callback, payload) => {
    const r = await sendComanda(comanda);
    console.log(r.data);
    _callback(payload);
};

const ComandaScreen = ({ navigation }) => {
    const { shoppingCart, total, deleteShoppingCart } =
        useContext(ShoppingCartContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [adresa, setAdresa] = useState('');
    const [mentiuni, setMentiuni] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Cash', value: 0 },
        { label: 'Card', value: 1 },
    ]);

    return (
        <ScrollView>
            <MainHeader
                leftIconName={'arrow-back'}
                onIconPress={navigation.navigate}
                navPayload={'ShoppingCart'}
            />
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                    Produsele tale:
                </Text>
                <View
                    style={{
                        marginHorizontal: 6,
                        paddingHorizontal: 10,
                        paddingBottom: 10,
                        borderBottomWidth: 2,
                    }}
                >
                    {shoppingCart.map((p) => (
                        <ShoppingCartItem produs={p} key={p.id} />
                    ))}
                    {/* <FlatList
						data={shoppingCart}
						key={(item) => item.id}
						renderItem={({ item }) => {
							return <ShoppingCartItem produs={item} />;
						}}
					/> */}
                </View>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginLeft: 6,
                        marginTop: 10,
                        marginBottom: 20,
                    }}
                >
                    Total: {total} RON
                </Text>
                <Input
                    containerStyle={{ marginTop: 10 }}
                    disabledInputStyle={{ background: '#ddd' }}
                    inputContainerStyle={{}}
                    errorMessage='Va rog adaugati o adresa pentru comanda'
                    errorStyle={{}}
                    errorProps={{}}
                    inputStyle={{}}
                    label='Adresa:'
                    labelStyle={{
                        color: 'black',
                        fontSize: 18,
                        marginLeft: -4,
                    }}
                    labelProps={{}}
                    leftIcon={<Icon name='map' size={20} />}
                    leftIconContainerStyle={{}}
                    rightIcon={
                        <Icon
                            name='close'
                            size={20}
                            onPress={() => setAdresa('')}
                        />
                    }
                    rightIconContainerStyle={{}}
                    placeholder='strada, bloc, apartament etc.'
                    onChangeText={(newText) => setAdresa(newText)}
                    value={adresa}
                />
                <Input
                    containerStyle={{ marginTop: 10 }}
                    disabledInputStyle={{ background: '#ddd' }}
                    inputContainerStyle={{}}
                    errorMessage=''
                    errorStyle={{}}
                    errorProps={{}}
                    inputStyle={{}}
                    label='Mentiuni:'
                    labelStyle={{
                        color: 'black',
                        fontSize: 18,
                        marginLeft: -4,
                    }}
                    labelProps={{}}
                    leftIcon={<Icon name='add-circle-outline' size={20} />}
                    leftIconContainerStyle={{}}
                    rightIcon={
                        <Icon
                            name='close'
                            size={20}
                            onPress={() => setMentiuni('')}
                        />
                    }
                    rightIconContainerStyle={{}}
                    placeholder='mentiuni pentru restaurant/curier'
                    onChangeText={(newText) => setMentiuni(newText)}
                    value={mentiuni}
                />
                <View style={styles.dropDownPret}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            marginLeft: 6,
                        }}
                    >
                        Mod plata:
                    </Text>
                    {/* <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    /> */}
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            marginLeft: 10,
                            marginTop: 10,
                        }}
                    >
                        Cash
                    </Text>
                </View>

                <Button
                    title='Catre Plata'
                    buttonStyle={styles.butonComanda}
                    color='rgb(230,0,62)'
                    onPress={() => {
                        if (adresa != '') {
                            const produse = shoppingCart.map((produs) => {
                                return {
                                    id: produs.id,
                                    cantitate: produs.cantitate,
                                };
                            });
                            const comanda = { mentiuni, produse, mod_plata: 1 };
                            console.log(comanda);
                            sendComanda1(comanda, navigation.navigate, 'Mersi');
                            deleteShoppingCart();
                        }
                    }}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    butonComanda: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        marginVertical: 20,
    },
    dropDownPret: {
        //borderWidth: 1,
        height: 200,
    },
});

export default ComandaScreen;
