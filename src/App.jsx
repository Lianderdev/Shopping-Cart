
import { Navigation } from "./components/Navigation";
import { Products } from "./components/Products";
import { Provider } from "./context/Provider";

export function App() {
  return (
    <>
      <Provider>
        <Navigation />
        <main className="w-full max-w-6xl m-auto px-4">
          <Products />
        </main>
      </Provider>
    </>
  )
}