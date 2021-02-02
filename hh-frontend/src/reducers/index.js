import { combineReducers } from 'redux';
import brandReducer from "./brandReducer.js"
import headphopneReducer from "./headphoneReducer.js"

const rootReducer = combineReducers({
    brandReducer,
    headphopneReducer,
})

export default rootReducer;