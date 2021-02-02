export const getBrands = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_BRANDS"})
        fetch('/brands')
        .then(res => res.json())
        .then(brands => dispatch({type: "FETCH_BRANDS", payload: brands}))
    }
}

export const addBrand = (brand) => {
    return (dispatch) => {
        dispatch({type: "ADD_BRAND"})
        fetch('/brands', {
            method: 'POST',
            body: JSON.stringify(brand),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(brand => dispatch({type: "BRAND_ADDED"}))
    }
}