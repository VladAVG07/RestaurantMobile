import React, { useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import MainHeader from '../components/MainHeader';
import {
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Button, Icon } from '@rneui/themed';
import SettingCard from '../components/SettingCard';
import { removeData } from '../utils/AsyncStorageUtils';
import { UserContext } from '../context/UserContext';

const AdminScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const { logOutUser, userDetails } = useContext(UserContext);
    const atIndex = userDetails.email.indexOf('@');
    const menuItems = [
        {
            key: '1',
            icon: 'shopping-bag',
            title: 'Comenzi',
            action: () => {
                navigation.navigate('ComenzileMele');
            },
        },
        {
            key: '2',
            icon: 'person',
            title: 'Cont',
            action: () => {
                console.log(userDetails);
            },
        },
        {
            key: '3',
            icon: 'delete',
            title: 'Dezactivarea contului si stergerea datelor mele',
            action: () => {
                console.log('Dezactivare si stergere');
            },
        },
        {
            key: '4',
            icon: 'logout',
            title: 'Deconectare',
            action: () => {
                try {
                    console.log('before remove');
                    const response = removeData('userDetails');
                    console.log(response);
                    console.log('after remove');
                    if (response != null) {
                        logOutUser();
                        navigation.navigate('LoginNav');
                    } else throw new Error('eroare');
                } catch (e) {
                    console.log(e.message);
                    return null;
                }
            },
        },
    ];
    return (
        <View
            style={{
                flex: 1,
                paddingLeft: insets.left,
                paddingRight: insets.right,
                paddingBottom: insets.bottom,
            }}
        >
            <MainHeader />
            <Text style={styles.header}>
                Hello, {userDetails.email.slice(0, 5)}
            </Text>
            <View style={styles.optionsContainer}>
                <FlatList
                    data={menuItems}
                    renderItem={({ item }) => (
                        <SettingCard
                            title={item.title}
                            action={item.action}
                            icon={item.icon}
                        />
                    )}
                    ItemSeparatorComponent={
                        <View
                            style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: 'white',
                            }}
                        ></View>
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 16,
        marginTop: 12,
    },
    optionsContainer: {
        backgroundColor: 'rgb(230,0,62)',
        width: '100%',
        height: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 20,
        paddingTop: 35,
        paddingHorizontal: 10,
    },
});

export default AdminScreen;
