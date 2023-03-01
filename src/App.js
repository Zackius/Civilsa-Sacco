import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import MiniNav from "./Components/MiniNav"
import Hero from "./Components/Hero";
import Services from "./Components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <MiniNav />
      <Hero />
      <Services/>
    </div>
  );
}

export default App;
