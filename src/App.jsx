import Header from "./components/Header"
import MoviesGenre from "./components/MoviesGenre"
import ProductionHouse from "./components/ProductionHouse"
import SlideItem from "./components/SlideItem"

function App() {
  return (
    <>
    <div className="w-screen min-h-screen bg-gradient-to-t from-neutral-900 via-zinc-600 to-neutral-900">
      <Header/>
      <SlideItem/>
      <ProductionHouse/>
      <MoviesGenre/>
      </div>
    </>
  )
}

export default App
