import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins", // create a CSS variable
  weight: ["400", "500", "600", "700"], // optional, choose the weights you need
});

export const metadata: Metadata = {
  title: {
    default: "Magpieo",
    template: `%s - We aim to empower you by providing you high quality attire.`,
  },
  description: "We aim to empower you by providing you high quality attire.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" }, // main favicon
    ],
    shortcut: "/favicon.png", // shortcut for older browsers
    apple: "/favicon.png", // Apple devices
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
