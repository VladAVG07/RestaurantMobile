import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import MainHeader from '../components/MainHeader';
import ComandaCard from '../components/ComandaCard';
import getComenzi from '../api/ApiAxios';

const ComenzileMeleScreen = ({ navigation }) => {
    useEffect(() => {
        const getComenzi1 = async () => {
            const response = await getComenzi();
            setComenzi(response.data.data);
        };
        getComenzi1();
        console.log(comenzi);
    }, []);
    const [comenzi, setComenzi] = useState([]);
    return (
        <View>
            <MainHeader
                leftIconName={'arrow-back'}
                onIconPress={navigation.pop}
            />
            <Text style={styles.comenziHeader}>Comenzile Mele</Text>
            <ComandaCard
                comanda={{
                    id: 190,
                    numar_comanda: 23,
                    utilizator: 10,
                    status: 220,
                    data_ora_creare: '2024-08-28 18:10:37',
                    data_ora_finalizare: null,
                    pret: '222.00',
                    tva: '0.09',
                    mentiuni: 'pizza fara ciuperci',
                    canal: 'web',
                    mod_plata: 1,
                    numar_telefon: null,
                    adresa: null,
                    status_text: 'In asteptare',
                    mod_plata_text: 'numerar',
                    linii_comanda: [
                        {
                            cantitate: 1,
                            pret: '30.00',
                            produs_detaliu: null,
                            date_produs: {
                                id: 3,
                                categorie: 12,
                                cod_produs: 1,
                                nume: 'Pizza Capriciosa',
                                descriere: 'Pizza cu multe chestii',
                                image_file: '',
                                data_productie: '2023-01-26',
                                pret_curent: '30.00',
                                valid: 1,
                                stocabil: 0,
                                alerta_stoc: 0,
                                disponibil: 0,
                                ordine: 0,
                                picant: 0,
                            },
                            nume_produs: 'Pizza Capriciosa',
                        },
                        {
                            cantitate: 6,
                            pret: '192.00',
                            produs_detaliu: null,
                            date_produs: {
                                id: 25,
                                categorie: 12,
                                cod_produs: 1232132,
                                nume: 'pizza moldoveneasca',
                                descriere: 'pizza moldoveneasca',
                                image_file: '',
                                data_productie: '2023-05-31',
                                pret_curent: '32.00',
                                valid: 1,
                                stocabil: 0,
                                alerta_stoc: 0,
                                disponibil: 1,
                                ordine: 0,
                                picant: 0,
                            },
                            nume_produs: 'pizza moldoveneasca',
                        },
                    ],
                    restaurant: {
                        id: 7,
                        tip_restaurant: 1,
                        nume: 'test',
                        cui: '12345',
                        adresa: 'test',
                        numar_telefon: '+40748898748',
                        poza_prezentare: null,
                    },
                }}
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
