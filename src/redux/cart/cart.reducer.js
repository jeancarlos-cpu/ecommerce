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
                    cartItems: [...(state.cartItems), action.payload]
                }

        default:
            return state;
    }
}

export default cartReducer;