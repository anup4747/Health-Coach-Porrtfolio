import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Testimonies from "./Components/Testimonies";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Hero />

      <hr className="border-t-2 border-gray-400 my-8"></hr>

      <Services />

      <hr className="border-t-2 border-gray-400 my-8"></hr>

      <Testimonies/>

      <hr className="border-t-2 border-gray-400 my-8"></hr>

      <Contact />
    </div>
  );
}

export default App;
