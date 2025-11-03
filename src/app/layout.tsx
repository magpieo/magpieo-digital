import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script"; // ✅ Import Next.js Script component
import "./globals.css";

// ✅ Font setup
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

// ✅ SEO metadata

export const metadata: Metadata = {
  title: {
    default: "Magpieo Digital ",
    template: "%s | Magpieo Digital",
  },
  description:
    "Magpieo Digital is a creative agency specializing in UI/UX design, branding, web design, app design, and digital marketing. We turn ideas into powerful digital experiences that grow your brand and engage your audience.",
  keywords: [
    "Magpieo Digital",
    "UI/UX Design Agency Bangladesh",
    "Branding Agency",
    "Web Design Company",
    "App Design Service",
    "Digital Marketing Agency",
    "SEO Expert",
    "Creative Agency BD",
  ],
  authors: [{ name: "Magpieo Digital" }],
  creator: "Magpieo Digital",
  openGraph: {
    title:
      "Magpieo Digital | Creative UI/UX, Branding & Digital Marketing Agency in Bangladesh",
    description:
      "Magpieo Digital is a creative agency specializing in UI/UX design, branding, web design, app design, and digital marketing. We turn ideas into powerful digital experiences that grow your brand and engage your audience.",
    url: "https://www.magpieo.com",
    siteName: "Magpieo Digital",
    images: [
      {
        url: "/favicon1.jpg",
        width: 800,
        height: 600,
        alt: "Magpieo Digital",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Magpieo Digital | Creative UI/UX, Branding & Digital Marketing Agency in Bangladesh",
    description:
      "Magpieo Digital is a creative agency specializing in UI/UX design, branding, web design, app design, and digital marketing. We turn ideas into powerful digital experiences that grow your brand and engage your audience.",
    images: ["/favicon1.jpg"],
    site: "@MagpieoDigital",
    creator: "@MagpieoDigital",
  },
  icons: {
    icon: "/favicon1.jpg",
    apple: "/favicon1.jpg",
  },
};

// ✅ Layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7YV43RS62R"
        ></Script>

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7YV43RS62R');
          `}
        </Script>
      </head>

      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
