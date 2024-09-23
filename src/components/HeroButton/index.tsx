import { ReactNode } from "react";

interface HeroButtonProps extends React.HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
}

const HeroButton = ({ children, ...rest }: HeroButtonProps) => {
  return (
    <>
      <a className="hero-button" {...rest}>
        {children}
      </a>

      <style jsx>{`
        .hero-button {
          color: black;
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          padding: 2rem;
          font-family: "Baskervville SC", serif;
          font-size: 3rem;
          font-weight: 400;
          border: 2px solid black;
          font-style: bold;
          border-radius: 12px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default HeroButton;
