import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { Icon } from '@rneui/themed';
import HTMLView from 'react-native-htmlview';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

export default function ProdusCard(props) {
    const item = props.item;
    const { addToShoppingCart } = useContext(ShoppingCartContext);
    return (
        <View style={styles.container}>
            <View style={styles.picture}>
                <Image
                    source={
                        item.image_file === ''
                            ? require('../../assets/mancare.png')
                            : {
                                  uri:
                                      'https://admin.diobistro.ro/uploads/produse/' +
                                      item.image_file,
                              }
                    }
                    style={{
                        height: 115,
                        width: '100%',
                        aspectRatio: 1,
                        borderRadius: '100%',
                    }}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.textNumeProdus}>{item.nume}</Text>
                {/* <Text style={styles.textDescriere}>{item.descriere}</Text> */}
                <HTMLView value={item.descriere} />
            </View>
            <View style={styles.pretAdauga}>
                <Text style={styles.pret}>{item.pret_curent} RON</Text>
                <TouchableOpacity onPress={() => addToShoppingCart(item)}>
                    <View
                        style={{
                            borderRadius: 15,
                            backgroundColor: 'rgb(230,0,62)',
                            width: 30,
                            height: 30,
                            alignSelf: 'flex-end',
                            paddingLeft: 0.5,
                        }}
                    >
                        <Icon
                            type="material"
                            name="add"
                            size={30}
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        height: 115,
        marginBottom: 10,
    },
    picture: {
        width: '30%',
        borderRadius: 10,
        //borderWidth: 2,
        //borderColor: 'red',
        marginRight: 10,
    },
    content: {
        width: '50%',
        flex: 1,
        flexDirection: 'column',
        alignContent: 'flex-start',
        padding: 2,
    },
    textNumeProdus: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    textDescriere: {
        fontSize: 11,
    },
    pretAdauga: {
        //        width: '25%',
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    pret: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});
