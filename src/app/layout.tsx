import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "My dating App",
  description: "Meet your soulmate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
        att-vdb-init="true"
      >
        
        <main className="">{children}</main>
      </body>
    </html>
  );
}
