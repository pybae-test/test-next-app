import Image from "next/image";
import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="py-16 bg-transparent w-full">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-md h-full text-center border border-gray-100 dark:border-gray-800"
          >
            <Image src={feature.icon} alt={feature.title} width={48} height={48} className="mb-5 dark:invert" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
