"use client";

import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Define the navigation items
const navItems = [
  { name: "Shop", link: "/shop" },
  { name: "Feedback", link: "/feedback" },
  { name: "About", link: "/about" },
  { name: "Login", link: "/login" },
  { name: "Home", link: "/" },
];

// Sample product data
const products = [
  {
    id: 1,
    name: "Boost Tiktok (Like)",
    category: "Boost Like",
    description: "Tulis Jumlah Like Yg Dinginkan",
    price: 0.1,
    imageUrl: "/SCMED.png",
  },
  {
    id: 2,
    name: "Sample Product 2",
    category: "Category B",
    description: "This is a description for product 2.",
    price: 29.99,
    imageUrl: "/sample-product-2.jpg",
  },
  {
    id: 3,
    name: "Sample Product 3",
    category: "Category C",
    description: "This is a description for product 3.",
    price: 39.99,
    imageUrl: "/sample-product-3.jpg",
  },
];

const Home = () => {
  return (
    <main className="relative bg-background text-foreground flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Pass the defined navItems to FloatingNav */}
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />

        {/* Render the product list */}
        <ProductList products={products} />

        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
