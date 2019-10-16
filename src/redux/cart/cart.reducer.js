const cartReducer = (state = { hidden: true }, action) => {
    switch (action.type) {
        case "TOGGLE_CART":
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}

export default cartReducer;