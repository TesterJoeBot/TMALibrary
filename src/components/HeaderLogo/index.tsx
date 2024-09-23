import React from "react";

const HeaderLogo = () => {
  return (
    <div className="HeaderLogo">
      <img src="tmallogo.jpg" alt="Logoish" />
      <style jsx>{`
        .HeaderLogo {
          justify-content: center;
          scale: 0.5;
          cursor: pointer;
          img {
            border-radius: 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderLogo;
