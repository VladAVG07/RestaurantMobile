import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ComandaCard = ({ comanda }) => {
    const { restaurant, linii_comanda, pret } = comanda;
    const textProduse = linii_comanda
        .map((lc) => `${lc.cantitate} x ${lc.date_produs.nume}`)
        .join('\n');
    return (
        <View style={styles.container}>
            <View style={styles.pozaView}>
                <Image
                    style={styles.item}
                    source={{
                        uri:
                            restaurant.poza_prezentare == null
                                ? 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg'
                                : restaurant.poza_prezentare,
                    }}
                />
            </View>
            <View style={styles.viewContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.numeRestaurant}>{restaurant.nume}</Text>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode='tail'
                        style={styles.produseLinie}
                    >
                        {textProduse}
                    </Text>
                </View>
                <Text style={styles.textTotal}>TOTAL: {pret} RON</Text>
            </View>
        </View>
    );
};

export default ComandaCard;

const styles = StyleSheet.create({
    pozaView: {
        width: '27%',
        // height: 130,
        borderRadius: 20,
    },
    item: {
        aspectRatio: 1,
        width: '27%',
        height: 100,
        // flex: 1,
        borderRadius: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 10,
        paddingVertical: 5,
        // borderWidth: 1,
    },
    numeRestaurant: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    viewContainer: {
        flexDirection: 'column',
        //justifyContent: 'space-between',
        flex: 1,
        height: '100%',
        // borderWidth: 1,
    },
    textTotal: {
        fontWeight: 'bold',
        //  height:'100%',
        textAlignVertical: 'bottom',
    },
    produseLinie: {
        //flex:1
        // borderWidth: 1,
        marginTop: 5,
    },
});
