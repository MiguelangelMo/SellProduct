//Acciones
import {
    SHOW_ALERT,
    HIDE_ALERT,
} from '../types';

export const showAlert = (alert) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: alert,
        })
    }
}

export const hideAlert = () => {
    return (dispatch) => {
        dispatch({
            type: HIDE_ALERT,
            payload: null,
        })
    }
}

