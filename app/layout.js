// app/layout.js  (ya RootLayout file)

import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

// ✅ SEO metadata
export const metadata = {
  title: "Portfolio of Shivanshu Pandey - Python & AI Developer",
  description:
    "This is the portfolio of Shivanshu Pandey. I am a Python and AI developer with expertise in building intelligent systems and data-driven applications. I am passionate about machine learning, deep learning, and automation, and I constantly explore innovative ways to apply AI in solving real-world problems.",
  keywords: [
    "Shivanshu Pandey",
    "Portfolio",
    "Python Developer",
    "AI Developer",
    "Machine Learning",
    "Deep Learning",
    "Full Stack",
  ],
  authors: [{ name: "Shivanshu Pandey" }],
  creator: "Shivanshu Pandey",
  publisher: "Shivanshu Pandey",

  // ✅ Open Graph for social media & Google previews
  openGraph: {
    title: "Shivanshu Pandey - Python & AI Developer",
    description:
      "Explore projects, skills, and achievements of Shivanshu Pandey - a Python & AI Developer.",
    url: "https://portfolio-ochre-seven-63.vercel.app/",
    siteName: "Portfolio of Shivanshu Pandey",
    images: [
      {
        url: "https://portfolio-ochre-seven-63.vercel.app/myphoto.jpg",
        width: 1200,
        height: 630,
        alt: "Shivanshu Pandey",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Shivanshu Pandey - Python & AI Developer",
    description:
      "Explore projects, skills, and achievements of Shivanshu Pandey - a Python & AI Developer.",
    images: ["https://portfolio-ochre-seven-63.vercel.app/myphoto.jpg"],
    creator: "@shivanshu", // (agar Twitter handle hai to add karo)
  },

  // ✅ Canonical URL
  alternates: {
    canonical: "https://portfolio-ochre-seven-63.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
