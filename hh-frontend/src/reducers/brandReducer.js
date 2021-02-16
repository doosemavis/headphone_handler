const initState = {brands: [], loading: false}

const brandReducer = (state = initState, action) => {
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

        case "ADD_BRAND_HEADPHONE":
            return {
                ...state,
                loading: true
            } 
        
        case "BRAND_HEADPHONE_ADDED":
            const newBrands = state.brands.map((br) => {
                if (br.id === action.payload.brand_id) {
                    return {...br, headphones: [...br.headphones, action.payload]}
                } else {
                    return br
                }
            })
            return {
                ...state,
                brands: newBrands,
                loading: false
            }

        default:
            return state;
    }
}

export default brandReducer;