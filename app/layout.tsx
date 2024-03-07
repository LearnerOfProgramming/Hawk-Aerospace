import type { Metadata } from "next";
import { Inter, Josefin_Sans, Montserrat, Nunito, Open_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "./navbar";
import SiteMap from "./footer";
import './layout.css';

import { Roboto } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const nunito = Open_Sans({ subsets: ["latin"] })
// const nunito = Josefin_Sans ({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Hawk Aerospace",
  description: "Hawk Aerospace ",
};

const Nav = <Navbar></Navbar>

const Separator = <div className=" mt-24"></div>

const siteMap = <SiteMap></SiteMap>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={nunito.className}>
        <div className=" min-h-screen relative flex flex-col justify-between">
          {Nav}
          {Separator}
          <div className="w-full children pb-2">

            {children}
          </div>
          <div className=" bottom-0 w-full">
            {siteMap}
          </div>
        </div>
      </body>
    </html>
  );
}
