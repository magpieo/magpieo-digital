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
    default: "Magpieo",
    template: "%s - We aim to empower you by providing you high quality attire.",
  },
  description: "We aim to empower you by providing you high quality attire.",
  icons: {
    icon: "/favicon1.jpg", // ✅ favicon path from public folder
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

      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
