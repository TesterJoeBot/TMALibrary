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

export default Object.assign({}, { Columns: LayoutColumns });
