import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LinkedInLoop — Your Newsletter, Every Week, On LinkedIn",
  description:
    "Connect your newsletter, generate 5 LinkedIn post variations per issue, schedule them at optimal times, and track engagement. All powered by AI.",
  keywords: ["LinkedIn", "newsletter", "post scheduler", "AI", "content marketing", "thought leadership"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230077b5'/><text y='.9em' x='50%' text-anchor='middle' font-size='70' fill='white'>in</text></svg>" />
      </head>
      <body className="bg-background text-text antialiased">{children}</body>
    </html>
  );
}
