import type { Metadata } from "next";
import { Poppins,Inter,Urbanist} from "next/font/google";
import "./globals.css";

const urbanist=Urbanist({
  variable:"--font-urbanist",
  subsets:["latin"]
})
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["200", "600"],
  subsets: ["latin"]
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})
export const metadata: Metadata = {
  title: "Antarrdriishtie",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable}`}
      >
        {children}
      </body>
    </html>
  );
}