import { LogoIcon } from "@/components/svg/Logo";
import { ArrowIcon } from "@/components/svg/Arrow";
import Link from "next/link";
import { TwitterCircleIcon } from "@/components/svg/TwitterCircle";
import { DiscordCircleIcon } from "@/components/svg/DiscordCircle";

export const MobileHome = () => {
  return (
    <>
      <main className="flex flex-col relative min-h-screen">
        <video
          src="/mobile-banner.mp4"
          className={`absolute object-cover w-full h-full -mt-12`}
          loop={true}
          autoPlay={true}
          muted={true}
        />
        <div className={"flex flex-col items-center absolute w-full"}>
          <div className="flex items-center gap-4 mb-4 mt-8">
            <LogoIcon className={"w-[42px] h-[50px]"} />
            <div className={"text-[48px] font-bold title-shadow logo-shadow"}>
              RUBIK
            </div>
          </div>
          <div
            className={
              "uppercase title-shadow text-[22px] font-bold text-center"
            }
          >
            <div>THE World`s FIRST MODULAR</div>
            <div>BLOCKCHAIN FOR Generative ai</div>
          </div>
          <div className={"h-[360px]"} />
          <div
            className={
              "uppercase text-[24px] font-bold text-[#DEDFE3] text-center -mt-16 title-shadow"
            }
          >
            We democratize
          </div>
          <div
            className={
              "uppercase text-[24px] font-bold text-[#DEDFE3] text-center title-shadow"
            }
          >
            <span
              className={"primary-shadow mr-2"}
              style={{ textShadow: "1px 1px 12px #E84834" }}
            >
              AI
            </span>
            for ALL
          </div>

          <div className={"flex items-start gap-2 mt-8"}>
            <ArrowIcon className={"w-[18px] h-[20px]"} />
            <Link
              href={""}
              target={"_blank"}
              className={"text-[#E84834] text-[18px] underline -mt-2"}
            >
              READ WHITEPAPER
              <div className={"text-[14px]"}>(ALPHA VERSION)</div>
            </Link>
          </div>
          <div className={"flex items-center mt-6 gap-3"}>
            <TwitterCircleIcon className={"w-[42px] h-[42px]"} />
            <DiscordCircleIcon className={"w-[42px] h-[42px]"} />
          </div>
        </div>
      </main>
    </>
  );
};
