"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Instagram Followers Boost",
    category: "Socmed Boosting",
    description: "Get more followers for your Instagram account.",
    price: 49.99,
    imageUrl: "/images/instagram-boost.jpg",
  },
  // ... (rest of the products array remains the same)
];

const Product = () => {
  const categories = [
    "Socmed Boosting",
    "In-Game Currency",
    "Software Development",
    "Boosting Rank",
  ];

  return (
    <main className="relative bg-background text-foreground flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "About", link: "#about" },
            { name: "Product", link: "/Product" },
            { name: "Testimonials", link: "#testimonials" },
            { name: "Login", link: "#login" },
          ]}
        />

        <div className="py-10">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h2 className="text-2xl font-bold mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      category={product.category}
                      description={product.description}
                      price={product.price}
                      imageUrl={product.imageUrl}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Product;
