
import { Navigation } from "./components/Navigation";
import { Products } from "./components/Products";

export function App() {
  return (
    <>
      <Navigation />
      <main className="w-full max-w-7xl m-auto px-4">
        <Products />
      </main>
    </>
  )
}