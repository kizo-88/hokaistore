"use client";

import Link from 'next/link';
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Product", link: "/product" },
  { name: "Testimonials", link: "/testimonials" },
  { name: "Login", link: "/login" },
];

export default function About() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <FloatingNav navItems={navItems} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">This is the about page content.</p>
      </main>
    </div>
  );
}