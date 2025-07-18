import React from "react";

export default function SocialProof() {
  const stats = [
    { number: "10,000+", label: "Active Companies" },
    { number: "40%", label: "Average Revenue Increase" },
    { number: "60%", label: "Cost Reduction" },
    { number: "30 days", label: "Time to Results" },
  ];

  const testimonials = [
    {
      quote: "AcmeGrowth transformed our business. We saw 45% revenue growth in just 6 weeks.",
      author: "Sarah Chen",
      title: "CEO, TechStart Inc.",
      avatar: "/avatar1.png"
    },
    {
      quote: "The AI insights are incredible. We're making data-driven decisions faster than ever.",
      author: "Michael Rodriguez",
      title: "VP Growth, ScaleUp Co.",
      avatar: "/avatar2.png"
    },
    {
      quote: "Cut our operational costs by 65% while doubling our team productivity. Game changer.",
      author: "Emily Johnson",
      title: "COO, InnovateLab",
      avatar: "/avatar3.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Trusted by industry leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See what our customers are saying about their growth journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
