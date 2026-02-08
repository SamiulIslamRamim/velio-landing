import user3 from "../assets/images/user3.svg";
import tri from "../assets/images/tri.svg";
import chokh from "../assets/images/chokh.svg";
const wallet = () => {
  return (
    <div className="wallet">

      <div className="leftwal">
        <div className="velwal">Velio Wallet</div>
        <div className="walpay">Seamless payments with Velio Wallet</div>
        <div className="waldes">
          Give customers a faster, safer way to pay. Velio Wallet supports
          cards, bank transfers, and popular local methods in a single
          experience—online, in‑app, and in‑store. Reduce cart abandonment with
          one‑click checkout, stored credentials, and tokenized payments that
          keep sensitive data secure.
        </div>
        <button className="walbtn">Try Velio Wallet</button>
      </div>

      <div className="rightwal">
      <div className="screen">
        <div className="topcon">
          <div className="usnum">
            <img src={user3} alt="User3" className="usnumimg"/>
            <div className="usnuminfo">
              <div className="num">*** *** 014</div>
              <div className="numopt">
              <div>Change</div>
              <img src={tri} alt="hoga" className="tri"/>
              </div>
            </div>
          </div>
          <div className="totbalance">
            <div className="baltex">Total Balance</div>
            <div className="balnum">
              <div>$12,773.00</div>
              <img src={chokh} alt="chokh" className="chok" />
            </div>
            <div className="balicon">
              <div>Add</div>
              <div>Send</div>
              <div>Receive</div>
              <div>More</div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="trans"></div>
      </div>
      </div>
    </div>
  );
};

export default wallet;
