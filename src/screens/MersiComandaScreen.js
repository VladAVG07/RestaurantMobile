import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const MersiComandaScreen = ({ comanda, navigation }) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image
                source={require('../../assets/comanda.gif')}
                style={{ width: 250, height: 200 }}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
                Multumim pentru comanda.
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
                {' '}
                Numar comanda: 12
            </Text>
            <View style={{ marginTop: 20 }}>
                <Button
                    title='Inapoi la ecranul principal'
                    color='rgb(230,0,62)'
                    onPress={() => navigation.navigate('Home2')}
                />
            </View>
        </SafeAreaView>
    );
};

export default MersiComandaScreen;

const styles = StyleSheet.create({});
