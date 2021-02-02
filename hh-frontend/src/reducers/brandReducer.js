const brandReducer = (state = {brands: [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_BRANDS":
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}

export default brandReducer;