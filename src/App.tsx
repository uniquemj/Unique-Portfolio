import Navbar from "@/container/Navbar";
import Header from "@/container/Header";
import Construction from "@/components/Construction";
import ComingSoon from "./container/ComingSoon";

const App = () => {
  const InConstruction = import.meta.env.VITE_INCONSTRUCTION === "true";
  console.log(InConstruction);
  return (
    <main>
      <Navbar />
      <Header />
      <ComingSoon />
    </main>
  );
};

export default App;
