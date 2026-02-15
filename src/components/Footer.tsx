import logo from "../assets/images/Vector.svg";
import youtube from "../assets/images/YoutubeLogo.svg";
import linkedin from "../assets/images/LinkedinLogo.svg";
import insta from "../assets/images/InstagramLogo.svg";
import git from "../assets/images/GithubLogo.svg";
import x from "../assets/images/XLogo.svg";

const Footer = () => {
  return (
    <div className="foot">
      <div className="foot1">
        <div className="veli">
          <div className="logo">
            <img src={logo}></img>
          </div>
          <div className="velLog">Velio</div>
        </div>
        <div className="veltext">One Platform for every business</div>
        <div className="images">
          <img src={linkedin} alt="" />
          <img src={insta} alt="" />
          <img src={git} alt="" />
          <img src={x} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>

      <div className="foot2">
        <div>
          <div className="f2t">Company</div>
          About Us <br /> Product <br /> Benefits
        </div>
        <div>
          <div className="f2t">Products</div>
          Velio Wallet <br /> Velio Merchant <br /> Corporate
        </div>
        <div>
          <div className="f2t">Learn More</div>
          Blog <br /> FAQ <br /> Support
        </div>
        <div>
          <div className="f2t">Others</div>
          Privacy Policy <br /> Terms & Condition

        </div>
      </div>

      <div className="copy">© 2025 Velio, Inc.</div>
    </div>
  );
};

export default Footer;
