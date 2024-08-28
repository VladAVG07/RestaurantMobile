import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon } from '@rneui/themed';
import { DrawerActions, NavigationContext } from '@react-navigation/native';

const MainHeader = ({ leftIconName, onIconPress, navPayload }) => {
    const navigation = useContext(NavigationContext);

    return (
        <>
            <Header
                centerComponent={
                    <Text style={styles.headerTtitle}>
                        Retea de restaurante
                    </Text>
                }
                leftComponent={
                    <Icon
                        name={leftIconName}
                        size={25}
                        color='#FFFF'
                        onPress={() => onIconPress(navPayload)}
                    />
                }
                backgroundColor='rgb(230,0,62)'
                containerStyle={styles.header}
            />
        </>
    );
};

const styles = StyleSheet.create({
    headerTtitle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    header: {
        borderBottomColor: 'black',
        borderBottomWidth: 5,
    },
});

export default MainHeader;
