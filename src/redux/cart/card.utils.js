export const addItemToCart = (cartItems, cartItemToAdd) => {
    const isItemInCart = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );

    if (isItemInCart) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    };

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}