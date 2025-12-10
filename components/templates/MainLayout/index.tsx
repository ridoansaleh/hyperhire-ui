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
      <div
        className="text-white"
        style={{
          background:
            "linear-gradient(151.17deg, #26C2B9 8.69%, #288BE7 126.06%)",
        }}
      >
        <header className="max-w-[1024px] mx-auto">{header}</header>
        <main className="max-w-[1024px] mx-auto">{children}</main>
      </div>
      <footer className="bg-[#FBFBFB]">
        <div className="max-w-[1024px] mx-auto bg-[#FBFBFB]">{footer}</div>
      </footer>
    </div>
  );
}
