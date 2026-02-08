import logo from "../../assets/images/Vector.svg";
const Navbar = () => {
  return (
    <div className="nav">

      <div className="veli">
        <div className="logo">
            <img src={logo}></img>
        </div>
        <div className="velLog">Velio</div>
      </div>

      <div className="opt">
        <div>Home</div>
        <div>About</div>
        <div>Wallet</div>
        <div>Platform</div>
        <div>Features</div>
        <div>FAQ</div>
      </div>

      <button className="strt">
        <p className="bttext">Get started (free)</p>
      </button>

    </div>
  );
};

export default Navbar;
