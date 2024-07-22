import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creatorship",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-violet-200">
      {children}
    </section>
  );
}
