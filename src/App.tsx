import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandBar from "./components/BrandBar/BrandBar";
import About from "./components/About";
import Wallet from "./components/Wallet";
import Feature from "./components/Feature";
import Faq from "./components/faq";
import Testimoni from "./components/Testimoni";
import Banner from "./components/banner";
import Footer from "./components/Footer";
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
      <Faq />
      <Testimoni />
      <Banner />
      <Footer />

    </>
  );
}

export default App;
