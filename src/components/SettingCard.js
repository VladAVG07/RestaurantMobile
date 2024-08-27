import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';

const SettingCard = ({ icon, title, action }) => {
    const onTouchEvent = () => {
        console.log('onTouchEvent');
        if (action) {
            action();
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onTouchEvent}>
            <Icon type='material' name={icon} color='white' />
            <Text style={styles.titleStyle}>{title}</Text>
            <Icon type='material' name={'navigate-next'} color='white' />
        </TouchableOpacity>
    );
};

export default SettingCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //  justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    titleStyle: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,
        flex: 1,
    },
});
