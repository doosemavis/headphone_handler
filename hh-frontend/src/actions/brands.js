export const getBrands = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_BRANDS"})
        fetch('/brands'
        .then(res => res.json())
        .then(brands => dispatch({type: "FETCH_BRANDS", payload: brands}))
        )
    }
}