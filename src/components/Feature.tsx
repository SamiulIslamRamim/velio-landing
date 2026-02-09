import light from "../assets/images/Lightning.svg"
import calc from "../assets/images/Calculator.svg"
import sub from "../assets/images/Cardholder.svg"
import chokh from "../assets/images/chokh.svg";
import add from "../assets/images/add.svg";
import arrow from "../assets/images/arrow_outward.svg";
import leftArrow from "../assets/images/arrow_outward_left.svg";
import tDot from "../assets/images/more_vert.svg";
import coin from "../assets/images/Coins.svg";
import pig from "../assets/images/PiggyBank.svg";

const Feature = () => {
  return (
    <div className="feature">
        <div className="ft">Features</div>
        <div className="ftwhy">Why users love Velio</div>
        <div className="featgrid">
            <div className="grid1">
                <div className="fgrid">
                    <div className="fgridtop">
                        <div className="fgridicon">
                            <img src={light} alt="Lightning Icon" />
                        </div>
                        <div className="fgridtitle">
                            Fast and Easy
                        </div>
                        <div className="fgriddes">
                            Go live in minutes with guided onboarding and zero‑code widgets, or integrate via our clean, well‑documented API.
                        </div>
                    </div>
                    {/* down */}
                    <div className="fgriddown">
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
                </div>
                <div className="fgrid">
                    <div className="fgridtop">
                        <div className="fgridicon">
                            <img src={calc} alt="Calc" />
                        </div>
                        <div className="fgridtitle">
                            Financial Management
                        </div>
                        <div className="fgriddes">
                            A unified ledger, automated reconciliation, and export‑ready reports for accounting—so month‑end closes faster.
                        </div>
                    </div>
                    <div className="fgriddown">
                        <div className="pigbar">
                            <div className="pig">
                                <img src={pig} alt="pig" />
                            </div>
                            <div className="pigtext">
                                <div>Income</div>
                                <div className="pigam">$1,275</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>Target</div>
                                <div>75%</div>
                            </div>
                            <div></div>
                        </div>
                    </div>

                </div>
                <div className="fgrid">
                    <div className="fgridtop">
                        <div className="fgridicon">
                            <img src={sub} alt="Lightning Icon" />
                        </div>
                        <div className="fgridtitle">
                            Subscription Control
                        </div>
                        <div className="fgriddes">
                            Launch plans, trials, coupons, and proration in a few clicks. Reduce churn with automated dunning and smart retries.
                        </div>
                    </div>
                    <div className="fgriddown">
                        <div className="trans">
            <div className="transtitle">Transactions</div>
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
            <div className="grid2"></div>
        </div>
      
    </div>
  )
}

export default Feature
