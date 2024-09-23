const SmallNav = () => {
  return (
    <>
      <div className="small-navigation-container">
        <p>T. M. A. L.</p>
      </div>
      <style jsx>{`
        .small-navigation-container {
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          width: 100%;
          background: #030422;
          color: white;
          padding: 1rem;
          font-family: "Baskervville SC", serif;
          font-weight: 400;
          font-style: normal;
          font-size: 3rem;
        }
      `}</style>
    </>
  );
};

export default SmallNav;
