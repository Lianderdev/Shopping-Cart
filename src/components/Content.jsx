export function Content({ children }) {
    return (
        <div className="w-full bg-slate-950 fixed top-0 z-1">
            <div className="max-w-6xl m-auto ">
                {children}
            </div>
        </div>
    )
}