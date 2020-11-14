import React from 'react';
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader';
import useAxiosGet from '../Hooks/HttpRequests';

function Product() {
    const { id } = useParams()
    const url = `https://5fb050d17edddb00164683e7.mockapi.io/products/${id}`
    let product = useAxiosGet(url)
    let content = null

    if (product.error) {
        content = <p>
            There was an error. You may of searched for a product that doesn't exist.  Please refresh or try again later.
        </p>
    }

    if (product.loading) {
        content =<Loader> </Loader>
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