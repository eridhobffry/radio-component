import { ACTIONS } from "application/contants"

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