export const getHeadphones = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_HEADPHONES"})
        fetch('/headphones')
        .then(res => res.json())
        .then(headphones => dispatch({type: "FETCH_HEADPHONES", payload: headphones}))
    }
}

export const addHeadphone = (headphone) => {
    return (dispatch) => {
        dispatch({type: "ADD_BRAND"})
        fetch('/headphones', {
            method: 'POST',
            body: JSON.stringify(headphone),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(headphone => dispatch({type: "HEADPHONE_ADDED"}))
    }
}
