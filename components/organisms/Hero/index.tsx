import Tooltip from "@/components/atoms/Tooltip";
import CardSlider from "../CardSlider";
import { ProfileCardProps } from "../ProfileCard";

export default function Hero() {
  const profiles: ProfileCardProps[] = [
    {
      img: "/images/avatar.png",
      name: "Arjun Mehta",
      country: {
        name: "India",
        flagImg: "/images/colombia.png",
      },
      role: "마케팅",
      experience: "2y+",
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
      monthlyIncome: 300,
    },
    {
      img: "/images/avatar.png",
      name: "Abhishek Gupta",
      country: {
        name: "India",
        flagImg: "/images/colombia.png",
      },
      role: "디자인",
      experience: "3y+",
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
      monthlyIncome: 200,
    },
    {
      img: "/images/avatar.png",
      name: "Priya Sharma",
      country: {
        name: "India",
        flagImg: "/images/colombia.png",
      },
      role: "개발자",
      experience: "4y+",
      skills: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
      monthlyIncome: 270,
    },
  ];
  return (
    <div className="py-4 px-4 lg:px-2 xl:px-0">
      <div id="top-content" className="flex flex-col lg:flex-row gap-4 mt-[80px]">
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
          <div id="sub-title" className="lg:w-[260px] mt-[20px] text-[18px] text-[#FFFFFFCC]">
            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
          </div>
          {/* Question => Desktop Only */}
          <div id="marketing-question" className="hidden lg:block mt-[20px] underline">
            개발자가 필요하신가요?
          </div>
        </div>
        <div id="slide-cards" className="lg:max-w-[50%] mt-[80px] lg:mt-0">
          <CardSlider profiles={profiles} />
        </div>
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
