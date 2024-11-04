import { useContext, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { fetchProducts } from "../api/fetchProducts";
import { AppContext } from "../context/AppContext";

export function SearchBar() {
    const [search, setSearch] = useState('')
    const { setProducts } = useContext(AppContext)

    const handleSearch = async (e) => {
        e.preventDefault()
        const products = await fetchProducts(search) 
        setProducts(products)
        setSearch('')
    }

    return (
        <form onSubmit={handleSearch} className="w-full flex gap-1 items-center">
            <input className="bg-slate-50 text-black font-medium px-2 h-10 w-full max-w-lg focus:outline-none focus:outline-2 focus:outline-yellow-300 focus:rounded-sm" 
            onChange={({target}) => setSearch(target.value)} 
            value={search} type="search" 
            placeholder="Realizar Busca" 
            required />

            <button type="submit" className="h-10 w-10 flex items-center flex-shrink-0  justify-center text-black text-2xl bg-yellow-300"><LuSearch /></button>
        </form>
    )
}