// app/page.tsx
import { cookies } from "next/headers";

import { Suspense } from "react";
import Home from "@/components/home/page";

export default function main() {

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-semibold text-center text-[#01464B] mb-8 pt-12">
        Help Leaders with Profound Professional & Spiritual Growth
      </h1>
      <Home/>

      
    </div>
  );
}
