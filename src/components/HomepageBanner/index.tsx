const HomepageBanner = () => {
  return (
    <>
      <div className="homepage-banner-container">
        <h2>Welcome to T.M.A.L.</h2>
      </div>
      <style jsx>{`
        .homepage-banner-container {
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

export default HomepageBanner;
