import Image from "next/image";
interface FeatureItemProps {
  logo: string;
  alt: string;
  label: string;
}

export default function FeatureItem({ alt, label, logo }: FeatureItemProps) {
  return (
    <div className="shrink-0 w-[210px] flex items-center gap-[12px] bg-[#FFFFFF33] p-[16px] rounded-[12px]">
      <Image src={logo} alt={alt} width={48} height={48} />
      <label className="text-xl font-black">{label}</label>
    </div>
  );
}
