import { ACTIONS } from "application/constants";
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
        case ACTIONS.SELECT_RADIO_DATA:
            return {
                ...state,
                action: {
                    ...state.action,
                    isSelected: true,
                    selectedRadio: action.payload
                }
            }
        case ACTIONS.HIDE_RADIO_DATA:
            return {
                ...state,
                action: {
                    ...state.action,
                    isSelected: false,
                    selectedRadio: null
                }
            }
        default:
            return state
    }
}