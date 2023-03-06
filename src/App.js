import Header from "./Components/Header /Header";
import Navbar from "./Components/Header /Navbar";
import MiniNav from "./Components/Header /MiniNav"
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <MiniNav />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Footer />

    </div>
  );
}

export default App;
