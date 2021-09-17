import { ACTIONS } from "application/constants"

export const getRadiosDetailsRequest = () => ({
    type: ACTIONS.RADIOS_GET_DATA_REQUEST
})

export const getRadiosDetailsFailed = () => ({
    type: ACTIONS.RADIOS_GET_DATA_FAILED,
})

export const getRadiosDetailsSucceed = () => ({
    type: ACTIONS.RADIOS_GET_DATA_SUCCEED,
})

export const populateRadiosDetails = (payload) => ({
    type: ACTIONS.RADIOS_POPULATE_DATA,
    payload
})

export const selectRadiosDetails = (payload) => ({
    type: ACTIONS.SELECT_RADIO_DATA,
    payload
})

export const hideRadiosDetails = () => ({
    type: ACTIONS.HIDE_RADIO_DATA,
})