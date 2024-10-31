import { MdOutlineShoppingCart } from "react-icons/md";
import { SearchBar } from "./SearchBar";
import { Content } from "./Content";

export function Navigation() {
    return (
        <Content>
            <header className="w-full min-w-[400px] flex flex-col gap-4 px-4 py-6">
                <h1 className="text-2xl font-bold">Carrinho de Compras</h1>
                <div className="flex justify-between gap-10">
                <SearchBar />
                <button className="relative text-black text-2xl h-10 w-10 flex items-center justify-center flex-shrink-0 bg-yellow-300 rounded-full">
                    <MdOutlineShoppingCart />
                    <span className="absolute -top-2 -right-1 text-sm text-white h-5 w-5 bg-red-600 rounded-full">0</span>
                </button>
                </div>
            </header>
        </Content>
    )
}