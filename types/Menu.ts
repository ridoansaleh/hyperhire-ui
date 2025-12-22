export interface DropdownItem {
  href: string;
  label: string;
}

export interface MenuItem {
  id: string;
  href: string;
  label: string;
  hasDropdown: boolean;
  items: DropdownItem[];
}
