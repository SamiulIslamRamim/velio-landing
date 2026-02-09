import user3 from "../assets/images/user3.svg";
import tri from "../assets/images/tri.svg";
import chokh from "../assets/images/chokh.svg";
import add from "../assets/images/add.svg";
import arrow from "../assets/images/arrow_outward.svg";
import leftArrow from "../assets/images/arrow_outward_left.svg";
import tDot from "../assets/images/more_vert.svg";
import coin from "../assets/images/Coins.svg";
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
              <img src={user3} alt="User3" className="usnumimg" />
              <div className="usnuminfo">
                <div className="num">*** *** 014</div>
                <div className="numopt">
                  <div>Change</div>
                  <img src={tri} alt="hoga" className="tri" />
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
                <div className="balopt">
                  <div className="opt" id="opt1">
                    <img src={add} alt="Add" />
                  </div>
                  <div>Add</div>
                </div>
                <div className="balopt">
                  <div className="opt">
                    <img src={arrow} alt="Send" />
                  </div>
                  <div>Send</div>
                </div>
                <div className="balopt">
                  <div className="opt">
                    <img src={leftArrow} alt="Receive" />
                  </div>
                  <div>Receive</div>
                </div>
                <div className="balopt">
                  <div className="opt">
                    <img src={tDot} alt="More" />
                  </div>
                  <div>More</div>
                </div>
              </div>
            </div>
          </div>

          <div className="trans">
            <div className="transtitle">Transactions</div>

            {/* fix: */}
            <div className="transitem">
              <div className="coin">
                <img src={coin} alt="" />
              </div>
              <div className="transfix">
                <div className="truncate">
                  <div className="transname">Drip Subscription</div>
                  <div className="transdate">02 Jan 2025</div>
                </div>
                <div className="transamount">$7,99</div>
              </div>
            </div>
            <div className="transitem">
              <div className="coin">
                <img src={coin} alt="" />
              </div>
              <div className="transfix">
                <div className="truncate">
                  <div className="transname">Fable Payment</div>
                  <div className="transdate">02 Jan 2025</div>
                </div>
                <div className="transamount">$14,99</div>
              </div>
            </div>
            <div className="transitem">
              <div className="coin">
                <img src={coin} alt="" />
              </div>
              <div className="transfix">
                <div className="truncate">
                  <div className="transname">Robokruz</div>
                  <div className="transdate">02 Jan 2025</div>
                </div>
                <div className="transamount">$75,00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default wallet;
