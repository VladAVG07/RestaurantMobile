import React, { useState } from 'react';
import { loadData, storeData } from '../utils/AsyncStorageUtils';

const UserContext = React.createContext({});

const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState('');

    const setCurrentUser = (user) => {
        setUserDetails(user);
    };

    const logOutUser = () => {
        setUserDetails('');
    };

    return (
        <UserContext.Provider
            value={{ userDetails, setCurrentUser, logOutUser }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
