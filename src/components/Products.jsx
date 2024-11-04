import { useContext, useEffect, useState } from "react"
import { fetchProducts } from "../api/fetchProducts"
import { ProductCard } from "./ProductCard"
import { Loading } from "./loading/Loading"
import { AppContext } from "../context/AppContext"

export function Products() {
    const {products, setProducts, loading, setLoading} = useContext(AppContext)
    useEffect(() => {
        fetchProducts('iphone').then(response => {
            setProducts(response) 
            setLoading(false)})
    }, [])

    console.log('renderizou')

    console.log(products)
    return (
        (loading ? <Loading /> :
            <section className="mt-40">
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                    {products.map((product) => ( <ProductCard key={product.id} {...product}/>))}
                </ul>
            </section>
        )
    )
}