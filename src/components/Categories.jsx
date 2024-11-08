import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/utils/categories"

export function Categories() {
    return (
        <section className="flex flex-col gap-2">
            <h2>Categorias</h2>
            <Card className="flex items-center bg-transparent border-transparent">
                <CardContent className="flex gap-6">
                    {categories.map((category) => (
                        <button key={category.id} className="text-slate-50 flex flex-col p-2 border border-slate-50 rounded-xl">
                            <category.Icon />
                           
                        </button>
                    ))
                    }
                </CardContent>
            </Card>
        </section>
    )
}
