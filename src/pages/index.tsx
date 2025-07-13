import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SignupModal from "../components/SignupModal";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const features = [
  {
    icon: "/feature1.svg",
    title: "Instant Insights",
    description: "Get real-time analytics and customizable dashboards for your business metrics.",
  },
  {
    icon: "/feature2.svg",
    title: "Collaboration",
    description: "Work seamlessly with your team in shared workspaces. Everything synced and secure.",
  },
  {
    icon: "/feature3.svg",
    title: "Automations",
    description: "Let ProductName automate repetitive tasks so you can focus on what matters.",
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col bg-[color:var(--background)] text-[color:var(--foreground)]`}>
      <Head>
        <title>MyApp – Your Productivity Platform</title>
        <meta name="description" content="Effortlessly manage, scale, and succeed with ProductName. All-in-one platform, beautiful experience." />
      </Head>
      <Hero onCtaClick={() => setModalOpen(true)} />
      <Features features={features} />
      <footer className="w-full bg-transparent py-8 flex flex-col items-center justify-center text-gray-500 mt-auto border-t border-gray-100 dark:border-gray-800">
        <div className="flex gap-6 mb-2 text-sm">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="https://twitter.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <div className="text-xs">&copy; {new Date().getFullYear()} ProductName. All rights reserved.</div>
      </footer>
      <SignupModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
