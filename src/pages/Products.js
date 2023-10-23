import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { STATUSES, fetchProducts } from '../store/productSlice';


export default function Products() {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product)
    console.log("products", products, status)

    useEffect(() => {
        dispatch(fetchProducts())

    }, [])



    const handleAdd = (product) => {
        dispatch(add(product))
    }

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>
    }
    if (status === STATUSES.ERROR) {
        return <h2>SOMETHING WENT WRONG!</h2>
    }
    return (
        <div>

            <section>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '20px' }} >
                    {
                        products.map((product) => (

                            <Card sx={{ maxWidth: 300 }} key={product.id} style={{ marginBottom: '30px', backgroundColor: '#EDEADE' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={product.image}
                                    title={product.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div"
                                        className="max-lines1">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className="max-lines">
                                        {product.description}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Price: {product.price}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" style={{ margin: '0 auto', display: "flex" }} onClick={() => handleAdd(product)}>Add To Cart</Button>
                                    {/* <Button size="small">Add To Cart</Button> */}
                                    {/* <Button size="small">Learn More</Button> */}
                                </CardActions>
                            </Card>


                        ))

                    }
                </div>

            </section >
        </div >
    )
}
