import Navbar from "@/components/Navbar";
import { dbConnect } from "@/services/mongo";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import AuthProvider from "./provider/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Movie DB",
  description: "Movie Database website",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Suspense>
            <Navbar />
            {children}
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
}
