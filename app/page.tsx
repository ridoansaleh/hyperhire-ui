import MainLayout from "@/components/templates/MainLayout";
import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/organisms/Hero";
import Footer from "@/components/organisms/Footer";

const menuItems = [
  {
    href: "#",
    label: "채용",
    hasDropdown: true,
    items: [
      { label: "해외 개발자 원격 채용", href: "#remote-developer" },
      { label: "외국인 원격 채용 (비개발 직군)", href: "#remote-non-tech" },
      { label: "한국어 가능 외국인 채용", href: "#korean-speaker" },
    ],
  },
  {
    href: "#",
    label: "해외 개발자 활용 서비스",
    hasDropdown: false,
    items: [],
  },
];

export default function Home() {
  return (
    <MainLayout header={<Navbar menuItems={menuItems} />} footer={<Footer />}>
      <Hero />
    </MainLayout>
  );
}
