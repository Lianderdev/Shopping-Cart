import { MdOutlineShoppingCart } from "react-icons/md";
import { SearchBar } from "./SearchBar";
import { Content } from "./Content";
import { Categories } from "./Categories";

export function Navigation() {
    return (
        <Content>
            <header className="w-full min-w-[400px] flex flex-col gap-4 px-4 py-6">
                <h1 className="text-2xl font-bold text-white">Carrinho de Compras</h1>
                <div className="flex gap-4">
                    <SearchBar />
                    <button className="relative text-black px-2 text-base font-medium flex items-center justify-center gap-1 flex-shrink-0 bg-slate-50 rounded-lg">
                        <MdOutlineShoppingCart className="text-xl" />
                        <span className="absolute -top-2 -right-2 text-sm text-white h-5 w-5 bg-red-600 rounded-full">0</span>
                        Carrinhho
                    </button>

                    <button className="relative text-white border-2 border-slate-600 px-2 text-base font-medium flex items-center justify-center gap-1 flex-shrink-0 rounded-lg">
                        Filtro
                    </button>
                </div>
                <Categories />
            </header>
        </Content>
    )
}