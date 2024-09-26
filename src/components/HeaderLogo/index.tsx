import React from "react";

const HeaderLogo = () => {
  return (
    <div className="HeaderLogo">
      <img src="TMALLogo.png" alt="Logoish" />
      <style jsx>{`
        .HeaderLogo {
          justify-content: center;
          scale: 0.5;
          cursor: pointer;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderLogo;
