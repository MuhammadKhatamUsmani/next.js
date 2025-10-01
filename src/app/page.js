"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase"; // ✅ Firebase config import
import Image from "next/image";
import Example from "../components/Example";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase user ko listen karega
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* Navbar + Hero */}
      <Example />

      {/* Main Content */}
      <div className="p-6">
        {/* ✅ User Greeting */}
        <h1 className="text-3xl font-bold mb-4">
          {user ? `Welcome, ${user.displayName || user.email}` : "Welcome Guest"}
        </h1>

        <p className="mb-4">
          Ye mera pehla Next.js project hai. Main yahan practice kar raha hoon.
        </p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
          Click Me
        </button>

        <div className="mt-6">
          <Image
            src="/jf-17-pic.PNG" // public folder me file zaroori hai
            alt="jf-17-pic Logo"
            width={200}
            height={200}
          />
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Things I Like:</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Learning Next.js</li>
          <li>Making Projects</li>
          <li>Exploring Web Development</li>
        </ul>
      </div>
    </div>
  );
}
