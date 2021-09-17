import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const compose = (middleware) => {
    return typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(middleware)
        : middleware
}

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store