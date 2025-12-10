import Image from "next/image";
import Tooltip from "@/components/atoms/Tooltip";
import FeatureSlider from "@/components/organisms/FeatureSlider";
import CardSlider from "../CardSlider";
import { profiles, features } from "./data";

export default function Hero() {
  return (
    <div className="py-4 px-4 lg:px-2 xl:px-0">
      <div
        id="top-content"
        className="flex flex-col lg:flex-row gap-4 mt-[80px]"
      >
        <div id="marketing-text" className="pb-4 font-black">
          <Tooltip
            bgColor="bg-[#8BC4FF]"
            content={<div className="text-white">풀타임, 파트타임</div>}
            arrowPosition="bottom-left"
          >
            <div id="title" className="text-[36px] leading-[130%]">
              최고의 실력을 가진 외국인 인재를 찾고 계신가요?
            </div>
          </Tooltip>
          <div
            id="sub-title"
            className="lg:w-[260px] mt-[20px] text-[18px] text-[#FFFFFFCC]"
          >
            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
          </div>
          {/* Question => Desktop Only */}
          <div
            id="marketing-question"
            className="hidden lg:block mt-[20px] underline"
          >
            개발자가 필요하신가요?
          </div>
          {/* Achievements => Desktop Only */}
          <div id="achievements" className="hidden lg:flex gap-4 mt-[72px]">
            <div className="w-[140px]">
              <div className="inline-block border-t font-black pt-2">
                평균 월 120만원
              </div>
              <div className="mt-2 text-[#FFFFFFCC] text-sm">
                임금을 해당 국가를 기준으로 계산합니다.
              </div>
            </div>

            <div className="w-[140px]">
              <div className="inline-block border-t font-black pt-2">
                최대 3회 인력교체
              </div>
              <div className="mt-2 text-[#FFFFFFCC] text-sm">
                막상 채용해보니 맞지 않아도 걱정하지 마세요.
              </div>
            </div>

            <div className="w-[140px]">
              <div className="inline-block border-t font-black pt-2">
                평균 3일, 최대 10일
              </div>
              <div className="mt-2 text-[#FFFFFFCC] text-sm">
                급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
              </div>
            </div>
          </div>
        </div>
        <div id="slide-cards" className="lg:max-w-[50%] mt-[80px] lg:mt-0">
          <CardSlider profiles={profiles} />
        </div>
      </div>
      {/* Features Slide => Desktop Only */}
      <div id="slide-items" className="hidden lg:block mt-[72px] mb-[64px]">
        <FeatureSlider items={features} />
      </div>

      {/* SERVICES section => Mobile Only */}
      <div id="services" className="lg:hidden mt-[30px]">
        <div id="items" className="flex flex-wrap gap-4">
          <div className="w-[120px] flex items-center gap-2">
            <Image
              src="/images/checkbox.png"
              alt="Item"
              width={20}
              height={20}
              className="h-[20px]"
            />{" "}
            <span>한국어 능력</span>
          </div>
          <div className="w-[120px] flex items-center gap-2">
            <Image
              src="/images/checkbox.png"
              alt="Item"
              width={20}
              height={20}
              className="h-[20px]"
            />{" "}
            <span>업무 수행 능력</span>
          </div>
          <div className="w-[120px] flex items-center gap-2">
            <Image
              src="/images/checkbox.png"
              alt="Item"
              width={20}
              height={20}
              className="h-[20px]"
            />{" "}
            <span>겸업 여부</span>
          </div>
          <div className="w-[120px] flex items-center gap-2">
            <Image
              src="/images/checkbox.png"
              alt="Item"
              width={20}
              height={20}
              className="h-[20px]"
            />{" "}
            <span>평판 조회</span>
          </div>
        </div>
        <div id="question" className="mt-[20px] text-[#FBFF23] underline">
          개발자가 필요하신가요?
        </div>
      </div>
    </div>
  );
}
