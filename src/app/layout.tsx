import type { Metadata } from "next";

// import font
import { Poppins } from "next/font/google";

// import css
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const url = "https://vibe-coading-landing-page.vercel.app";
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title: "Vibe Coding Academy",
  description:
    "Vibe Coding Academy offers practical, industry-relevant programming courses for students, career switchers, developers, and entrepreneurs. Learn coding with expert instructors and join our vibrant tech community.",
  keywords: [
    "Coding",
    "Programming",
    "Tech Education",
    "Learn to Code",
    "Coding Bootcamp",
    "Web Development",
    "Software Engineering",
  ],
  openGraph: {
    title: "Vibe Coding Academy",
    description:
      "Vibe Coding Academy offers practical, industry-relevant programming courses for students, career switchers, developers, and entrepreneurs. Learn coding with expert instructors and join our vibrant tech community.",
    url,
    type: "website",
    images: [
      {
        url: `${url}/about.webp`,
        width: 1200,
        height: 630,
        alt: "Vibe Coding Academy",
      },
    ],
    siteName: "Vibe Coding Academy",
  },
  alternates: {
    canonical: url,
  },
  twitter: {
    card: "summary_large_image",
    site: "@vibecoding",
    title: "Vibe Coding Academy",
    description:
      "Vibe Coding Academy offers practical, industry-relevant programming courses for students, career switchers, developers, and entrepreneurs. Learn coding with expert instructors and join our vibrant tech community.",
    images: [`${url}/about.webp`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
