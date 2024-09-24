import React from "react";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Array<{
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    imageUrl: string;
  }>;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
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
  );
};

export default ProductList;
