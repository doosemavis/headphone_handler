const URL = 'http://localhost:3001'

export const getBrands = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_BRANDS"})
        fetch(URL + '/brands')
        .then(res => res.json())
        .then(brands => dispatch({type: "FETCH_BRANDS", payload: brands}))
    }
}

export const addBrand = (brand) => {
    return (dispatch) => {
        dispatch({type: "ADD_BRAND"})
        fetch(URL + '/brands', {
            method: 'POST',
            body: JSON.stringify(brand),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(brand => dispatch({type: "BRAND_ADDED", payload: brand}))
    }
}

export const addBrandHeadphone = (headphone) => {
    return (dispatch) => {
        dispatch({type: "ADD_BRAND_HEADPHONE"})
        fetch(URL + '/headphones', {
            method: 'POST',
            body: JSON.stringify(headphone),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(headphone => dispatch({type: "BRAND_HEADPHONE_ADDED", payload: headphone}))
    }
}
