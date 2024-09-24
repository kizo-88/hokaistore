import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./Card";
import { Button } from "./Button";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  description,
  price,
  imageUrl,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleBuyNow = () => {
    const message = `I'm interested in buying ${quantity} of ${name} for RM${(
      price * quantity
    ).toFixed(2)}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+601117866914?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-[200px] object-cover rounded-t-lg"
        />
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-lg font-bold mt-2">RM{price.toFixed(2)}</p>
        <label
          htmlFor={`quantity-${id}`}
          className="block text-sm font-medium text-gray-700 mt-2"
        >
          Quantity:
        </label>
        <input
          type="number"
          id={`quantity-${id}`}
          className="mt-1 block w-full px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          min="1"
        />
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
