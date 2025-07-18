import Image from "next/image";
import React from "react";
import type { HeroProps } from "../types/hero";

export default function Hero({ title, subtitle, ctaText = "Start Free Trial", imageSrc, onCtaClick }: HeroProps) {
  return (
    <section className="w-full flex flex-col items-center justify-center py-32 sm:py-40 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-[color:var(--foreground)]">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button
            className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={onCtaClick}
            aria-label="Start free trial"
          >
            {ctaText} →
          </button>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
          </div>
        </div>
      </div>
      <div className="mt-16 max-w-5xl mx-auto px-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-16 flex items-center justify-center">
            <div className="text-center">
              <Image
                src={imageSrc}
                alt="AcmeGrowth dashboard preview"
                width={200}
                height={50}
                priority
                className="mx-auto mb-4 dark:invert"
              />
              <div className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                Dashboard Preview
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Real-time analytics • AI insights • Team collaboration
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
