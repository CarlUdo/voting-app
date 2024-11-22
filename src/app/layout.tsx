import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voting app",
  description: "Done by Carl Bieneck",
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
