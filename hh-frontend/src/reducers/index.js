import { combineReducers } from 'redux';
import brandReducer from "./brandReducer.js"
import headphopneReducer from "./headphoneReducer.js"

const combineReducers = redux.combineReducers



const rootReducer = combineReducers({
    brand: brandReducer,
    headphone: headphopneReducer,
})

const store = createStore(rootReducer)