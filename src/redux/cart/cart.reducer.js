import { addItemToCart } from './card.utils';

const cartReducer = (state = { hidden: true, cartItems: [] }, action) => {
    switch (action.type) {
        case "TOGGLE_CART":
            return {
                ...state,
                hidden: !state.hidden
            };
        case "ADD_ITEM":
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems
                    .filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cartReducer;