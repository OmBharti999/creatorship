import Image from "next/image";
import React from "react";
import Logo, { LogoWithName } from "./shared/Logo";
import { Button } from "./ui/button";
import Link from "next/link";

export const HomeDisplay = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* nav */}
      <nav className="flex gap-3 text-xl font-bold items-center justify-between">
        <LogoWithName />
        <div className="space-x-4">
          <Button
            asChild
            className="bg-violet-700 hover:bg-violet-800 hover:text-violet-100 transition-all font-bold"
          >
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button
            asChild
            className="bg-white text-violet-800 hover:bg-violet-100 hover:text-violet-900 transition-all font-bold"
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </nav>
      {/* Hero section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Build. Contribute. Evolve.</h1>
        <p className="text-lg">
          Shape the merchant experience for Shopify&apos;s core product, the
          admin.
        </p>
      </section>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {/* Foundations */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Foundations</h2>
          <p className="text-gray-400">
            Fundamental design guidance for creating quality admin experiences.
          </p>
        </div>

        {/* Components */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Components</h2>
          <p className="text-gray-400">
            Reusable elements and styles, packaged through code, for building
            admin interfaces.
          </p>
        </div>

        {/* Tokens */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Tokens</h2>
          <p className="text-gray-400">
            Coded names that represent design decisions for color, spacing,
            typography, and more.
          </p>
        </div>

        {/* Icons */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Icons</h2>
          <p className="text-gray-400">
            Over 400 carefully designed icons focused on commerce and
            entrepreneurship.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center mt-12">
        <img
          src="/path-to-your-image.png"
          alt="Footer Image"
          className="w-32 h-32"
        />
      </div>
    </div>
  );
};
