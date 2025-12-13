import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  footer: ReactNode;
  header: ReactNode;
}

export default function MainLayout({
  children,
  footer,
  header,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-brand-gradient text-white">
        <header className="max-w-[1024px] mx-auto">{header}</header>
        <main className="max-w-[1024px] mx-auto">{children}</main>
      </div>
      <footer className="bg-[#FBFBFB]">
        <div className="max-w-[1024px] mx-auto bg-[#FBFBFB]">{footer}</div>
      </footer>
    </div>
  );
}
