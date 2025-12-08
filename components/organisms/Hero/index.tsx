import Tooltip from "@/components/atoms/Tooltip";

export default function Hero() {
  return (
    <div className="py-4 px-4 lg:px-2 xl:px-0">
      <div id="top-content">
        <div id="marketing-text" className="pb-4 font-black">
          <Tooltip
            bgColor="bg-[#8BC4FF]"
            marginTop="mt-[80px]"
            content={<div className="text-white">풀타임, 파트타임</div>}
            arrowPosition="bottom-left"
          >
            <div id="title" className="text-[36px] leading-[130%]">
              최고의 실력을 가진 외국인 인재를 찾고 계신가요?
            </div>
          </Tooltip>
          <div id="sub-title" className="text-[18px] text-[#FFFFFFCC]">
            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
          </div>
          {/* Question => Desktop Only */}
          <div id="marketing-question" className="hidden lg:block underline">
            개발자가 필요하신가요?
          </div>
        </div>
        <div id="slide-cards"></div>
      </div>
      <div id="slide-items"></div>

      {/* SERVICES section => Mobile Only */}
      <div id="services">
        <div id="items"></div>
        <div id="question"></div>
      </div>
    </div>
  );
}
