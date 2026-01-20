import type { Metadata } from "next";
import { Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import SideBar from "@/component/sidebarfolder/SideBar";
import RightBar from "@/component/rightside/RightBar";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movie App",
  description: "Movie Streaming App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} antialiased`}
      >
        <div className="flex h-screen overflow-hidden" >
          <SideBar />
          <main className="flex-1 overflow-hidden p-8 bg-black">
            {children}
          </main>
          <RightBar />
        </div>
      </body>
    </html>
  );
}
