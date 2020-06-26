import {
    GET_PRODUCT,
    GET_ERROR,
    GET_SUCCESS,
    ADD_PRODUCT,
    SUCCESS_PRODUCT,
    ERROR_PRODUCT,
    DELETE_PRODUCT,
    DELETE_SUCCESS,
    DELETE_ERROR,
    UPDATE_PRODUCT,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
} from '../types'

// Cada reducer tiene su propio state
// Este es el primer reducer creado

const initialState = {
    product: [],
    error: false,
    loading: false,
    productDelete: null,
    productUpdater: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload,
            }
        case SUCCESS_PRODUCT:
            return {
                ...state,
                loading: false,
                error: false,
                product: [action.payload, ...state.product],
            }
        case DELETE_ERROR:
        case ERROR_PRODUCT:
        case GET_ERROR:
        case UPDATE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case GET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                product: action.payload,
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                productDelete: action.payload,
                error: false
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                product: state.product.filter(resp => resp.id !== state.productDelete),
                productDelete: null
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                productUpdater: action.payload
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                productUpdater: null,
                product: state.product.map(resp =>
                    resp.id === action.payload.id ? resp = action.payload : resp
                )
            }
        default:
            return state;
    }
}