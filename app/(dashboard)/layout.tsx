import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import SideBar from "../components/sidebar";
import SearchBar from "../components/searchBar";




export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <SideBar/>
        <SearchBar />{children}</body>
    </html>
  );
}
