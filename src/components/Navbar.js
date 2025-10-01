"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ Firebase user track karna
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">My Website</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ✅ Right Side (Login / Logout) */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {user ? (
              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-red-600 hover:text-red-800"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-semibold text-gray-900 mr-4"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-sm font-semibold text-indigo-600"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
