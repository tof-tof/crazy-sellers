import React, { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Product() {
    const { id } = useParams()
    const url = `https://5fb050d17edddb00164683e7.mockapi.io/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data:null
    })
    let content = null
    useEffect(() => {
        setProduct({
            loading: true,
            data: null
        })
        axios.get(url).then(response => {
            setProduct({
                loading: false,
                data: response.data
            })
    
        })
    }, [url])

    if (product.loading) {
        content = <p>loading...</p>
    }

    if (product.data) {
        return (
            content =
            <div>
                <h1 className="text-2xl font-bold mb-3">{product.data.name}  </h1>
                <div>
                    <img 
                        src={product.data.theImage}
                        alt={product.data.name} />
                </div>
                <div className="font-bold text-xl mb-3">
                    £ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">Product  </h1>
            {content}
        </div>
    )
}
export default Product;