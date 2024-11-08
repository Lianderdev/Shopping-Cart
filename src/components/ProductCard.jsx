import { formatCurrency } from "../utils/formatCurrency"
import propTypes from 'prop-types'

export function ProductCard({ title, thumbnail, price }) {

    const img = thumbnail.replace(/\w\.jpg/gi, "W.jpg")
    const name = title.replace('- Distribuidor Autorizado', '')
    const value = formatCurrency(price, 'USD')

    return (
        <div className="w-full flex flex-col bg-slate-50 cursor-pointer rounded-xl overflow-hidden">
            <img src={img} alt={title} />
            <div className="flex flex-col px-4 py-2 border-t border-slate-300 text-black">
                <h2 className="font-semibold text-xl">{value}</h2>
                <h3 className="leading-tight text-sm">{name}</h3>
            </div>
        </div>
    )
}


ProductCard.propTypes = {
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired
}