import user1 from "../assets/images/user1.svg";
import user2 from "../assets/images/user2.svg";
import user3 from "../assets/images/user3.svg";


const About = () => {
  return (
    <div className="about">
      <div className="about1">
        <div className="what">What is Velio</div>
        <div className="abvelio">
          Innovative payment solutions with <br /> <span className="and">Simplicity</span>, <span className="and">Security</span>, and <span className="and">Scalability</span> 
        </div>
      </div>
      <div className="about2">
        <div className="leftdesc">
          <div className="avatar">
            <div>
              <img src={user1} alt="user1" style={{marginLeft: 0}}/>
            </div>
            <div>
              <img src={user2} alt="user2" />
            </div>
            <div>
              <img src={user3} alt="user3" />
            </div>
          </div>
          <div className="usercount">
            <div className="mu">2M+ Users</div>
            <div className="au">around the world</div>
          </div>
        </div>
        <div className="desc">
          Velio unifies everything you need to take payments, send payouts, and
          manage revenue across channels. From instant checkout and QR payments
          to automated subscriptions and reconciled payouts, Velio keeps your
          money moving and your team in control. Built with end‑to‑end
          encryption, rigorous compliance, and a modern API, Velio scales
          alongside your business without adding complexity.
        </div>
      </div>
    </div>
  );
};

export default About;
