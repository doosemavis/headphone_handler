import { combineReducers } from 'redux';
import brandReducer from "./brandReducer.js"
import headphoneReducer from "./headphoneReducer.js"

const rootReducer = combineReducers({
    brandReducer,
    headphoneReducer,
})

export default rootReducer;