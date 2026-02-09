import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandBar from "./components/BrandBar/BrandBar";
import About from "./components/About";
import Wallet from "./components/Wallet";
import Feature from "./components/Feature";
function App() {
  return (
    <>
    <div className="grid-container">
      <Navbar />
      <Hero />
      <BrandBar />
      </div>

      <About />
      <Wallet />
      <Feature />

      <h1>hello</h1>
    </>
  );
}

export default App;
