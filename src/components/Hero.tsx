import Image from "next/image";
import React from "react";
import type { HeroProps } from "../types/hero";

export default function Hero({ title, subtitle, ctaText = "Get Early Access", imageSrc, onCtaClick }: HeroProps) {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-32 sm:py-40 bg-gradient-to-br from-[color:var(--background)] via-[color:var(--background)] to-blue-50/30 dark:to-blue-950/20 text-[color:var(--foreground)] overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[color:var(--primary)] via-purple-600 to-blue-600 bg-clip-text text-transparent">
              {title.split(' – ')[0]}
            </span>
            {title.includes(' – ') && (
              <>
                <br className="hidden sm:block" />
                <span className="text-[color:var(--foreground)] font-bold">
                  {title.split(' – ')[1]}
                </span>
              </>
            )}
          </h1>
        </div>
        <div className="animate-fade-in-up animation-delay-200">
          <p className="text-xl sm:text-2xl mb-10 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
            {subtitle}
          </p>
        </div>
        <div className="animate-fade-in-up animation-delay-400">
          <button
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-[color:var(--primary)] to-purple-600 text-white font-bold text-xl shadow-2xl transition-all duration-300 hover:shadow-[color:var(--primary)]/25 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/50 transform hover:-translate-y-1"
            onClick={onCtaClick}
            aria-label="Open sign up modal"
          >
            <span className="relative z-10">{ctaText}</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
      <div className="relative z-10 mt-16 animate-fade-in-up animation-delay-600">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[color:var(--primary)]/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            <Image
              src={imageSrc}
              alt="Product preview"
              width={400}
              height={70}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
