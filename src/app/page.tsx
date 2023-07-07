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

  if (width < 768) {
    return (
      <>
        <main
          className="flex flex-col relative"
          style={{
            backgroundImage: `url(/mobile-bg.png)`
          }}
        >
          <Header />
          <div className={"flex flex-col items-center"}>
            <div className="flex items-center gap-4 mb-4 mt-8">
              <LogoIcon className={"w-[42px] h-[50px]"} />
              <div className={"text-[48px] font-bold title-shadow"}>RUBIK</div>
            </div>
            <div className={"uppercase title-shadow text-[20px]"}>
              <div>THE World`s FIRST </div>
              <div>MODULAR BLOCKCHAIN </div>
              <div>FOR Generative ai</div>
            </div>
            <div>
              <Image
                src={"/mobile-banner.png"}
                alt={"banner"}
                width={400}
                height={400}
                className={"-mt-12"}
              />
            </div>
            <div
              style={{ textShadow: "1px 1px 1px blue" }}
              className={
                "uppercase text-[22px] font-bold text-[#DEDFE3] text-center -mt-16"
              }
            >
              We democratize
            </div>
            <div
              style={{ textShadow: "1px 1px 1px blue" }}
              className={
                "uppercase text-[22px] font-bold text-[#DEDFE3] text-center"
              }
            >
              AI for ALL
            </div>

            <div className={"flex items-start gap-2 mt-8"}>
              <ArrowIcon className={"w-[18px] h-[20px]"} />
              <Link
                href={""}
                target={"_blank"}
                className={"text-[#FF9077] text-[18px] underline -mt-2"}
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
          <Footer />
        </main>
      </>
    );
  }

  return (
    <main className="flex min-h-screen flex-col justify-between relative">
      <video
        src="/banner.mp4"
        className={`absolute w-full h-full ${videoEnded ? "hidden" : ""}`}
        autoPlay={true}
        muted={true}
        onTimeUpdate={e => {
          if (e.timeStamp > 4000) setVideoEnded(true);
        }}
        onEnded={() => setVideoEnded(true)}
      />
      <video
        src="/banner-loop.mp4"
        className={`absolute w-full h-full ${videoEnded ? "" : "hidden"}`}
        loop={true}
        autoPlay={true}
        muted={true}
      />
      <div className={"absolute inset-0 flex flex-col justify-between"}>
        <Header />
        <div className={"h-full md:pt-0 pt-12"}>
          <div
            className={
              "flex md:flex-row flex-col md:pl-10 md:pr-24 px-6 justify-between h-full pb-8"
            }
          >
            <div
              className={
                "w-[460px] max-w-full flex flex-col md:justify-between items-center md:items-start"
              }
            >
              <Image
                src={"/logo.svg"}
                width={82}
                height={96}
                alt={"logo"}
                className={`md:w-[82px] md:h-[96px] w-[52] h-[56px]`}
              />
              <div
                className={
                  "md:text-[134px] text-[72px] font-bold logo-shadow tracking-wider flex items-center md:-mt-20 md:-rotate-90"
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
                style={{ textShadow: "1px 1px 1px blue" }}
                className={
                  "uppercase text-[30px] font-bold text-[#DEDFE3] mt-auto text-center pb-4"
                }
              >
                We democratize AI for ALL
              </div>
            </div>
            <div className={`flex items-center`}>
              <div
                className={`w-[400px] transition-all duration-700 max-w-full ${
                  videoEnded ? "opacity-100 mt-0" : "opacity-0 mt-4"
                }`}
              >
                <div>
                  <div className="flex items-center gap-4"></div>
                  <div style={{ textShadow: "1px 1px 1px blue" }}>
                    <div className={"md:text-[40px] text-[22px] font-bold"}>
                      <div>THE WORLD`S FIRST MODULAR</div>
                      <div>BLOCKCHAIN FOR GENERATIVE AI</div>
                    </div>
                  </div>
                </div>

                <div className={"flex items-start ml-auto gap-2 mt-8"}>
                  <ArrowIcon className={"w-[28px] h-[28px]"} />
                  <Link
                    href={""}
                    target={"_blank"}
                    className={
                      "text-[#FF9077] md:text-[32px] text-[18px] underline -mt-2"
                    }
                  >
                    READ WHITEPAPER
                    <div className={"text-[26px]"}>(ALPHA VERSION)</div>
                  </Link>
                </div>
                <div className={"flex items-center mt-6 gap-6"}>
                  <TwitterCircleIcon className={"w-[68px] h-[68px]"} />
                  <DiscordCircleIcon className={"w-[68px] h-[68px]"} />
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
