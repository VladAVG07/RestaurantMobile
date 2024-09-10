import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Icon, Input } from '@rneui/themed';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const ShoppingCartItem = ({ produs }) => {
    const { removeFromShoppingCart, editShoppingCart } =
        useContext(ShoppingCartContext);

    return (
        <View
            style={{
                padding: 10,
                borderWidth: 3,
                borderRadius: 20,
                marginTop: 10,
            }}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 10 }}>
                    <Text>Poza produs(n-avem)</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        {produs.nume}
                    </Text>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={styles.produseLinie}
                    >
                        {produs.descriere}
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                        {produs.pret_curent + ' RON'}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold' }}>
                        {produs.cantitate}
                    </Text>
                    <Icon
                        name="add"
                        size={35}
                        color={'green'}
                        onPress={() => editShoppingCart(produs, 'add')}
                    />
                    <Icon
                        name="remove"
                        size={35}
                        color={'red'}
                        onPress={() => editShoppingCart(produs, 'remove')}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => removeFromShoppingCart(produs.id)}
                >
                    <Icon name="delete" size={35} color={'red'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    produseLinie: {
        marginRight: '40%',
    },
});

export default ShoppingCartItem;
