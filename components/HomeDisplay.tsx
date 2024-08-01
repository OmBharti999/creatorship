import Image from "next/image";
import React from "react";
import Logo, { LogoWithName } from "./shared/Logo";
import { Button } from "./ui/button";
import Link from "next/link";

export const Nav = () => {
  return (
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
          className="bg-white text-violet-800 hover:bg-violet-100 hover:text-violet-900 transition-all font-bold max-[450px]:hidden"
        >
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </nav>
  );
};

export const HeroSection = () => {
  return (
    <section className="mt-5 flex min-h-[60vh] xl:min-h-[80vh] mx-auto bg-hero-pattern bg-cover bg-no-repeat ">
      <div className="bg-black bg-opacity-50 w-full flex justify-center flex-col items-center">
        <h1 className="text-5xl xl:text-6xl font-bold mb-4">
          Build. Contribute. Evolve.
        </h1>
        <p className="text-lg">
          Shape the merchant and creators experience for the first time&apos;s
          core product, the admin.
        </p>
      </div>
    </section>
  );
};

export const ContentSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12 ">
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
    </section>
  );
};

const PricingCard = ({
  title,
  price,
  features,
  isPopular,
}: {
  title: string;
  price: number;
  features: {
    text: string;
    included: boolean;
    lastUpdated?: string;
  }[];
  isPopular: boolean;
}) => (
  <div
    className={`bg-neutral-950 rounded-lg p-6 ${
      isPopular ? "border-2 border-yellow-500" : ""
    }`}
  >
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    <div className="flex items-baseline mb-6">
      <span className="text-gray-500 line-through text-lg mr-2">
        ${price + 50}
      </span>
      <span className="text-4xl font-bold text-white">${price}</span>
      <span className="text-gray-400 ml-1">USD</span>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          {feature.included ? (
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span className={feature.included ? "text-white" : "text-gray-500"}>
            {feature.text}
          </span>
          {feature?.lastUpdated && (
            <span className="ml-2 bg-green-600 text-xs text-white px-2 py-1 rounded-full">
              {feature?.lastUpdated}
            </span>
          )}
        </li>
      ))}
    </ul>
    <Link
      href="/sign-up"
      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded flex items-center justify-center"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      Get ShipFast
    </Link>
    <p className="text-center text-gray-500 mt-4">One-time payment</p>
  </div>
);

export const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      price: 0,
      features: [
        { text: "NextJS app", included: true },
        { text: "All SEO tags", included: true },
        { text: "MongoDB with schema", included: true },
        { text: "Mailgun emails", included: true },
        { text: "Stripe payments", included: true },
        { text: "Google OAuth & Magic Links", included: true },
        { text: "Components & animations", included: false },
        { text: "ChatGPT prompts for terms & privacy", included: false },
        { text: "1 year of updates", included: false },
      ],
      isPopular: false,
    },
    {
      title: "All-in",
      price: 69,
      features: [
        { text: "NextJS app", included: true },
        { text: "All SEO tags", included: true },
        { text: "MongoDB with schema", included: true },
        { text: "Mailgun emails", included: true },
        { text: "Stripe payments", included: true },
        { text: "Google OAuth & Magic Links", included: true },
        { text: "Components & animations", included: true },
        { text: "ChatGPT prompts for terms & privacy", included: true },
        {
          text: "1 year of updates",
          included: true,
          lastUpdated: "30 days money back guarantee",
        },
      ],
      isPopular: true,
    },
  ];

  return (
    <div className="bg-white/90 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-neutral-950 mb-2">Pricing</h1>
      <p className="text-gray-900 mb-8">
        Save hours of repetitive code and ship faster!
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black w-full min-h-72 flex justify-center items-center flex-col gap-2">
      <LogoWithName />
      <h4 className="text-gray-300 mt-5">
        Ship your startup in days, not weeks
      </h4>
      <h5 className="text-gray-400">
        © {new Date().getFullYear()} Creatorship.io - All rights reserved
      </h5>
    </footer>
  );
};

export const HomeDisplay = () => {
  return (
    <div className="bg-[#000000] text-white min-h-screen p-8 pt-6">
      {/* nav */}
      <Nav />
      {/* Hero section */}
      <HeroSection />
      {/* Content Sections */}
      <ContentSection />
      {/* pricing */}
      <Pricing />
      {/* Footer */}
      <Footer />
      {/* <div className="flex justify-center mt-12">
        <img
          src="/path-to-your-image.png"
          alt="Footer Image"
          className="w-32 h-32"
        />
      </div> */}
    </div>
  );
};
