"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck, Leaf, Star, Heart, Share2 } from "lucide-react";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/trees/${id}`);
        const data = await res.json();
        setProduct(data);
        setActiveImg(data.image);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProductDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (!product) return <p className="text-center mt-10 text-red-500">Product not found!</p>;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* --- Navbar --- */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-all">
            <ArrowLeft size={18} /> Back to Shop
          </button>
          <div className="flex items-center gap-2">
            <Leaf className="text-emerald-600" size={20} />
            <span className="font-black text-slate-900 hidden md:block">Pure Organic</span>
          </div>
          <div className="flex gap-4">
            <Heart className="text-slate-400 hover:text-red-500 cursor-pointer" size={20} />
            <Share2 className="text-slate-400 hover:text-blue-500 cursor-pointer" size={20} />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* --- Left: Images --- */}
          <div className="lg:col-span-7">
            <div className="sticky top-28 space-y-6">
              <div className="relative group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={activeImg} 
                  alt={product.name} 
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform"
                />
                
              </div>

              {/* --- Image previews --- */}
              <div className="grid grid-cols-4 gap-4">
                <img 
                  src={product.image} 
                  alt="preview" 
                  className="w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-white hover:border-emerald-500"
                  onClick={() => setActiveImg(product.image)}
                />
              </div>
            </div>
          </div>

          {/* --- Right: Product Info --- */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-xl w-fit mb-4 border border-emerald-100 font-black text-xs uppercase">
              <ShieldCheck size={14} /> Authentic
            </span>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">{product.name}</h1>
            <p className="text-slate-500 mb-6 italic font-medium">{product.category}</p>

            <div className="flex items-center gap-3 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />)}
              <span className="text-xs font-bold text-slate-400 border-l pl-2">128 Reviews</span>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-black text-emerald-600">${product.price}</span>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed mb-10 border-l-4 border-emerald-100 pl-6">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-4 bg-white border border-slate-100 rounded-xl flex items-center gap-3 shadow-sm">
                <ShieldCheck size={20} className="text-emerald-600" />
                <p className="text-xs font-black uppercase text-slate-700">100% Pure Guaranteed</p>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-xl flex items-center gap-3 shadow-sm">
                <Truck size={20} className="text-blue-600" />
                <p className="text-xs font-black uppercase text-slate-700">Home Delivery</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => toast.success("Added to cart")} 
                className="flex-[2] py-4 bg-slate-900 text-white rounded-xl font-black text-lg flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all"
              >
                <ShoppingCart size={20} /> Buy Now
              </button>
              <button className="flex-1 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-xl font-black hover:bg-slate-50 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
