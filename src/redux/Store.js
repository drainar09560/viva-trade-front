import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import Purchases from './reducers/Purchases'

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(Purchases, composeEnhancers(applyMiddleware(thunk)));

export default store