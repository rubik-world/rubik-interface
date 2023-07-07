import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <div className={"bg-[#3248F3] h-[30px]"} />
      <header
        className={
          "header -mt-[30px] relative font-semibold md:text-[20px] text-xs"
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
