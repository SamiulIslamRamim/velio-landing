import arrow from "../assets/images/arrow_outward.svg"

const Faq = () => {
  return (
    <div className="faq">
      <div className="faqlog">
        <div>FAQ</div>
      </div>
      <div className="faqask">Asked by Others</div>
      <div className="qs">
        
        <div >
            <div className="ques">
                <div>Velio Wallet free to use?</div>
                <img src={arrow} alt="" />
            </div>
            {/* <div className="ans">You can start free. We charge a simple per‑transaction fee once you go live. No setup or monthly minimums.</div> */}
        </div>

        <div className="ques">
            <div> How secure is Velio for sending and receiving payments?</div>
            <img src={arrow} alt="" />
        </div>
        <div className="ques">
            <div> What is Velio and how does it work?</div>
            <img src={arrow} alt="" />
        </div>
        <div className="ques">
            <div>Can merchants use Velio for subscriptions and payouts?</div>
            <img src={arrow} alt="" />
        </div>
        <div className="ques">
            <div> How do I get started with Velio for my company?</div>
            <img src={arrow} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Faq;
