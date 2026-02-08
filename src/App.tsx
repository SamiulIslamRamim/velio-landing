import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandBar from "./components/BrandBar/BrandBar";
import About from "./components/About";
import Wallet from "./components/Wallet";
function App() {
  return (
    <><div>
    <div className="grid-container">
      <Navbar />
      <Hero />
      <BrandBar />
      </div>
      <About />
      <Wallet />
      <h1>hello</h1>
    </div>
    </>
  );
}

export default App;
