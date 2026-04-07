import Navbar from "@/container/Navbar";
import Header from "@/container/Header";
import ComingSoon from "@/container/ComingSoon";
import Skills from "@/container/Skills";

const App = () => {
  const InConstruction = import.meta.env.VITE_INCONSTRUCTION === "true";
  console.log(InConstruction);
  return (
    <main>
      <Navbar />
      <Header />
      <Skills/>
      <ComingSoon />
    </main>
  );
};

export default App;
