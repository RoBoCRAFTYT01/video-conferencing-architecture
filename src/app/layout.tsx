import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huawei - Video Conferencing",
  description: "Notes on enterprise collaboration and video conferencing tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
