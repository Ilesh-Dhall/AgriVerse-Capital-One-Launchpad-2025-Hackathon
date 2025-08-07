import { cn } from "@/lib/utils";

const HeaderBox = ({
  children,
  bottom,
  onClick,
  className,
}: {
  children: React.ReactNode;
  bottom: "solid" | "dotted" | "none";
  onClick?: () => void;
  className?: string;
}) => (
  <div
    onClick={onClick}
    className={cn(
      "flex relative gap-2 items-center justify-center bg-white p-2 px-3 rounded-t-2xl border-2 border-green-900 border-b-0",
      className
    )}
  >
    {children}
    {bottom == "dotted" && (
      <div className="bg-white border-dashed border-1 border-green-900 absolute bottom-0 w-full translate-y-full"></div>
    )}
    {bottom == "none" && (
      <div className="bg-white h-1 absolute bottom-0 w-full translate-y-11/12"></div>
    )}
  </div>
);

export default HeaderBox;
