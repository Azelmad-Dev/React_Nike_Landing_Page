import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";

function App() {
  return (
    <main>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <Footer />
    </main>
  );
}

export default App;
