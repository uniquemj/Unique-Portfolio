import { Construction, CopyRight, Navbar } from "./components/container"

const App = () => {
  const InConstruction = import.meta.env.VITE_CONSTRUCTION === "true";
  return (
    <main>
      <Navbar/>
      {
        InConstruction ?
        <Construction/>
        :
        <></>
      }
      <CopyRight/>
    </main>
  )
}

export default App