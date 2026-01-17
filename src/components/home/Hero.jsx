"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductsCard";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://my-app-scic-server.vercel.app/api/trees"
        );
        const data = await res.json();
        setProducts(data.slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-8">
        Our Featured Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
