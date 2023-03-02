import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import MiniNav from "./Components/MiniNav"
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <MiniNav />
      <Hero />
      <Services />
      <About />
      <Testimonials/>
    </div>
  );
}

export default App;
