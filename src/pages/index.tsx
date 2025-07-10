import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

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
    icon: "/next.svg",
    title: "Blazing Fast",
    copy: "Next.js & Edge runtime deliver millisecond latency.",
  },
  {
    icon: "/vercel.svg",
    title: "One-click Deploy",
    copy: "Deploy globally with Vercel in seconds.",
  },
  {
    icon: "/file.svg",
    title: "Type-safe",
    copy: "Built with TypeScript from top to bottom.",
  },
  {
    icon: "/globe.svg",
    title: "SEO Friendly",
    copy: "Automatic SSR/SSG gives you perfect Lighthouse scores.",
  },
];

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-16 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col items-center justify-center row-start-2 w-full max-w-5xl mx-auto">
        <section className="flex flex-col items-center gap-3 mb-12 w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-center">Test Next App</h1>
          <p className="text-lg md:text-2xl text-center max-w-xl mx-auto mt-4 text-muted-foreground">
            The modern Next.js/TypeScript/Tailwind starter with instant deploy, type-safety, incredible speed, and SEO built-in.
          </p>
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-foreground text-background rounded-full px-7 py-3 font-semibold text-base md:text-lg shadow-sm transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            <Image src="/vercel.svg" alt="Vercel logo" width={24} height={24} className="mr-2 dark:invert" />
            Deploy with Vercel
          </a>
        </section>
        <section className="w-full mt-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 rounded-lg border border-black/[.05] dark:border-white/[.1] bg-background"
              >
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={48}
                  height={48}
                  className="mb-4 dark:invert"
                />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.copy}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="row-start-3 py-5 text-center text-sm text-muted-foreground w-full border-t border-black/[.04] dark:border-white/[.08]">
        © {new Date().getFullYear()} Test Next App. All rights reserved.
      </footer>
    </div>
  );
}
