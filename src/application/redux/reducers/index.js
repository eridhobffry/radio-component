import { combineReducers } from "redux";
import { RadiosReducer } from "./radios";

const reducers = combineReducers({
    radios: RadiosReducer,
})

const appReducer = (state, action) => {
    return reducers(state, action)
}

export default appReducer