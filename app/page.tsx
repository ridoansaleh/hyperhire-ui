import MainLayout from "@/components/templates/MainLayout";
import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/organisms/Hero";
import Footer from "@/components/organisms/Footer";

const menuItems = [
  { href: "/#", label: "채용" },
  { href: "/#", label: "해외 개발자 활용 서비스" },
];

export default function Home() {
  return (
    <MainLayout header={<Navbar menuItems={menuItems} />} footer={<Footer />}>
      <Hero />
    </MainLayout>
  );
}
