import Image from "next/image";
import ServiceCard from "@/components/molecules/ServiceCard";
import { services } from "./data";

export default function Footer() {
  return (
    <div className="py-12 px-4 lg:px-2 xl:px-0">
      <div id="footer-top" className="flex flex-col lg:flex-row gap-4 mb-8">
        <div id="company" className="flex flex-col gap-2 font-black">
          <Image
            src="/images/company-logo-footer.png"
            alt="Company Logo"
            height={34}
            width={187}
          />
          <div className="text-sm">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </div>
          <div className="text-[13px]">010-0000-0000</div>
          <div className="text-[13px]">aaaaa@naver.com</div>
        </div>
        <div id="service-list" className="flex flex-wrap gap-4">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
      <div id="footer-bottom" className="flex flex-col lg:flex-row gap-8">
        <div id="company-name" className="flex flex-col gap-1">
          <div className="text-xs font-black">상호명</div>
          <div className="text-[13px]">하이퍼하이어</div>
          <div className="text-[13px] font-bold">
            Hyperhire India Private Limited
          </div>
        </div>
        <div id="company-ceo" className="flex flex-col gap-1">
          <div className="text-xs font-black">대표 CEO</div>
          <div className="text-[13px]">김주현</div>
          <div className="text-[13px] font-bold">Juhyun Kim</div>
        </div>
        <div id="company-brn" className="flex flex-col gap-1">
          <div className="text-xs font-black">사업자등록번호 CIN</div>
          <div className="text-[13px]">427-86-01187</div>
          <div className="text-[13px] font-bold">U74110DL2016PTC290812</div>
        </div>
        <div id="company-address" className="flex flex-col gap-1">
          <div className="text-xs font-black">주소 ADDRESS</div>
          <div className="text-[13px]">
            서울특별시 강남대로 479, 지하 1층 238호
          </div>
          <div className="text-[13px] font-bold">
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
            110053 India
          </div>
        </div>
      </div>
      <div id="copyrights" className="mt-4 text-[13px]">
        ⓒ 2023 Hyperhire
      </div>
    </div>
  );
}
