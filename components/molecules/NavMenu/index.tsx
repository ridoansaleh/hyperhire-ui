import NavItem from "@/components/atoms/NavItem";
import type { MenuItem } from "@/types/Menu";

export default function NavMenu({ items }: { items: MenuItem[] }) {
  return (
    <div className="hidden lg:flex w-[270px] justify-between gap-6">
      {items.map((item) => (
        <NavItem key={item.href} {...item} />
      ))}
    </div>
  );
}
