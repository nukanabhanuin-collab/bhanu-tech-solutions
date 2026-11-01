
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.bhanutechsolutions.com";

const pageTitle =
  "Bhanu Tech Solutions | Best Digital Marketing Agency In Hyderabad";

const pageDescription =
  "Bhanu Tech Solutions helps businesses grow through professional website development, digital marketing, social media management, creative branding, graphic designing and video editing.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: pageTitle,
    template: "%s | Bhanu Tech Solutions",
  },

  description: pageDescription,

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Bhanu Tech Solutions",
    "Best Digital Marketing Agency In Hyderabad",
    "Digital Marketing Agency Hyderabad",
    "Website Development Hyderabad",
    "Digital Marketing",
    "Social Media Management",
    "Graphic Designing",
    "Video Editing",
    "SEO Services",
    "Creative Branding",
    "Business Website Design",
    "Website Development",
    "Digital Marketing Agency Andhra Pradesh",
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
    title: pageTitle,
    description:
      "Best Digital Marketing Agency in Hyderabad offering Website Development, Social Media Management, Graphic Designing, Video Editing and Creative Solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhanu Tech Solutions - Best Digital Marketing Agency In Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Your Digital Growth Partner. Website Development, Digital Marketing, Social Media Management and Creative Solutions.",
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
