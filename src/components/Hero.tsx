import Image from "next/image";
import React from "react";

interface HeroProps {
  onCtaClick?: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 sm:py-32 bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Next-Gen Solution for Growing Your Business</h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300">Effortlessly manage, scale, and succeed with ProductName. All-in-one platform, beautiful experience.</p>
        <button
          className="mt-2 px-8 py-3 rounded-full bg-[color:var(--primary)] text-white font-semibold text-lg shadow-lg transition-colors  hover:bg-[color:var(--primary-dark)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
          onClick={onCtaClick}
          aria-label="Open sign up modal"
        >
          Get Early Access
        </button>
      </div>
      <div className="mt-10">
        <Image
          src="/next.svg"
          alt="Product preview"
          width={320}
          height={56}
          priority
        />
      </div>
    </section>
  );
}
