import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "../components/Hero";
import Features from "../components/Features";
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
  title: `${productName} – Grow Faster, Smarter`,
  subtitle: "Effortlessly manage, scale, and succeed with the all-in-one growth platform.",
  imageSrc: "/next.svg"
};

const features: Feature[] = [
  {
    icon: "/feature1.svg",
    title: "Instant Insights",
    description:
      "Instantly surface code smells, complexity hotspots, and refactor suggestions across your entire repo—powered by our AI coding agent.",
  },
  {
    icon: "/feature2.svg",
    title: "Collaboration",
    description:
      "Brainstorm solutions, review pull requests, and auto-generate documentation side-by-side with teammates via an always-on coding agent.",
  },
  {
    icon: "/feature3.svg",
    title: "Automations",
    description:
      "Let the agent handle repetitive dev chores such as dependency upgrades, unit-test scaffolding, and CI/CD config, so you can focus on shipping features.",
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col bg-[color:var(--background)] text-[color:var(--foreground)]`}>
      <Head>
        <title>{`${productName} – Grow Faster, Smarter`}</title>
        <meta name="description" content={`${productName} helps you effortlessly manage, scale, and succeed.`} />
      </Head>
      <Hero
        title={landingHero.title}
        subtitle={landingHero.subtitle}
        imageSrc={landingHero.imageSrc}
        onCtaClick={() => setModalOpen(true)}
      />
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
