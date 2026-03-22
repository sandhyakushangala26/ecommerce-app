"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Checkout() {
  const { cart } = useCart();
  const router = useRouter();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
    router.push("/");
  };

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
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8">
          Checkout Details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              Full Name
            </label>
            <input
              placeholder="John Doe"
              required
              className="w-full border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              required
              className="w-full border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white p-4 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              Shipping Address
            </label>
            <textarea
              placeholder="123 Shopping Lane, Tech City, 10001"
              required
              className="w-full border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white p-4 rounded-xl h-32 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all font-medium resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 active:scale-95 transition-all mt-4"
          >
            Place Order
          </button>
        </form>
      </div>
      <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-inner h-fit sticky top-24">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">
          Order Summary
        </h2>
        <div className="space-y-6 mb-8 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 w-12 object-contain bg-slate-50 dark:bg-slate-800 p-1 rounded-lg"
                />
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="font-bold text-slate-900 dark:text-white line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500">
                    Qty: {item.qty}
                  </p>
                </div>
              </div>
              <span className="font-extrabold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t-2 border-slate-200 dark:border-slate-700 pt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              Subtotal
            </span>
            <span className="font-bold text-slate-900 dark:text-white">
              ${total.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              Shipping
            </span>
            <span className="font-bold text-green-500">Free</span>
          </div>
          <div className="flex justify-between items-center text-xl">
            <span className="font-black text-slate-900 dark:text-white">
              Total
            </span>
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
