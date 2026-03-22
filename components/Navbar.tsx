"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const pathname = usePathname();
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
        >
          PrimeCommerce
        </Link>

        <div className="flex gap-6 font-medium text-slate-700 dark:text-slate-300">
          <Link
            href="/cart"
            className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 ${pathname === "/cart" ? "text-blue-600 dark:text-blue-400" : ""}`}
          >
            Cart
            {cartCount > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            href="/wishlist"
            className={`hover:text-pink-600 dark:hover:text-pink-400 transition-colors flex items-center gap-1 ${pathname === "/wishlist" ? "text-pink-600 dark:text-pink-400" : ""}`}
          >
            Wishlist
            {wishlist.length > 0 && (
              <span className="bg-pink-600 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
                {wishlist.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
