import { ReactNode } from "react";

interface LayoutColumnsProps {
  children: ReactNode;
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
}

const LayoutColumns = ({
  children,
  alignItems = "center",
}: LayoutColumnsProps) => {
  return (
    <>
      <div className="layout-columns">{children}</div>

      <style jsx>{`
        .layout-columns {
          display: flex;
          align-items: ${alignItems};
        }
      `}</style>
    </>
  );
};

interface LayoutFooterProps {
  children: ReactNode;
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
}
const LayoutFooter = ({
  children,
  alignItems = "center",
}: LayoutFooterProps) => {
  return (
    <>
      <div className="layout-footer">{children}</div>

      <style jsx>{`
        .layout-footer {
          display: flex;
          text-align: right;
          flex-grow: 1;
          margin: auto;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default Object.assign(
  {},
  { Columns: LayoutColumns },
  { Footer: LayoutFooter }
);
