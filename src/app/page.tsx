"use client";
import Link from "next/link";
import { LogoIcon } from "@/components/svg/Logo";
import { TwitterCircleIcon } from "@/components/svg/TwitterCircle";
import { DiscordCircleIcon } from "@/components/svg/DiscordCircle";
import { ArrowIcon } from "@/components/svg/Arrow";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <main className="flex min-h-screen flex-col justify-between relative">
      <video
        src="/banner.mp4"
        className={`absolute w-full h-full ${videoEnded ? "hidden" : ""}`}
        autoPlay={true}
        muted={true}
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
        <div className={"h-full"}>
          <div className="flex px-10 justify-between h-full pb-8">
            <div
              className={"w-[460px] max-w-full flex flex-col justify-between"}
            >
              <LogoIcon />
              <div
                className={
                  "md:text-[134px] text-[52px] font-bold logo-shadow tracking-wider flex items-center -mt-20 -rotate-90"
                }
              >
                RUBIK
              </div>
              <div />
            </div>
            <div
              className={`flex flex-col transition-all duration-700 -ml-6 ${
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
                  <ArrowIcon />
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
