import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-sm mb-1">Category: {product.category}</p>
        <p className="text-gray-900 font-semibold text-lg mb-2">${product.price}</p>
        
      </div>
      <div className="px-6 py-4">
        <Link href={`/product/${product._id}`}>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
           View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
