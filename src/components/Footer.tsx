export const Footer = () => {
  return (
    <div className={"w-full h-[69px]"}>
      <div
        className={
          "bg-[#3248F3] h-[30px] absolute leading-[30px] bottom-0 w-full text-gray-400 px-6 md:text-base text-xs"
        }
      >
        @2023 RUBIK
      </div>
      <footer
        className={
          "footer -mt-[30px] absolute bottom-0 font-semibold md:text-[20px] text-sm left-0 right-0"
        }
      >
        <div className="footer-triangle-left" />
        <div className={"flex gap-8"}>{"//"}Building...</div>
        <div className="footer-triangle-right" />
      </footer>
    </div>
  );
};
