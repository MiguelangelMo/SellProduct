import React, { Fragment, useEffect } from 'react';

import Products from './Products'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../actions/ProductActions'

const Product = () => {

    const product = useSelector((state) => state.products.product);
    const error = useSelector((state) => state.products.error);
    const loading = useSelector((state) => state.products.loading);
    //console.log(product)

    // para extraer los metodos del producto
    const dispatch = useDispatch();

    useEffect(() => {
        const loadingProduct = () => dispatch(getProduct())
        loadingProduct()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <h1 className="text-center my-5" > Product Listing </h1>

            {error ? <p className="alert alert-danger p2 mt-4 text-center"> Ha ocurrido un error </p> : null}
            
            {loading ? <p className="alert alert-light p2 mt-4 text-center"> Cargando datos... </p> : null}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col"> Name </th>
                        <th scope="col"> LastName </th>
                        <th scope="col"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {product.length > 0
                        ?
                        (
                            product.map(resp => (
                                <Products
                                    key={resp.id}
                                    product={resp}
                                />
                            )))
                        :
                        (
                            <td colSpan={4}>
                                <p className="alert alert-dark text-center p2 mt-4 w-100">No hay Productos</p>
                            </td>
                        )}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Product;