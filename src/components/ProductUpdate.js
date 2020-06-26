import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductSuccess } from '../actions/ProductActions';
import { useHistory } from 'react-router-dom';

const ProductUpdate = () => {

    const dispatch = useDispatch();
    const History = useHistory();

    const [states, setstate] = useState({
        name: '',
        price: ''
    })

    const product = useSelector((state) => state.products.productUpdater);

    useEffect(() => {
        setstate(product)
    }, [product])

    const handleChange = e => {
        setstate({
            ...states,
            [e.target.name]: e.target.value
        })
    }

    const { name, price } = states;

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProductSuccess(states));
        History.push('/');
    }

    if (!product) return null;

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="">

                    </div>
                    <div className="card-body">
                        <div className="text-center mb-4 font-weight-bold">
                            <h2>
                                Edit Product
                            </h2>
                        </div>

                        <form onSubmit={onSubmit}>

                            <div className="form-group">
                                <label htmlFor="name"> Name Product </label>
                                <input
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="Product Name"
                                    value={name}
                                    onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price"> Product Price </label>
                                <input
                                    className="form-control"
                                    name="price"
                                    id="price"
                                    type="number"
                                    value={price}
                                    onChange={handleChange} />
                            </div>

                            <input
                                type="submit"
                                className="btn btn-success font-weight-bold text-uppercase d-block w-100"
                                value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductUpdate;