import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
}

export default function NavItem({ label, href }: NavItemProps) {
  return (
    <Link className="text-sm hover:text-blue-600" href={href}>
      {label}
    </Link>
  );
}
