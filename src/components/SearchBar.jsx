import { useContext, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { fetchProducts } from "../api/fetchProducts";
import { AppContext } from "../context/AppContext";

export function SearchBar() {
    const [search, setSearch] = useState('')
    const { setProducts, setLoading, setFirstSearch} = useContext(AppContext)

    const handleSearch = async (e) => {
        e.preventDefault()
        setFirstSearch(false)
        setLoading(true)
        const products = await fetchProducts(search) 
        setLoading(false)
        setProducts(products)
        setSearch('')
    }

    return (
        <form onSubmit={handleSearch} className="w-full max-w-2xl flex gap-1 items-center relative">
            <input className=" bg-slate-50 text-black font-medium px-4 h-10 w-full rounded-lg focus:outline-none focus:outline-2 focus:outline-slate-50" 
            onChange={({target}) => setSearch(target.value)} 
            value={search} type="search" 
            placeholder="Realizar Busca" 
            required />

            <button type="submit" className="h-8 w-8 rounded-full absolute right-2 flex items-center flex-shrink-0  justify-center text-black text-base bg-slate-300"><LuSearch /></button>
        </form>
    )
}