import { useEffect, useState } from "react"
import { fetchProducts } from "../api/fetchProducts"
import { ProductCard } from "./ProductCard"

export function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts('iphone').then(response => setProducts(response))
    }, [])

    console.log(products)
    return (
        <section className="mt-40">
            <ul>
                {products.map((product) => (
                    <ProductCard key={product.id} {...product}/>
                ))}
            </ul>
        </section>
    )
}