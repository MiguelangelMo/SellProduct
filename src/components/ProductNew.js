import React, { useState } from 'react';

// Components
import Spinner from '../components/Spinner'

// Esto es para poder usar los metodos y porpiedades de Redux
import { useDispatch, useSelector } from 'react-redux';
import { createNewProduct } from '../actions/ProductActions';
import { showAlert, hideAlert } from '../actions/AlertActions';

const ProductNew = ({ history }) => {

    const [name, handleName] = useState('')
    const [price, handlePrice] = useState('')

    // Acceder a los estados 
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);
    const alerts = useSelector((state) => state.alerts.alert);

    // dispatch: retorna las acciones
    const dispatch = useDispatch();

    // El dispatch es una funcion que pide como parametro otra funcion
    // La cual es Ejem: ProductActions donde estan las acciones que cambian peload
    const addproduct = (product) => dispatch(createNewProduct(product));

    const onSubmit = (e) => {
        e.preventDefault();

        if (name.length < 1 && price <= 0) {
            const alert = {
                msg: "Todos los campos deben estar completos",
                class: "alert alert-danger text-center text-uppercase p3 mt-3",
            }
            dispatch(showAlert(alert));
            return null;
        }

        dispatch(hideAlert());

        addproduct({
            name,
            price
        });

        history.push("/");
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="">

                    </div>
                    <div className="card-body">
                        <div className="text-center mb-4 font-weight-bold">
                            <h2>
                                Add New Product
                            </h2>
                        </div>

                        <form onSubmit={onSubmit}>

                            <div className="form-group">
                                <label htmlFor="nameProduct"> Name Product </label>
                                <input
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="Product Name"
                                    value={name}
                                    onChange={(e) => handleName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="priceProduct"> Product Price </label>
                                <input
                                    className="form-control"
                                    name="price"
                                    id="price"
                                    type="number"
                                    value={price}
                                    onChange={(e) => handlePrice(Number(e.target.value))}
                                />
                            </div>

                            <input
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                value="Send" />
                        </form>
                        {loading ? <Spinner className="text-center" /> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center"> Ha ocurrido un error </p> : null}
                        {alerts ?
                            <div class={alerts.class} role="alert">
                                {alerts.msg}
                            </div> :
                            null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductNew;