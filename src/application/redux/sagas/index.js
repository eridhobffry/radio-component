import { all } from 'redux-saga/effects'
import { radiosWatcher } from './radios'

export default function* rootSaga() {
    yield all([
        radiosWatcher(),
    ])
}