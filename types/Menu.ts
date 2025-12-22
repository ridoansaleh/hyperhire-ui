export interface DropdownItem {
  href: string;
  label: string;
}

export interface MenuItem {
  id: number;
  href: string;
  label: string;
  hasDropdown: boolean;
  items: DropdownItem[];
}
