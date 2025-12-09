interface ProfileHeaderProps {
  name: string;
  role: string;
  experience: string;
}

export default function ProfileHeader({
  name,
  role,
  experience,
}: ProfileHeaderProps) {
  return (
    <div className="text-center">
      <h2 className="font-extrabold text-lg text-gray-900">{name}</h2>
      <p className="text-xs lg:text-sm text-blue-600 font-semibold mt-1">
        {role} • {experience}
      </p>
    </div>
  );
}
