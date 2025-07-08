// app/page.tsx
import { cookies } from "next/headers";

import { Suspense } from "react";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8 pt-12">
        Help Leaders with Profound Professional & Spiritual Growth
      </h1>

      <section className="max-w-3xl mx-auto text-lg text-blue px-4">
        <p className="mb-6">
          Welcome to our platform dedicated to helping leaders achieve growth in
          both their professional and spiritual lives.
        </p>
      </section>
    </div>
  );
}
