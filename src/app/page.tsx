"use client";
import Link from "next/link";
import { LogoIcon } from "@/components/svg/Logo";
import { TwitterCircleIcon } from "@/components/svg/TwitterCircle";
import { DiscordCircleIcon } from "@/components/svg/DiscordCircle";
import { ArrowIcon } from "@/components/svg/Arrow";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";

export default function Home() {
  const [videoEnded, setVideoEnded] = useState(false);
  const { width } = useWindowSize();

  if (!width) {
    return <></>;
  }

  if (width < 768) {
    return (
      <>
        <main className="flex flex-col relative min-h-screen">
          <video
            src="/mobile-banner.mp4"
            className={`absolute object-cover w-full h-full`}
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
  }

  return (
    <main className="flex min-h-screen flex-col justify-between relative">
      <video
        src="/banner.mp4"
        className={`absolute object-cover w-full h-full ${
          videoEnded ? "hidden" : ""
        }`}
        autoPlay={true}
        muted={true}
        onTimeUpdate={e => {
          if (e.timeStamp > 4000) setVideoEnded(true);
        }}
        onEnded={() => setVideoEnded(true)}
      />
      <video
        src="/banner-loop.mp4"
        className={`absolute object-cover w-full h-full ${
          videoEnded ? "" : "hidden"
        }`}
        loop={true}
        autoPlay={true}
        muted={true}
      />
      <div className={"absolute inset-0 flex flex-col justify-between"}>
        <Header />
        <div className={"h-full md:pt-0 pt-12"}>
          <div
            className={
              "flex md:flex-row flex-col md:pl-10 xl:pr-8 px-6 justify-between h-full pb-8"
            }
          >
            <div
              className={
                "w-[400px] max-w-full flex flex-col md:justify-between items-center md:items-start"
              }
            >
              <Image
                src={"/logo.svg"}
                width={72}
                height={86}
                alt={"logo"}
                className={`md:w-[70px] md:h-[76px] w-[52] h-[56px]`}
              />
              <div
                className={
                  "md:text-[104px] xl:text-[124px] text-[72px] font-bold logo-shadow tracking-wider flex items-center pt-32 md:-mt-20 md:-rotate-90 title-shadow"
                }
              >
                RUBIK
              </div>
              <div />
            </div>
            <div
              className={`flex flex-col transition-all duration-700 md:-ml-6 ${
                videoEnded ? "opacity-100 pb-4" : "opacity-0 pb-0"
              }`}
            >
              <div
                className={
                  "uppercase text-[30px] font-bold text-[#DEDFE3] mt-auto text-center"
                }
              >
                <span className={"title-shadow"}>We democratize</span>
                <span
                  style={{ textShadow: "1px 1px 12px #E84834" }}
                  className={"inline-block mx-2 primary-shadow"}
                >
                  AI
                </span>
                <span className={"title-shadow"}>for ALL</span>
              </div>
            </div>
            <div className={`flex items-center`}>
              <div
                className={`w-[320px] xl:w-[350px] 2xl:w-[400px] transition-all duration-700 max-w-full ${
                  videoEnded ? "opacity-100 mt-0" : "opacity-0 mt-4"
                }`}
              >
                <div>
                  <div className="flex items-center gap-4"></div>
                  <div
                    className={
                      "2xl:text-[36px] xl:text-[30px] text-[22px] font-bold title-shadow"
                    }
                  >
                    <div>THE WORLD`S FIRST</div>
                    <div>MODULAR BLOCKCHAIN</div>
                    <div>FOR GENERATIVE AI</div>
                  </div>
                </div>

                <div className={"flex items-start ml-auto gap-2 mt-8"}>
                  <ArrowIcon className={"w-[28px] h-[28px]"} />
                  <Link
                    href={""}
                    target={"_blank"}
                    className={
                      "text-[#E84834] 2xl:text-[28px] xl:text-[24px] text-[18px] underline -mt-2"
                    }
                  >
                    READ WHITEPAPER
                    <div className={"2xl:text-[20px] xl:text-[18px]"}>
                      (ALPHA VERSION)
                    </div>
                  </Link>
                </div>
                <div className={"flex items-center mt-6 gap-6"}>
                  <TwitterCircleIcon className={"w-[42px] h-[64px]"} />
                  <DiscordCircleIcon className={"w-[42px] h-[64px]"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
