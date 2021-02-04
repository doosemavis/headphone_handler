export const getHeadphones = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_HEADPHONES"})
        fetch('http://localhost:3001/headphones')
        .then(res => res.json())
        .then(headphones => dispatch({type: "FETCH_HEADPHONES", payload: headphones}))
    }
}

export const addHeadphone = (headphone) => {
    return (dispatch) => {
        dispatch({type: "ADD_BRAND"})
        fetch('http://localhost:3001/headphones', {
            method: 'POST',
            body: JSON.stringify(headphone),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(headphone => dispatch({type: "HEADPHONE_ADDED", payload: headphone}))
    }
}
