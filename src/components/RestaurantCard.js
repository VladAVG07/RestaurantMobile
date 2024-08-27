import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import { Card, Image, Icon } from '@rneui/themed';

const RestaurantCard = ({ navigation, restaurant }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Restaurant', { restaurant });
            }}
        >
            <Card
                containerStyle={styles.cardContainer}
                wrapperStyle={styles.wrapper}
            >
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
                    <View style={styles.raiting}>
                        <Icon type='material' name='thumb-up' color={'white'} />
                        <Text
                            style={{
                                color: 'white',
                                marginLeft: 4,
                                marginTop: 4,
                            }}
                        >
                            Raiting
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        {restaurant.nume}
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                        {restaurant.tip_restaurant.nume}
                    </Text>
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Icon type='font-awesome' name='truck' />
                    <Text style={{ marginHorizontal: 6, marginTop: 3 }}>
                        5.99 RON
                    </Text>
                    <Text style={{ marginTop: 3 }}>25-35 min</Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        aspectRatio: 1,
        width: '100%',
        height: 150,
        // flex: 1,
        borderRadius: 20,
    },
    pozaView: {
        width: '100%',
        height: 150,
        borderRadius: 20,
    },
    cardContainer: {
        borderWidth: 0,
        shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow for iOS
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,

        elevation: 0, // Remove Shadow for Android
        padding: -10,
    },
    wrapper: {
        borderWidth: 0,
        display: 'flex',
        flexDirection: 'column',
    },
    raiting: {
        display: 'flex',
        flexDirection: 'row',
        zIndex: 1,
        position: 'absolute',
        right: 11,
        bottom: 10,
    },
});

export default RestaurantCard;
