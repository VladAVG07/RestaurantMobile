import React, { useState } from 'react';

const ShoppingCartContext = React.createContext({});

const ShoppingCartProvider = ({ children }) => {
	const [shoppingCart, setShoppingCart] = useState([]);

	const addToShoppingCart = (product) => {
		setShoppingCart([...shoppingCart, product]);
	};

	const value = {
		shoppingCart,
		setShoppingCart,
		productCount: shoppingCart.length,
	};

	return (
		<ShoppingCartContext.Provider value={value}>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export { ShoppingCartContext, ShoppingCartProvider };
