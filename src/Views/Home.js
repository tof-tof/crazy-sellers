import React from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import useAxiosGet from '../Hooks/HttpRequests';

function Home() {
    const url = `https://5fb050d17edddb00164683e7.mockapi.io/products?page=1&limit=10`
    let products = useAxiosGet(url)
    let content = null
    if (products.error) {
        content = <p>
            There was an error. You may of searched for a product that doesn't exist.  Please refresh or try again later.
        </p>
    }

    if (products.loading) {
        content =<Loader> </Loader>
    }
    if (products.data) {
        content = products.data.map((product) =>
            <div key={product.id} className="justify-center">
                <ProductCard
                    product={product}/>
            </div>
        )
    }
    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}
export default Home;