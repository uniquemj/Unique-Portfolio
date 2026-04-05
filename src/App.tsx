import Navbar from "@/container/Navbar"
import Header from "@/container/Header"
import Construction from "@/components/Construction"


const App = () => {
  const InConstruction = import.meta.env.VITE_INCONSTRUCTION === "true"
  console.log(InConstruction)
  return (
    <main>
      {
        InConstruction ? <Construction/> : (
          <>
            <Navbar/>
            <Header/>
          </>
        )
      }
    </main>
  )
}

export default App