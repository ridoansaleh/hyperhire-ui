import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/company-logo.png"
        alt="Company Logo"
        width={114}
        height={21}
      />
    </Link>
  );
}
