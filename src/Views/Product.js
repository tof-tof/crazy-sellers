import React from 'react';
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader';
import useAxiosGet from '../Hooks/HttpRequests';
import {Link} from 'react-router-dom'

function Product() {
    const { id } = useParams()
    let prev
    let next
    const url = `https://5fb050d17edddb00164683e7.mockapi.io/products/${id}`
    let product = useAxiosGet(url)
    let content = null

    if (parseInt(id) !== 1) {
        prev = parseInt(id) - 1
    }
    else {
        prev = 50
    }
    if (parseInt(id) !== 50) {
        next = parseInt(id) + 1 
    } else {
        next =1
    }

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
                 <p>There are 50 items in the catalogue</p>
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
                <div class="grid grid-cols-2 gap-4 justify-items-start h-auto w-64">
                    <Link 
                            to={`/products/${prev}`}
                            className="bg-blue-500 text-white p-2 flex justify-center w-32"
                        >
                            Previous Item
                    </Link>
                    <Link 
                            to={`/products/${next}`}
                            className="bg-green-500 text-white p-2 flex justify-center w-32"
                        >
                            Next Item
                    </Link>
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