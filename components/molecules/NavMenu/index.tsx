import NavItem from "@/components/atoms/NavItem";
import type { MenuItem } from "@/types/Menu";
import NavDropdown from "@/components/molecules/NavDropdown";

export default function NavMenu({ items }: { items: MenuItem[] }) {
  return (
    <div className="hidden lg:flex w-[270px] justify-between gap-6">
      {items.map((item) =>
        item.hasDropdown ? (
          <NavDropdown key={item.id} {...item} />
        ) : (
          <NavItem key={item.id} {...item} />
        )
      )}
    </div>
  );
}
