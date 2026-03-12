import Navbar from "@/container/Navbar"
import Header from "@/container/Header"
import Construction from "@/components/Construction"


const App = () => {
  const InConstruction = import.meta.env.VITE_INCONSTRUCTION
  console.log(InConstruction)
  return (
    <div className="w-full h-dvh overflow-x-hidden px-space-43 py-space-24 bg-gradient-to-b from-black to-primary-800 no-scrollbar">
      {
        InConstruction ? (
          <>
            <Navbar/>
            <Header/>
          </>
        ):
        <Construction/>
      }
    </div>
  )
}

export default App