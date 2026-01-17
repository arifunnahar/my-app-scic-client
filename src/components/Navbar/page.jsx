'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Check auth on mount
  useEffect(() => {
    const auth = Cookies.get('auth');
    setIsLoggedIn(!!auth);
  }, []);

  const handleLogout = () => {
    Cookies.remove('auth');
    setIsLoggedIn(false);
    setMenuOpen(false);
    router.push('/login');
  };

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Leaf className="text-emerald-300" size={32} />
          <Link href="/" className="text-2xl font-bold">
            Green Hub
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/product">All Products</Link>
          <Link href="/aboutUs">About Us</Link>
          <Link href="/contactUs">Contact</Link>

          {isLoggedIn && <Link href="/addTree">Add Product</Link>}

          {!isLoggedIn ? (
            <Link
              href="/login"
              className="bg-white text-green-700 px-4 py-1 rounded"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-1 rounded"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-600 px-6 py-6">
          <div className="flex flex-col space-y-4 text-lg">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="border-b border-green-400 pb-2"
            >
              Home
            </Link>

            <Link
              href="/product"
              onClick={() => setMenuOpen(false)}
              className="border-b border-green-400 pb-2"
            >
              All Products
            </Link>

            <Link
              href="/aboutUs"
              onClick={() => setMenuOpen(false)}
              className="border-b border-green-400 pb-2"
            >
              About Us
            </Link>

            <Link
              href="/contactUs"
              onClick={() => setMenuOpen(false)}
              className="border-b border-green-400 pb-2"
            >
              Contact
            </Link>

            {isLoggedIn && (
              <Link
                href="/addTree"
                onClick={() => setMenuOpen(false)}
                className="border-b border-green-400 pb-2"
              >
                Add Product
              </Link>
            )}

            {!isLoggedIn ? (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-white text-green-700 py-2 rounded text-center font-medium"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 py-2 rounded font-medium"
              >
                Logout
              </button>
            )}

          </div>
        </div>
      )}
    </nav>
  );
}
