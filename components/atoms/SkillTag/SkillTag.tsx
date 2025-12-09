interface SkillTagProps {
  label: string;
}

export default function SkillTag({ label }: SkillTagProps) {
  return (
    <div className="p-2 rounded-md bg-white border text-[8px] lg:text-xs text-gray-700">
      {label}
    </div>
  );
}
