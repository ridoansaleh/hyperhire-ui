import Image from "next/image";

export default function Avatar({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="avatar"
      width={120}
      height={120}
      className="h-[64px] w-[64px] lg:h-[120px] lg:w-[120px] rounded-full object-cover border border-gray-200"
    />
  );
}
