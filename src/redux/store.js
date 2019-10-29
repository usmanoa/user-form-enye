import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from './reducers/reducer'; 
import rootSaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()




export const store = createStore( rootReducer,
    composeWithDevTools( applyMiddleware( sagaMiddleware ) ));


sagaMiddleware.run(rootSaga)