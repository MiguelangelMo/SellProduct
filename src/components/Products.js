import React from 'react';

import {  useHistory } from 'react-router-dom'

// Redux-React
import { useDispatch } from 'react-redux';

// Redux
import { deleteProduct, updateProduct } from '../actions/ProductActions';

// SweetAlert
import Swal from 'sweetalert2';

const Products = ({ product }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleUpdate = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.value) {
                dispatch(deleteProduct(id));
            }
        })
    }

    const History = products => {
        dispatch(updateProduct(products));
        history.push(`/products/update/${products.id}`);
    }

    return (
        <tr>
            <td>{product.name}</td>
            <td className="font-weight-bold"> {product.price}$ </td>
            <td className="acciones">
                <button
                    className="btn btn-warning"
                    type="button"
                    onClick={() => History(product)}
                >
                    <i className="fa fa-pencil"></i>
                </button>
                <button className="btn btn-danger" onClick={() => handleUpdate(product.id)}>
                    <i className="fa fa-trash" ></i>
                </button>
            </td>
        </tr>
    );
}

export default Products;