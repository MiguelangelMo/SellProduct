import { combineReducers } from 'redux';
import productReducer from './productReducer';
import alertReducer from './alertReducer';

// Se utiliza combineReducers, porque solo por aplicacion se debe tener un state
// Entonces se definen varios reducers se combinen con esta funcion (combineReducers)
// se le envia al store y recibe los reducer
export default combineReducers({
    products: productReducer,
    alerts: alertReducer,
})