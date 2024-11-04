import { useState } from "react";
import { AppContext } from "./AppContext";

export function Provider({ children }) {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    return (
        <AppContext.Provider value={{loading, setLoading, products, setProducts}}>
            { children }
        </AppContext.Provider>
    )
}