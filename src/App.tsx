import Navbar from "@/container/Navbar"
import Header from "@/container/Header"


const App = () => {
  return (
    <div className="w-full h-dvh overflow-x-hidden px-space-43 py-space-24 bg-gradient-to-b from-black to-primary-800 no-scrollbar">
      <Navbar/>
      <Header/>
    </div>
  )
}

export default App