import { Inter } from "next/font/google";
import '../styles/globals.css';
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Premium E-Commerce",
  description: "Unbeatable tech products and sleek design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300`}
      >
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="mx-auto max-w-7xl pt-10 px-4 md:px-8">
              {children}
            </main>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
