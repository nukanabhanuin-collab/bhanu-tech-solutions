
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.bhanutechsolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Bhanu Tech Solutions | Digital Marketing & Web Development",
    template: "%s | Bhanu Tech Solutions",
  },

  description:
    "Bhanu Tech Solutions helps businesses grow through professional website development, digital marketing, social media management, creative branding and video editing.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Bhanu Tech Solutions",
    "Website Development",
    "Digital Marketing",
    "Social Media Management",
    "Graphic Designing",
    "Video Editing",
    "SEO Services",
    "Creative Branding",
    "Business Website Design",
  ],

  applicationName: "Bhanu Tech Solutions",
  authors: [{ name: "Bhanu Tech Solutions" }],
  creator: "Bhanu Tech Solutions",
  publisher: "Bhanu Tech Solutions",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Bhanu Tech Solutions",
    title: "Bhanu Tech Solutions | Your Digital Growth Partner",
    description:
      "Creative. Strategic. Results-Driven. Website Development, Digital Marketing and Creative Solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhanu Tech Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhanu Tech Solutions",
    description:
      "Your Digital Growth Partner. Website Development, Digital Marketing and Creative Solutions.",
    images: ["/og-image.png"],
  },

  icons: {
  icon: "/favicon.ico.png",
  apple: "/apple-touch-icon.png",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
