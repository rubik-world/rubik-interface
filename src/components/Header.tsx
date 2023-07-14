import Link from "next/link";

export const Header = ({ className }: { className?: string }) => {
  return (
    <div className={`transition-all duration-700 ${className}`}>
      <div
        className={`bg-[#3248F3] h-[30px] border-2 border-[#1a1ec0] border-b-4`}
      />
      <header
        className={
          "header -mt-[28px] relative font-semibold md:text-[20px] text-xs border-b-4 border-b-[#1a1ec0]"
        }
      >
        <div className="header-triangle-left" />
        <div className={"flex gap-8"}>
          <Link href={""}>Twitter</Link>
          <Link href={""}>Vision Paper</Link>
          <Link href={""}>DISCORD</Link>
        </div>
        <div className="header-triangle-right" />
      </header>
    </div>
  );
};
