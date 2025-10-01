"use client";

import { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Login Successful!");
    } catch (err) {
      alert("❌ " + err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Login
      </button>
    </form>
  );
}
