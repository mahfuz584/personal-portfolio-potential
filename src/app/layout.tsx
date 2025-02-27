import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Provider from "@/lib/Theme/providers";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const getPoppins = Poppins({
  weight: ["400", "500", "600", "700"], // Define weights as strings.
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Umair Portfolio",
  description: "Umair's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={` ${getPoppins.className} ${montserrat.variable} antialiased bg-bgLight dark:bg-bgDark`}
      >
        <Provider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow-[1]">{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
