const URL = "http://localhost:3001";

// Action Object Function Creator

// Action Creators
export const getBrands = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_BRANDS" });
    fetch(URL + "/brands")
      .then((res) => res.json())
      .then((brands) => dispatch({ type: "FETCH_BRANDS", payload: brands }));
  };
};

export const addBrand = (brand) => {
  return (dispatch) => {
    dispatch({ type: "ADD_BRAND" });
    fetch(URL + "/brands", {
      method: "POST",
      body: JSON.stringify(brand),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((brand) => {
        // MOD 5 live coding example
        if (brand.id) {
          dispatch({ type: "BRAND_ADDED", payload: brand });
        } else {
          alert(brand);
        }
      })
      .catch(alert);
  };
};

export const addBrandHeadphone = (headphone) => {
  return (dispatch) => {
    dispatch({ type: "ADD_BRAND_HEADPHONE" });
    fetch(URL + "/headphones", {
      method: "POST",
      body: JSON.stringify(headphone),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((headphone) => {
        if (headphone.id) {
          dispatch({ type: "BRAND_HEADPHONE_ADDED", payload: headphone });
        } else {
          alert(headphone);
        }
      })
      .catch(alert);
  };
};
