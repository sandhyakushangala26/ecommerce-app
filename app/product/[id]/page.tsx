"use client";

import { use, useEffect, useState } from "react";
import { getProduct } from "@/lib/api";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Loader from "@/components/Loader";

export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();
  const { toggleWishlist, wishlist } = useWishlist();

  useEffect(() => {
    getProduct(id).then(setProduct);
  }, [id]);

  if (!product)
    return (
      <div className="flex justify-center mt-32">
        <Loader />
      </div>
    );
  const isWishlisted = wishlist.some((p) => p.id === product.id);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
      <div className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 flex items-center justify-center">
        <img
          src={product.image}
          className="max-h-96 object-contain"
          alt={product.title}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
          {product.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
          {product.description}
        </p>
        <div className="mb-10">
          <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
              })
            }
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
          >
            Add to Cart
          </button>
          <button
            onClick={() =>
              toggleWishlist({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
              })
            }
            className={`flex-1 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all active:scale-95 ${
              isWishlisted
                ? "border-pink-500 text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-500/10"
                : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
          >
            {isWishlisted ? "❤️ Added to Wishlist" : "🤍 Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
