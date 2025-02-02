import React, { useState, useEffect, useRef } from 'react';

const ShoppingCartContext = React.createContext({});

const ShoppingCartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([]);
    //const [shoppingCartCount, setShoppingCartCount] = useState(0);

    const addToShoppingCart = (product) => {
        const existaProdus = shoppingCart.find((e) => e.id == product.id);
        console.log(existaProdus);
        if (!existaProdus) {
            const p = { ...product, cantitate: 1 };
            setShoppingCart([...shoppingCart, p]);
        } else {
            const arr = shoppingCart.filter((e) => e.id != existaProdus.id);
            existaProdus.cantitate++;
            setShoppingCart([...arr, existaProdus]);
        }
    };

    const removeFromShoppingCart = (productId) => {
        const arr = shoppingCart.filter((e) => e.id != productId);
        setShoppingCart(arr);
    };

    const editShoppingCart = (product, action) => {
        const index = shoppingCart.findIndex((e) => e.id == product.id);
        let newArr = [];
        for (let i = 0; i < index; i++) {
            newArr = [...newArr, shoppingCart[i]];
        }
        switch (action) {
            case 'add':
                product.cantitate++;
                break;
            case 'remove':
                if (product.cantitate == 1) {
                    removeFromShoppingCart(product.id);
                    return;
                }
                product.cantitate--;
                break;
            default:
                break;
        }
        newArr[index] = product;
        for (let i = index + 1; i < shoppingCart.length; i++) {
            newArr = [...newArr, shoppingCart[i]];
        }
        setShoppingCart(newArr);
        return;
    };

    const createShoppingCartCount = () => {
        let count = 0;
        for (let i = 0; i < shoppingCart.length; i++) {
            count += shoppingCart[i].cantitate;
        }
        return count;
    };

    const createTotal = () => {
        let total = 0;
        for (let i = 0; i < shoppingCart.length; i++) {
            total += shoppingCart[i].pret_curent * shoppingCart[i].cantitate;
        }
        return total.toFixed(2);
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                shoppingCart,
                addToShoppingCart,
                removeFromShoppingCart,
                editShoppingCart,
                shoppingCartCount: createShoppingCartCount(),
                total: createTotal(),
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};

export { ShoppingCartContext, ShoppingCartProvider };
