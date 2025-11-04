import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About",
    template: "  | %s",
  },
  description:
    "Magpieo Digital is a multidisciplinary creative agency built by designers, strategists, and digital marketers. We craft human-centered experiences that connect brands with their audiences.",
  keywords: [
    "About Magpieo Digital",
    "Creative Agency Bangladesh",
    "UI/UX Experts",
    "Branding Professionals",
    "Digital Strategy Team",
  ],
  authors: [{ name: "Magpieo Digital" }],
  creator: "Magpieo Digital",
  openGraph: {
    title: "About Magpieo Digital | Creative Minds Behind Impactful Design & Marketing",
    description:
      "Magpieo Digital is a multidisciplinary creative agency built by designers, strategists, and digital marketers. We craft human-centered experiences that connect brands with their audiences.",
    url: "https://www.magpieo.com/about",
    siteName: "Magpieo Digital",
    images: [
      {
        url: "/favicon1.jpg",
        width: 800,
        height: 600,
        alt: "About Magpieo Digital",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Magpieo Digital | Creative Minds Behind Impactful Design & Marketing",
    description:
      "Magpieo Digital is a multidisciplinary creative agency built by designers, strategists, and digital marketers. We craft human-centered experiences that connect brands with their audiences.",
    images: ["/favicon1.jpg"],
    site: "@MagpieoDigital",
    creator: "@MagpieoDigital",
  },
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
