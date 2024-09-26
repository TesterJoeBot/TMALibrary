import HeaderLogo from "../HeaderLogo";

const HeroBanner = () => {
  return (
    <>
      <div className="hero-banner-container">
        <HeaderLogo />
      </div>
      <style jsx>{`
        .hero-banner-container {
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          width: 100%;
          background: #021639;
          color: white;
          padding: 2rem;
          height: 45rem;
          font-family: "Baskervville SC", serif;
          font-weight: 400;
          font-style: normal;
          font-size: 3rem;
        }
      `}</style>
    </>
  );
};

export default HeroBanner;
