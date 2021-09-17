import { ACTIONS } from "application/contants";
import { DefaultStore } from "../default_store";

export const RadiosReducer = (state = DefaultStore.radios, action) => {
    switch (action.type) {
        case ACTIONS.RADIOS_GET_DATA_REQUEST:
            return {
                ...state,
                request: true
            }
        case ACTIONS.RADIOS_GET_DATA_FAILED:
            return {
                ...state,
                request: false,
                failed: true,
            }
        case ACTIONS.RADIOS_GET_DATA_SUCCEED:
            return {
                ...state,
                request: false,
                succeed: true,
            }
        case ACTIONS.RADIOS_POPULATE_DATA:
            return {
                ...state,
                payload: action.payload
            }
        default:
            return state
    }
}