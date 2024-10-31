import { useState } from "react";
import { LuSearch } from "react-icons/lu";

export function SearchBar() {
    const [search, setSearch] = useState('')
    return (
        <form action="" className="w-full flex gap-3 items-center">
            <input className="bg-slate-50 text-black font-medium px-2 h-10 w-full max-w-lg focus:outline-none focus:outline-2 focus:outline-yellow-300 focus:rounded-sm" onChange={({target}) => setSearch(target.value)} value={search} type="search" placeholder="Realizar Busca" required />
            <button type="submit" className="h-10 w-10 flex items-center flex-shrink-0  justify-center text-black text-2xl bg-yellow-300"><LuSearch /></button>
        </form>
    )
}