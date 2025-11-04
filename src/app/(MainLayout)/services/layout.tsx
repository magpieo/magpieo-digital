import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Services",
    template: " %s",
  },
  description:
    "Explore the full range of creative and digital services offered by Magpieo Digital — from UI/UX design and branding to web design, app development, and SEO-driven marketing strategies.",
  keywords: [
    "Magpieo Services",
    "UI/UX Design",
    "Branding Solutions",
    "Web Design Agency",
    "App Design",
    "Digital Marketing",
    "SEO Services",
  ],
  authors: [{ name: "Magpieo Digital" }],
  creator: "Magpieo Digital",
  openGraph: {
    title:
      "Our Services | UI/UX Design, Branding, Web & Digital Solutions – Magpieo Digital",
    description:
      "Explore the full range of creative and digital services offered by Magpieo Digital — from UI/UX design and branding to web design, app development, and SEO-driven marketing strategies.",
    url: "https://www.magpieo.com/services",
    siteName: "Magpieo Digital",
    images: [
      {
        url: "/favicon1.jpg",
        width: 800,
        height: 600,
        alt: "Magpieo Digital Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Our Services | UI/UX Design, Branding, Web & Digital Solutions – Magpieo Digital",
    description:
      "Explore the full range of creative and digital services offered by Magpieo Digital — from UI/UX design and branding to web design, app development, and SEO-driven marketing strategies.",
    images: ["/favicon1.jpg"],
    site: "@MagpieoDigital",
    creator: "@MagpieoDigital",
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
