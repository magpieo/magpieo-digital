import { Roboto } from "next/font/google";

// Roboto Sans-Serif Font
export const fontSans = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"], // Specify the weights you need
});

 // Poppins Sans-Serif Font
// export const fontPoppins = Poppins({
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: ["400", "600", "700"], // Specify the weights you need
// });