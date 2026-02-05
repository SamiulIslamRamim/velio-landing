import logo1 from "../../assets/images/Logo.svg";
import logo2 from "../../assets/images/Logo01.svg";
import logo3 from "../../assets/images/Logo02.svg";
import logo4 from "../../assets/images/Logo03.svg";
import logo5 from "../../assets/images/Logo04.svg";
import logo6 from "../../assets/images/Logo05.svg";

const BrandBar = () => {
  return (
    <div className="partner">
      <div className="partinfo">
        Trusted by 8,000+ merchants to grow revenue and manage funds
      </div>
      
      <div className="partlogos">

        <div className="logoslide" id="fist" >
          <img src={logo1} alt="Logo" />
          <img src={logo2} alt="Logo" />
          <img src={logo3} alt="Logo" />
          <img src={logo4} alt="Logo" />
          <img src={logo5} alt="Logo" />
          <img src={logo6} alt="Logo" />
        </div>
        {/* another */}
        <div className="logoslide" id= "second" >
          <img src={logo1} alt="Logo" />
          <img src={logo2} alt="Logo" />
          <img src={logo3} alt="Logo" />
          <img src={logo4} alt="Logo" />
          <img src={logo5} alt="Logo" />
          <img src={logo6} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default BrandBar;
