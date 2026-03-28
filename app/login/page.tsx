"use client";

import { useState } from "react";
import { login } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      type: "password",
      email: form.email,
      password: form.password,
    };
    try {
      const data = await login(payload);
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      if (data.role === "Member") {
        router.push("/events");
      } else if (data.role === "Public Member") {
        alert("Upgrade Your Account");
      } else {
        router.push("/events");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-glass-card">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleFormChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50 transition-all"
        >
          Login
        </button>
      </div>
    </div>
  );
}
