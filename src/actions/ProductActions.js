
// Axios
import axios from '../conf/axios';

//Acciones
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
} from '../types';

// SweetAlert
import Sweet from 'sweetalert2';

// los actions son los que permiten cambiar el state
// y se llaman  en la vista
export function createNewProduct(product) {
    return async (dispatch) => {

        dispatch({
            type: ADD_PRODUCT,
            payload: true,
        });

        try {
            await axios.post("productos", product)

            setTimeout(async () => {
                dispatch({
                    type: SUCCESS_PRODUCT,
                    payload: product
                })
                Sweet.fire(
                    "Correcto",
                    "El producto se ha agregado correctamente.",
                    "success"
                )
            }, 5000)

        } catch (error) {
            dispatch({
                type: ERROR_PRODUCT,
                payload: true
            })

            Sweet.fire({
                icon: "error",
                title: "Ha Ocurrido Error",
                text: "Error Al insertar los valor"
            })
        }
    }
}

export const getProduct = () => {
    return async (dispatch) => {

        dispatch({
            type: GET_PRODUCT,
            payload: true,
        });

        try {
            const products = await axios.get("productos");
            setTimeout(() => {
                dispatch({
                    type: GET_SUCCESS,
                    payload: products.data
                })
            }, 2000)

        } catch (error) {
            dispatch({
                type: GET_ERROR,
                payload: true
            })

            Sweet.fire({
                icon: "error",
                title: "Ha Ocurrido Error",
                text: "Error al mostrar los datos"
            })

        }
    }
}

export const deleteProduct = (id) => {
    return async (dispatch) => {

        dispatch({
            type: DELETE_PRODUCT,
            payload: id,
        })

        try {
            await axios.delete(`productos/${id}`);
            dispatch({
                type: DELETE_SUCCESS,
            })

            Sweet.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } catch (error) {
            dispatch({
                type: DELETE_ERROR,
                payload: true
            })

            Sweet.fire({
                icon: "error",
                title: "Ha Ocurrido Error",
                text: "Error al mostrar los datos"
            })
        }
    }
}

export const updateProduct = (product) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_PRODUCT,
            payload: product,
        })
    }
}

export const updateProductSuccess = (product) => {
    return async (dispatch) => {

        try {
            await axios.put(`/productos/${product.id}`, product)
            dispatch({
                type: UPDATE_SUCCESS,
                payload: product,
            })
            Sweet.fire(
                "Correcto",
                "El producto se ha agregado correctamente.",
                "success"
            )
        } catch (error) {
            dispatch({
                type: UPDATE_ERROR,
                payload: true,
            })
            Sweet.fire({
                icon: "error",
                title: "Ha Ocurrido Error",
                text: "Error al mostrar los datos"
            })
        }
    }
}
