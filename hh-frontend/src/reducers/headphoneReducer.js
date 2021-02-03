const headphoneReducer = (state = {headphones: [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_HEADPHONES":
            return {
                ...state,
                loading: true
            }

        case "FETCH_HEADPHONES":
            return {
                ...state,
                headphones: action.payload,
                loading: false
            }    

        case "ADD_HEADPHONE":
            return {
                ...state,
                loading: true
            } 
        
        case "BRAND_ADDED":
            return {
                ...state,
                headphones: [...state.headphones, action.payload],
                loading: false
            }

        default:
            return state;
    } 
}

export default headphoneReducer;