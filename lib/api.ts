const BASE_URL = "https://fakestoreapi.com";
// const base_url="https://staging-backend.thebobproject.co/api/v2/login";

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const getProduct = async (id: string) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};

export const login = async (payload:any) => {
  const res = await fetch("https://staging-backend.thebobproject.co/api/v2/login",{
    method:"POST",
    headers:{
      'Content-Type':"application/json"
    },
    body:JSON.stringify(payload)
  }
);

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchEvents=async(filter:any)=>{
  const query=new URLSearchParams(filter).toString(); 
  const res=await fetch(`https://staging-backend.thebobproject.co/api/public/v2/event/list?${query}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
  
}

