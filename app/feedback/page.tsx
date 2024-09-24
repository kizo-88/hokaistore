"use client";

import Link from "next/link";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const navItems = [
  { name: "Shop", link: "/shop" },
  { name: "Feedback", link: "/feedback" },
  { name: "About", link: "/about" },
  { name: "Login", link: "/login" },
  { name: "Home", link: "/" },
];
export default function About() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <FloatingNav navItems={navItems} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">FEEDBACK</h1>
        <p className="text-lg">This is the about page content.</p>

        {/* Telegram Channel Embed */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Join our Telegram Channel
          </h2>
          <iframe
            src="https://t.me/Hokaistorechannel"
            width="400"
            height="500"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}
