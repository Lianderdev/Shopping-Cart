import { useState } from "react";
import { AppContext } from "./AppContext";

export function Provider({ children }) {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [firstSearch, setFirstSearch] = useState(true)

    return (
        <AppContext.Provider value={{loading, setLoading, products, setProducts, firstSearch, setFirstSearch}}>
            { children }
        </AppContext.Provider>
    )
}