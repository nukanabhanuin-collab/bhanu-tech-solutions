
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhanu Tech Solutions | Digital Marketing & Web Development",
  description:
    "Bhanu Tech Solutions helps businesses grow through digital marketing, creative branding, social media management and modern website development.",
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
