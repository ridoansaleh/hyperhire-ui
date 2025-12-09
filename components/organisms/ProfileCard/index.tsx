import Image from "next/image";
import Avatar from "@/components/atoms/Avatar";
import ProfileHeader from "@/components/molecules/ProfileHeader";
import SkillTag from "@/components/atoms/SkillTag/SkillTag";

export interface ProfileCardProps {
  img: string;
  name: string;
  country: {
    name: string;
    flagImg: string;
  };
  role: string;
  experience: string;
  skills: string[];
  monthlyIncome: number;
}

export default function ProfileCard({
  img,
  name,
  country,
  role,
  experience,
  skills,
}: ProfileCardProps) {
  return (
    <div className="w-[200px] lg:w-[272px] bg-white rounded-3xl p-[14px] lg:p-8 shadow-lg flex flex-col items-center border border-gray-100">
      <div className="relative">
        <Avatar src={img} />
        <Image
          src={country.flagImg}
          alt={country.name}
          width={25}
          height={18}
          className="absolute w-[14px] h-[12px] lg:w-[25px] lg:h-[18px] right-[5px] bottom-[5px] lg:right-2 lg:bottom-2"
        />
      </div>
      <ProfileHeader name={name} role={role} experience={experience} />

      <div className="flex flex-wrap gap-3 justify-center mt-4">
        {skills.map((skill) => (
          <SkillTag key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}
