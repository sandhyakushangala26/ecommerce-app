"use client";

import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="group bg-white dark:bg-slate-900 rounded-2xl p-6 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col h-full"
    >
      <div className="h-48 w-full relative mb-6 p-4 bg-white rounded-xl">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h2 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-2 leading-tight mb-2">
          {product.title}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        <div className="mt-auto">
          <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
