import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astra CSS Status",
  description: "Home for Astra CSS's real-time and historical data on system performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <script src="https://astracss-cdn.vercel.app/0.1.0.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
