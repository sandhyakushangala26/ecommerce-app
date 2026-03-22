const BASE_URL = "https://fakestoreapi.com";
export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const getProduct = async (id: string) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};
