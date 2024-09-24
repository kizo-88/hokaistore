"use client";

import React, { useState, useEffect } from "react";
import MagicButton from "@/components/MagicButton";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { motion } from "framer-motion";
import { Search, ShoppingCart } from "lucide-react";

const navItems = [
  { name: "Shop", link: "/shop" },
  { name: "Feedback", link: "/feedback" },
  { name: "About", link: "/about" },
  { name: "Login", link: "/login" },
  { name: "Home", link: "/" },
];


interface Product {
  id: number;
  name: string;
  category:
    | "Socmed Boosting"
    | "In-Game Currency"
    | "Software Development"
    | "Premium Services"
    | "Boosting Rank";
  description: string;
  price: number;
  imageUrl: string;
  priceOptions?: { plan?: string; duration?: string; price: number }[];
}

const ProductCard: React.FC<Product> = ({
  id,
  name,
  category,
  description,
  price,
  imageUrl,
  priceOptions,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedPrice, setSelectedPrice] = useState<number>(price);

  const handleBuyNow = () => {
    const message = `I'm interested in buying ${quantity} of ${name} (${category}) for RM${(
      selectedPrice * quantity
    ).toFixed(2)}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+601117866914?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
  };

  return (
    <motion.div
      className="bg-card text-card-foreground rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      whileHover={{ scale: 1.03 }}
      layout
    >
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs shadow-lg transition-transform transform hover:scale-105">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        {priceOptions ? (
          <select
            className="w-full mb-4 p-2 border rounded"
            onChange={(e) => setSelectedPrice(Number(e.target.value))}
          >
            {priceOptions.map((option, index) => (
              <option key={index} value={option.price}>
                {option.plan || option.duration}: RM{option.price.toFixed(2)}
              </option>
            ))}
          </select>
        ) : (
          <p className="text-lg font-bold mb-2 text-primary">
            RM{price.toFixed(2)}
          </p>
        )}
        <div className="flex items-center mb-4">
          <button
            className="bg-secondary text-secondary-foreground rounded-l-md px-3 py-2"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <input
            type="number"
            className="w-16 text-center bg-input text-foreground border-y border-border py-2"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            min="1"
          />
          <button
            className="bg-secondary text-secondary-foreground rounded-r-md px-3 py-2"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <MagicButton
          title="Buy Now"
          icon={<ShoppingCart size={18} />}
          position="left"
          handleClick={handleBuyNow}
          otherClasses="w-full"
        />
      </div>
    </motion.div>
  );
};

type Category =
  | "Socmed Boosting"
  | "In-Game Currency"
  | "Software Development"
  | "Boosting Rank"
  | "Premium Services";

const products: Product[] = [
  {
    id: 1,
    name: "Instagram Followers Boost",
    category: "Socmed Boosting",
    description: "Increase your Instagram followers quickly and organically",
    price: 29.99,
    imageUrl: "/boosting.jpg",
  },
  {
    id: 2,
    name: "Twitter Retweets Package",
    category: "Socmed Boosting",
    description: "Get more retweets on your important tweets",
    price: 19.99,
    imageUrl: "/images/twitter-retweets.jpg",
  },
  {
    id: 3,
    name: "Facebook Page Likes Bundle",
    category: "Socmed Boosting",
    description: "Boost your Facebook page popularity with more likes",
    price: 39.99,
    imageUrl: "/images/facebook-likes.jpg",
  },
  {
    id: 4,
    name: "YouTube Views Accelerator",
    category: "Socmed Boosting",
    description: "Increase your YouTube video views rapidly",
    price: 49.99,
    imageUrl: "/images/youtube-views.jpg",
  },
  {
    id: 5,
    name: "TikTok Followers Growth",
    category: "Socmed Boosting",
    description: "Expand your TikTok audience with more followers",
    price: 0.01,
    imageUrl: "/images/tiktok-followers.jpg",
  },
  {
    id: 6,
    name: "Diamond Mobile Legends",
    category: "In-Game Currency",
    description: "1000 V-Bucks for Fortnite ",
    price: 9.99,
    imageUrl: "/images/fortnite-vbucks.jpg",
  },
  {
    id: 7,
    name: "Unknown Cash PUBGM",
    category: "In-Game Currency",
    description: "2000 Robux for use in Roblox games",
    price: 24.99,
    imageUrl: "/images/roblox-robux.jpg",
  },
  {
    id: 8,
    name: "Diamond FreeFire",
    category: "In-Game Currency",
    description: "100,000 Gold for World of Warcraft",
    price: 59.99,
    imageUrl: "/images/wow-gold.jpg",
  },
  {
    id: 9,
    name: "GTA Online Shark Card",
    category: "In-Game Currency",
    description: "$1,000,000 in-game cash for GTA Online",
    price: 19.99,
    imageUrl: "/images/gta-sharkcard.jpg",
  },
  {
    id: 10,
    name: "E-Football Coins",
    category: "In-Game Currency",
    description: "500,000 FUT Coins for FIFA Ultimate Team",
    price: 44.99,
    imageUrl: "/images/fifa-coins.jpg",
  },
  {
    id: 11,
    name: "Custom Web Development",
    category: "Software Development",
    description: "Bespoke website development tailored to your needs",
    price: 999.99,
    imageUrl: "/images/web-development.jpg",
  },
  {
    id: 12,
    name: "Mobile App Creation",
    category: "Software Development",
    description: "Professional mobile app development for iOS and Android",
    price: 1499.99,
    imageUrl: "/images/mobile-app.jpg",
  },
  {
    id: 13,
    name: "E-commerce Solution",
    category: "Software Development",
    description: "Complete e-commerce platform development and integration",
    price: 2499.99,
    imageUrl: "/images/ecommerce-solution.jpg",
  },
  {
    id: 14,
    name: "Database Design and Optimization",
    category: "Software Development",
    description: "Expert database design and performance tuning",
    price: 799.99,
    imageUrl: "/images/database-design.jpg",
  },
  {
    id: 15,
    name: "API Development and Integration",
    category: "Software Development",
    description: "Custom API development and third-party integrations",
    price: 1299.99,
    imageUrl: "/images/api-development.jpg",
  },
  {
    id: 16,
    name: "Cloud Migration Services",
    category: "Software Development",
    description: "Seamless migration of your systems to cloud platforms",
    price: 1799.99,
    imageUrl: "/images/cloud-migration.jpg",
  },
  {
    id: 17,
    name: "AI and Machine Learning Solutions",
    category: "Software Development",
    description: "Implement AI and ML capabilities in your software",
    price: 3999.99,
    imageUrl: "/images/ai-ml-solutions.jpg",
  },
  {
    id: 18,
    name: "DevOps Consultation",
    category: "Software Development",
    description: "Expert advice on implementing DevOps practices",
    price: 899.99,
    imageUrl: "/images/devops-consultation.jpg",
  },
  {
    id: 19,
    name: "Software Testing and QA",
    category: "Software Development",
    description: "Comprehensive software testing and quality assurance",
    price: 699.99,
    imageUrl: "/images/software-testing.jpg",
  },
  {
    id: 20,
    name: "UI/UX Design Services",
    category: "Software Development",
    description: "Professional UI/UX design for your digital products",
    price: 1099.99,
    imageUrl: "/images/ui-ux-design.jpg",
  },
  {
    id: 21,
    name: "Netflix Subscription",
    category: "Premium Services",
    description: "Choose your Netflix subscription plan",
    price: 20, // Default price
    priceOptions: [
      { plan: "Netflix Private", price: 20 },
      { plan: "Netflix Sharing", price: 10 },
      { plan: "Netflix Daily", price: 4 },
      { plan: "Netflix 1 Movie", price: 1 },
    ],
    imageUrl: "/images/netflix.jpg",
  },
  {
    id: 22,
    name: "YouTube Premium",
    category: "Premium Services",
    description: "YouTube Premium subscription for ad-free videos",
    price: 15, // Default price
    priceOptions: [
      { duration: "1 Month", price: 15 },
      { duration: "2 Months", price: 13 },
      { duration: "3 Months", price: 11 },
    ],
    imageUrl: "/images/youtube-premium.jpg",
  },
  {
    id: 23,
    name: "Spotify Premium",
    category: "Premium Services",
    description: "Enjoy ad-free music with Spotify Premium",
    price: 7, // Default price
    priceOptions: [
      { duration: "1 Month", price: 7 },
      { duration: "3 Months", price: 20 },
      { duration: "6 Months", price: 40 },
      { duration: "1 Year", price: 70 },
    ],
    imageUrl: "/images/spotify-premium.jpg",
  },
];

const ShopPage: React.FC = () => {
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  
  useEffect(() => {
    const filterProducts = () => {
      let filtered = products;

      if (selectedCategory !== "All") {
        filtered = filtered.filter(
          (product: Product) => product.category === selectedCategory
        );
      }

      if (searchTerm) {
        filtered = filtered.filter((product: Product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setSortedProducts(filtered);
    };

    filterProducts();
  }, [selectedCategory, searchTerm]);

  return (
    
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>

      <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-input text-foreground border border-border rounded-md pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={18}
          />
        </div>
        <select
          className="w-full md:w-64 bg-input text-foreground border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="All">All Categories</option>
          <option value="Socmed Boosting">Social Media Boosting</option>
          <option value="In-Game Currency">In-Game Currency</option>
          <option value="Software Development">Software Development</option>
          <option value="Boosting Rank">Boosting Rank</option>
          <option value="Premium Services">Premium Services</option>
        </select>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        layout
      >
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </motion.div>
    </div>
    
  );
};

export default ShopPage;
