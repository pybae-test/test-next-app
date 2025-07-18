import React, { useState, FormEvent } from "react";
import type { SignupPayload, SignupResponse } from "../types/signup";
import type { SignupModalProps } from "../types/signup-modal";

export default function SignupModal({ open, onClose }: SignupModalProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  if (!open) return null;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Email is required");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email } as SignupPayload),
      });
      const data: SignupResponse = await res.json();
      if (res.ok && "success" in data && data.success === true) {
        setSuccess(true);
        setName("");
        setEmail("");
      } else {
        setError("error" in data ? data.error : "Request failed");
      }
    } catch {
      setError("Network/server error");
    }
    setLoading(false);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative bg-white dark:bg-gray-950 rounded-2xl shadow-xl max-w-md w-full mx-4 p-8">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          aria-label="Close sign up modal"
        >
          ×
        </button>
        {success ? (
          <div className="text-center my-14">
            <div className="mb-4 text-4xl">🚀</div>
            <div className="font-bold text-2xl mb-2 text-green-600">Welcome to AcmeGrowth!</div>
            <div className="text-gray-600 dark:text-gray-300 mb-4">Your free trial is starting now. Check your email for next steps.</div>
            <div className="text-sm text-blue-600 dark:text-blue-400">Expected setup time: 2 minutes</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-0.5">Name</label>
              <input
                id="name"
                name="name"
                className="w-full border border-gray-200 dark:border-gray-700 rounded px-3 py-2 mt-1 bg-gray-50 dark:bg-gray-900 text-[color:var(--foreground)]"
                type="text"
                autoComplete="name"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-0.5">Email<span className="ml-1 text-red-500">*</span></label>
              <input
                id="email"
                name="email"
                className="w-full border border-gray-200 dark:border-gray-700 rounded px-3 py-2 mt-1 bg-gray-50 dark:bg-gray-900 text-[color:var(--foreground)]"
                type="email"
                autoComplete="email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            {error && <div className="text-red-600 text-sm text-center -mt-3">{error}</div>}
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base py-3 transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-3 disabled:opacity-50 disabled:hover:scale-100"
              disabled={loading}
              aria-label="Start free trial"
            >
              {loading ? "Starting your trial..." : "Start Free Trial →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
