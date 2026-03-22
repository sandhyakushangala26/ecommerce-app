"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import Loader from "@/components/Loader";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch products. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="p-8 text-center mt-20 text-red-600">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
