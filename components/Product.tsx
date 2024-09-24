import React, { useState } from "react";
import { PriceOption } from "@/components/types"; // Tambah import ini di bahagian atas fail

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  priceOptions: PriceOption[]; // Tambah ini
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  priceOptions,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    const message = `I'm interested in buying ${quantity} of ${name} for RM${(
      price * quantity
    ).toFixed(2)}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+601117866914?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="product max-w-sm bg-card text-card-foreground border border-border rounded-lg shadow-md p-6 m-4 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500">
      <img
        src={imageUrl}
        alt={name}
        className="product-image w-full h-48 object-cover rounded-md"
      />
      <h2 className="product-name text-xl font-semibold my-2">{name}</h2>
      <p className="product-description text-muted-foreground">{description}</p>
      <p className="product-price text-lg font-bold my-2">
        RM{price.toFixed(2)}
      </p>

      <div className="product-controls mt-4">
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-foreground"
        >
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          className="mt-1 block w-full px-3 py-2 bg-input text-foreground border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          min="1"
        />
        <button
          onClick={handleAddToCart}
          className="add-to-cart-btn mt-4 w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        >
          Buy It Lessgo
        </button>
      </div>
    </div>
  );
};

export default Product;
