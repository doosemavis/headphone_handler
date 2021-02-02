const brandReducer = (state = {brands: [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_BRANDS":
            return {
                ...state,
                loading: true
            }
        
        case "FETCH_BRANDS":
            return {
                ...state,
                brands: action.payload,
                loading: false,
            }

        default:
            return state;
    }
}

export default brandReducer;