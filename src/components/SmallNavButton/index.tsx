import { ReactNode } from "react";

interface SmallNavButtonProps extends React.HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
}

const SmallNavButton = ({ children, ...rest }: SmallNavButtonProps) => {
  return (
    <>
      <a className="small-nav-button" {...rest}>
        {children}
      </a>

      <style jsx>{`
        .small-nav-button {
          color: black;
          display: flex;
          flex-direction: column;
          text-align: center;
          width: 100%;
          justify-content: center;
          padding: 0.2rem;
          font-family: "Baskervville SC", serif;
          font-size: 3rem;
          font-weight: 400;
          border: 2px solid black;
          font-style: bold;
          border-radius: 12px;
          cursor: pointer;
          background: white;
        }
      `}</style>
    </>
  );
};

export default SmallNavButton;
