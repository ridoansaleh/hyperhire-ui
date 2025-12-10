import Image from "next/image";

export interface ServiceCardProps {
  logo: string;
  alt: string;
  width: number;
  height: number;
  label: string;
}

export default function ServiceCard({
  logo,
  alt,
  width,
  height,
  label,
}: ServiceCardProps) {
  return (
    <div className="w-[45%] lg:w-auto flex flex-col gap-2 p-4 rounded-[12px] bg-[#FFFFFF] text-sm">
      <Image src={logo} alt={alt} width={width} height={height} />
      <label className="font-bold">{label}</label>
      <div className="flex gap-2">
        <span className="font-medium">바로가기</span>
        <Image
          src="/images/arraw-right-square.png"
          alt="Cta"
          width={16}
          height={16}
          className="w-[20px] h-[20px]"
        />
      </div>
    </div>
  );
}
