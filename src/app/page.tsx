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
import { MobileHome } from "@/components/MobileHome";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const { width } = useWindowSize();

  if (!width) {
    return <></>;
  }

  if (width < 768) {
    return <MobileHome />;
  }

  return (
    <main className="flex min-h-screen flex-col justify-between relative">
      <video
        src="/loading.mp4"
        className={`absolute object-cover w-full h-full z-30 ${
          loaded ? "hidden" : ""
        }`}
        loop={true}
        autoPlay={true}
        muted={true}
      />
      <video
        src="/banner.mp4"
        className={`absolute object-cover w-full h-full z-20 ${
          videoEnded ? "hidden" : ""
        }`}
        autoPlay={true}
        muted={true}
        onLoadedData={() => {
          setLoaded(true);
        }}
        onTimeUpdate={e => {
          if (e.timeStamp > 5000) setVideoEnded(true);
        }}
        onEnded={() => setVideoEnded(true)}
      />
      <video
        src="/banner-loop.mp4"
        className={`absolute object-cover w-full h-full z-20 ${
          videoEnded ? "" : "hidden"
        }`}
        loop={true}
        autoPlay={true}
        muted={true}
      />

      <div className={"absolute inset-0 flex flex-col justify-between z-40"}>
        <Header className={`${videoEnded ? "opacity-100" : "opacity-0"}`} />
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
                className={`md:w-[70px] md:h-[76px] w-[52] h-[56px] transition-all duration-700 ${
                  videoEnded ? "opacity-100 mt-0" : "opacity-0 mt-4"
                }`}
              />
              <div
                className={`md:text-[104px] xl:text-[124px] text-[72px] font-bold logo-shadow tracking-wider flex items-center pt-32 md:-mt-20 md:-rotate-90 title-shadow transition-all duration-700 ${
                  videoEnded ? "opacity-100 mt-0" : "opacity-0 mt-4"
                }`}
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
        <Footer className={`${videoEnded ? "opacity-100" : "opacity-0"}`} />
      </div>
    </main>
  );
}
