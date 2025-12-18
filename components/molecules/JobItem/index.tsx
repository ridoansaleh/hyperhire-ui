import Image from "next/image";
interface JobItemProps {
  logo: string;
  alt: string;
  label: string;
  itemWidth: number;
}

export default function JobItem({
  alt,
  label,
  logo,
  itemWidth,
}: JobItemProps) {
  return (
    <div
      className={`shrink-0 w-[${itemWidth}px] flex items-center gap-[12px] bg-[#FFFFFF33] p-[16px] rounded-[12px]`}
    >
      <Image src={logo} alt={alt} width={48} height={48} />
      <label className="text-xl font-black">{label}</label>
    </div>
  );
}
