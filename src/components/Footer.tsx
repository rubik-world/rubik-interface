import Typewriter from "typewriter-effect";
export const Footer = () => {
  return (
    <div className={"w-full h-[69px]"}>
      <div
        className={
          "bg-[#3248F3] h-[30px] absolute flex items-center bottom-0 w-full text-gray-400 px-6 md:text-base text-xs border-2 border-[#1a1ec0]"
        }
      >
        @2023 RUBIK
      </div>
      <footer
        className={
          "footer -mt-[30px] absolute bottom-0 font-semibold md:text-[20px] text-sm left-0 right-0 border-t-4 border-[#1a1ec0] mb-2"
        }
      >
        <div className="footer-triangle-left" />
        <div className={"flex w-[140px]"}>
          <div className={"mr-2"}>{"//"}</div>
          <Typewriter
            options={{
              loop: true,
              delay: 40,
              deleteSpeed: 5
            }}
            onInit={typewriter => {
              typewriter
                .typeString(" Building ...")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div className="footer-triangle-right" />
      </footer>
    </div>
  );
};
