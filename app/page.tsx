import MainLayout from "@/components/templates/MainLayout";
import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/organisms/Hero";
import Footer from "@/components/organisms/Footer";
import { BASE_URL } from "@/lib/config";

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

async function getProfiles() {
  const res = await fetch(`${BASE_URL}/api/profiles`, {
    cache: "no-store",
  });
  return res.json();
}

async function getJobs() {
  const res = await fetch(`${BASE_URL}/api/jobs`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const profiles = await getProfiles();
  const jobs = await getJobs();

  return (
    <MainLayout header={<Navbar menuItems={menuItems} />} footer={<Footer />}>
      <Hero jobs={jobs} profiles={profiles} />
    </MainLayout>
  );
}
