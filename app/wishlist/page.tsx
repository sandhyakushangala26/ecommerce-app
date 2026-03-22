"use client";

import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-16 text-center mt-10 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="text-6xl mb-6">💖</div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
          Your wishlist is empty
        </h1>
        <Link
          href="/"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-pink-500/30 hover:bg-pink-700 hover:shadow-pink-500/50 transition-all"
        >
          Find Favorites
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-10 tracking-tight">
        Your Wishlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col items-center gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl w-full flex justify-center h-48">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full text-center">
              <h2 className="font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-1 leading-tight">
                {item.title}
              </h2>
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4">
                ${item.price.toFixed(2)}
              </p>

              <div className="flex gap-3 justify-center">
                <Link
                  href={`/product/${item.id}`}
                  className="flex-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-white transition-colors text-sm text-center"
                >
                  View
                </Link>
                <button
                  onClick={() =>
                    toggleWishlist({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      image: item.image,
                    })
                  }
                  className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                  title="Remove from wishlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
