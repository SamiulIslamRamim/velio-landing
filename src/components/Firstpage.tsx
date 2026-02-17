import BrandBar from "./BrandBar/BrandBar";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

const Firstpage = () => {
      const cells = Array.from({ length: 90 });
  return (
    <div className="firstc">
      <div className="grid-background">
        {cells.map((_, index) => (
          <div key={index} className="grid-cell"></div>
        ))}
      </div>
      <Navbar />
      <Hero />
      <BrandBar />
    </div>
  )
}

export default Firstpage
