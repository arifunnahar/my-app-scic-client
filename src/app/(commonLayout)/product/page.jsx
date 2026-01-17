"use client"

import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductsCard';

const Product = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/trees`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading products...</p>;
  }

  return (
    <div className="bg-green-50 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-center py-8 text-gray-900">
        All Products
      </h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center mt-10 text-gray-600">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
