// Define the type for price options
export type PriceOption = {
  plan?: string; // For options like Netflix with different plans
  duration?: string; // For options like YouTube and Spotify with different durations
  price: number; // The price associated with the plan or duration
};

// Define the type for a product
export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  priceOptions?: PriceOption[]; // Some products will have multiple price options
  price?: number; // Single price for products without options
  imageUrl: string;
};
