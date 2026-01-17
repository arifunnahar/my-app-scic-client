"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch("https://my-app-scic-server.vercel.app/api/trees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price),
      }),
    });

    setLoading(false);
    router.push("/product");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold text-center text-green-700">
        Add New Product
      </h2>

      {/* Product Name */}
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        required
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded text-black"
      />

      {/* Category */}
      <input
        type="text"
        name="category"
        placeholder="Category (e.g. Gardening)"
        required
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded text-black"
      />

      {/* Price */}
      <input
        type="number"
        name="price"
        placeholder="Price (USD)"
        step="0.01"
        required
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded text-black"
      />

      {/* Image URL */}
      <input
        type="url"
        name="image"
        placeholder="Image URL"
        required
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded text-black"
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Product Description"
        required
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded text-black"
        rows={4}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        {loading ? "Saving..." : "Add Product"}
      </button>
    </form>
  );
}
