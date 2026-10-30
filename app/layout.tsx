/*
layout.tsx was created by Sebastian Brown on October 29, 2026.

This file defines the root layout of the application.
It receives the page content through the children prop.
It places the navbar above and the footer below the page.
The output is a consistent layout for the school portal.
*/

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Root layout component

interface RootLayoutProps {children: React.ReactNode;}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-100 text-slate-900">


        <Navbar />

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
};

export default RootLayout;
