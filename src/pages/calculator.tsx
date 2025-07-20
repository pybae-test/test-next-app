import React from "react";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Calculator from "../components/Calculator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function CalculatorPage() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-[color:var(--background)] text-[color:var(--foreground)]`}>
      <Head>
        <title>Calculator with Trigonometric Functions</title>
        <meta name="description" content="Calculator with sin, cos, tan trigonometric functions" />
      </Head>
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Scientific Calculator
          </h1>
          <Calculator />
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            Trigonometric functions use degrees as input
          </p>
        </div>
      </main>
      
      <footer className="w-full bg-transparent py-8 flex flex-col items-center justify-center text-gray-500 mt-auto border-t border-gray-100 dark:border-gray-800">
        <div className="text-xs">&copy; {new Date().getFullYear()} Calculator App. All rights reserved.</div>
      </footer>
    </div>
  );
}
