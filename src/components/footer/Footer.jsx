import Link from "next/link";
import { Leaf, Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="text-emerald-500" size={26} />
            <h2 className="text-xl font-black text-white">Green Hub</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            We provide 100% organic products and plants to make your life greener and healthier.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-emerald-400">Home</Link></li>
            <li><Link href="/product" className="hover:text-emerald-400">All Products</Link></li>
            <li><Link href="/addTree" className="hover:text-emerald-400">Add Product</Link></li>
         
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">Help Center</li>
            <li className="hover:text-emerald-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-emerald-400 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <p className="text-sm text-slate-400 mb-3">
            Email: support@greenhub.com
          </p>
          <div className="flex gap-4">
            <Facebook className="hover:text-blue-500 cursor-pointer" />
            <Instagram className="hover:text-pink-500 cursor-pointer" />
            <Twitter className="hover:text-sky-400 cursor-pointer" />
            <Mail className="hover:text-emerald-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Green Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
