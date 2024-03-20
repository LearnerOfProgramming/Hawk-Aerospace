import type { Metadata } from "next";
import { Inter, Josefin_Sans, Montserrat, Nunito, Open_Sans, Rajdhani } from "next/font/google";
import "./globals.css";

import Navbar from "./navbar";
import SiteMap from "./footer";
import './layout.css';

import { Roboto } from "next/font/google";



// const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"], weight: "400" });
// const nunito = Open_Sans({ subsets: ["latin"] })

export const rajdhani = Rajdhani({ subsets:["latin"],weight: ["400","600","500","300","700"]})

export const metadata: Metadata = {
  title: "Hawk Aerospace",
  description: "Hawk Aerospace ",
};

const Nav = <Navbar></Navbar>

export const Separator2 = <div className=" mt-24"></div>

const siteMap = <SiteMap></SiteMap>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={rajdhani.className}>
        <div className=" min-h-screen relative flex flex-col  items-center justify-center">
          {Nav}
    
          <div className="w-full children pb-2 ">

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
