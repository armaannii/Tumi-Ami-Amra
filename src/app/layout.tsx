import type { Metadata } from "next";
import { Rubik, DM_Sans, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tumi Ami Amra — Social Development Events in Your Neighbourhood",
  description:
    "Discover, join and organise community service events near you — tree plantings, clean-ups, blood drives, winter clothes distribution and more, all in one place.",
};

/* Apply the saved theme before hydration so the page never flashes the
   wrong colour scheme. */
const themeInit = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* <script dangerouslySetInnerHTML={{ __html: themeInit }} /> */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            className:
              "font-display text-sm font-semibold rounded-none border-2 border-forest bg-white px-4 py-3 text-forest shadow-[6px_6px_0_0_var(--brand)] dark:border-brand dark:bg-forest dark:text-brand",
          }}
        />
      </body>
    </html>
  );
}
