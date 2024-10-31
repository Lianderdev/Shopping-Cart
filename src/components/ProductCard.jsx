import { formatCurrency } from "../utils/formatCurrency"

export function ProductCard({ id, title, thumbnail, price}) {

    const img = thumbnail.replace(/\w\.jpg/gi, "W.jpg")

    return (
        <div key={id}>
            <img src={img} alt={title}/>
            {title}
            {formatCurrency(price, 'USD')}
        </div>
    )
}