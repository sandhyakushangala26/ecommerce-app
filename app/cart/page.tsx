"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-16 text-center mt-10 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
          Your cart is empty
        </h1>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50 transition-all"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-10 tracking-tight">
        Your Cart
      </h1>
      <div className="space-y-6 mb-10">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-shadow hover:shadow-md"
          >
            <div className="bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 object-contain"
              />
            </div>
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <h2 className="font-bold text-lg text-slate-900 dark:text-white mb-1 leading-tight">
                {item.title}
              </h2>
              <p className="text-blue-600 dark:text-blue-400 font-bold">
                ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 p-2 rounded-xl">
              <button
                onClick={() => updateQuantity(item.id, item.qty - 1)}
                className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-700 text-slate-800 dark:text-white rounded-lg shadow-sm hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              >
                -
              </button>
              <span className="w-6 text-center font-bold text-slate-900 dark:text-white">
                {item.qty}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.qty + 1)}
                className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-700 text-slate-800 dark:text-white rounded-lg shadow-sm hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              >
                +
              </button>
            </div>
            <div className="w-full sm:w-32 text-center sm:text-right font-black text-xl text-slate-900 dark:text-white">
              ${(item.price * item.qty).toFixed(2)}
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
              title="Remove from cart"
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
        ))}
      </div>
      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">
            Total Amount
          </p>
          <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            ${total.toFixed(2)}
          </p>
        </div>
        <Link
          href="/checkout"
          className="w-full sm:w-auto text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
