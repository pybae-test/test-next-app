import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SocialProof from "../components/SocialProof";
import SignupModal from "../components/SignupModal";
import { useState } from "react";
import type { HeroProps } from "../types/hero";
import type { Feature } from "../types/feature";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const productName = "AcmeGrowth";

const landingHero: HeroProps = {
  title: `Transform Your Business Growth with ${productName}`,
  subtitle: "Join 10,000+ companies using our AI-powered platform to increase revenue by 40% and reduce operational costs by 60%. Get results in 30 days or less.",
  imageSrc: "/next.svg"
};

const features: Feature[] = [
  {
    icon: "/feature1.svg",
    title: "AI-Powered Analytics",
    description: "Get actionable insights from your data in seconds, not hours. Our AI identifies growth opportunities and predicts trends with 95% accuracy.",
  },
  {
    icon: "/feature2.svg",
    title: "Team Collaboration Hub",
    description: "Eliminate communication silos with real-time collaboration tools. Increase team productivity by 3x with shared workspaces and instant sync.",
  },
  {
    icon: "/feature3.svg",
    title: "Smart Automation Engine",
    description: "Automate 80% of repetitive tasks and save 20+ hours per week. Focus on strategy while our AI handles the operational work.",
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-[color:var(--background)] text-[color:var(--foreground)]`}>
      <Head>
        <title>{`${productName} – Transform Your Business Growth with AI`}</title>
        <meta name="description" content={`Join 10,000+ companies using ${productName} to increase revenue by 40% and reduce costs by 60%. Get results in 30 days or less.`} />
      </Head>
      <Hero
        title={landingHero.title}
        subtitle={landingHero.subtitle}
        imageSrc={landingHero.imageSrc}
        onCtaClick={() => setModalOpen(true)}
      />
      <SocialProof />
      <Features features={features} />
      <footer className="w-full bg-transparent py-8 flex flex-col items-center justify-center text-gray-500 mt-auto border-t border-gray-100 dark:border-gray-800">
        <div className="flex gap-6 mb-2 text-sm">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="https://twitter.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <div className="text-xs">&copy; {new Date().getFullYear()} {productName}. All rights reserved.</div>
      </footer>
      <SignupModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
