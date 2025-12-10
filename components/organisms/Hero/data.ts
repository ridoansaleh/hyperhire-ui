import { ProfileCardProps } from "../ProfileCard";
import type { Feature } from "@/types/Feature";

export const features: Feature[] = [
  {
    logo: "/images/feature1.png",
    label: "해외 마케팅",
    alt: "Feature 1",
  },
  {
    logo: "/images/feature2.png",
    label: "퍼블리셔",
    alt: "Feature 2",
  },
  {
    logo: "/images/feature3.png",
    label: "캐드원(제도사)",
    alt: "Feature 3",
  },
  {
    logo: "/images/feature4.png",
    label: "해외 세일즈",
    alt: "Feature 4",
  },
  {
    logo: "/images/feature5.png",
    label: "해외 CS",
    alt: "Feature 5",
  },
];

export const profiles: ProfileCardProps[] = [
  {
    img: "/images/avatar.png",
    name: "Arjun Mehta",
    country: {
      name: "India",
      flagImg: "/images/colombia.png",
    },
    role: "마케팅",
    experience: "2y+",
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
    monthlyIncome: 300,
  },
  {
    img: "/images/avatar.png",
    name: "Abhishek Gupta",
    country: {
      name: "India",
      flagImg: "/images/colombia.png",
    },
    role: "디자인",
    experience: "3y+",
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
    monthlyIncome: 200,
  },
  {
    img: "/images/avatar.png",
    name: "Priya Sharma",
    country: {
      name: "India",
      flagImg: "/images/colombia.png",
    },
    role: "개발자",
    experience: "4y+",
    skills: [
      "마케팅 콘텐츠 제작",
      "인스타그램 관리",
      "트위터 관리",
      "블로그 글 작성",
    ],
    monthlyIncome: 270,
  },
];
