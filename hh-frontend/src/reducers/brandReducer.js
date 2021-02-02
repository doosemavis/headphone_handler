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

        case "ADD_BRAND":
            return {
                ...state,
                loading: true
            } 
        
        case "BRAND_ADDED":
            return {
                ...state,
                brands: [...state.brands, action.payload],
                loading: false
            }

        default:
            return state;
    }
}

export default brandReducer;