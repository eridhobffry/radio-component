import { api } from 'application/api'
import { ACTIONS } from 'application/constants'
import { takeEvery, call, put, delay } from 'redux-saga/effects'
import { getRadiosDetailsFailed, getRadiosDetailsSucceed, populateRadiosDetails,  } from 'application/redux/actions/radios'

function* getRadiosDetailsRequestSaga() {
    try {
        const radiosDetails = yield call(api.gateway.radios.getRadiosData)
        yield put(populateRadiosDetails(radiosDetails.radios))
        yield delay(500)
        yield put(getRadiosDetailsSucceed())
    } catch (error) {
        yield put(getRadiosDetailsFailed())
    }
}

export function* radiosWatcher() {
    yield takeEvery(ACTIONS.RADIOS_GET_DATA_REQUEST, getRadiosDetailsRequestSaga)
}