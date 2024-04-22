import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataViz Dashboard",
  description: "Generated by create next app",
};

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html >
    <body className="flex">
      <NavBar />

      <CssVarsProvider defaultMode="dark">
        <main className="flex w-full">
          {children}
        </main>
      </CssVarsProvider>
      </body>
    </html>
  );
}
