import React from 'react'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';



export default function Cart() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    console.log("cart", products)
    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }
    return (
        <div>
            <h3 style={{ marginTop: '20px' }}>Cart</h3>
            <div>
                {products.map(product => (
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', marginTop: '20px', backgroundColor: '#EDEADE', alignItems: 'center' }} key={product.id}>
                        <img style={{ margin: "10px" }} src={product.image} alt="" width="70" height="70" />
                        <h5 style={{ margin: "10px" }}>{product.title}</h5>
                        <h5 style={{ margin: "10px" }}>{product.price}</h5>

                        <Button variant="contained" onClick={() => handleRemove(product.id)}>Remove</Button>

                    </div>
                ))}
            </div>
        </div>
    )
}
