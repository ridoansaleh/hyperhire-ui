"use client";

import Link from "next/link";
import { useEffect } from "react";
import { X } from "lucide-react";
import Logo from "@/components/atoms/Logo";
import MobileNavItem from "@/components/molecules/MobileNavItem";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavbar({ isOpen, onClose }: MobileNavbarProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`
        fixed inset-0 z-50 bg-whiteXX bg-brand-gradient text-blackX text-white
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        lg:hidden
      `}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <Logo />
        <button onClick={onClose} aria-label="Close menu" className="text-2xl">
          <X className="w-[21px] h-[21px]" />
        </button>
      </div>
      <nav className="flex flex-col gap-6 p-6 text-lg">
        <MobileNavItem
          label="채용"
          onNavigate={onClose}
          childrenItems={[
            { label: "해외 개발자 원격 채용", href: "/" },
            { label: "외국인 원격 채용 (비개발 직군)", href: "/" },
            { label: "한국어 가능 외국인 채용", href: "/" },
          ]}
        />
        <Link href="/" onClick={onClose}>
          해외 개발자 활용 서비스
        </Link>
        <Link href="/" onClick={onClose}>
          문의하기
        </Link>
      </nav>
    </div>
  );
}
