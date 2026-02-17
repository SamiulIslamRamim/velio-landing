const Banner = () => {
  const cells = Array.from({ length: 100 });
  return (
    <div className="banner">
      <div className="grid-background">
        {/* <div className="grid-lines"></div> */}

        {cells.map((_, index) => (
          <div key={index} className="grid-cell"></div>
        ))}
      </div>
      <div className="light"></div>

      <div className="bantext">
        Velio helps over 8,000 merchants increase revenue,
        <br />
        improve approval rates, and manage funds with clarity.
      </div>
      <div className="banbtn">
        <div className="str">
          <div> Start free </div>
        </div>
        <div className="sale">
          <div>Contact sales</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
