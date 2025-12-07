import { Menu } from "lucide-react";

import Logo from "@/components/atoms/Logo";
import NavMenu from "@/components/molecules/NavMenu";
import Button from "@/components/atoms/Button";

import type { MenuItem } from "@/types/Menu";

interface NavbarProps {
  menuItems: MenuItem[];
}

export default function Navbar({ menuItems }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between py-4 px-4 lg:px-2 xl:px-0">
      <Logo />
      <NavMenu items={menuItems} />
      <Button>문의하기</Button>
      <Menu className="lg:hidden" size={21} />
    </nav>
  );
}
