// src/components/MadeByBadge.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image"; // if you have a logo image

export default function MadeByBadge() {
  return (
    <div className="mt-8 flex justify-center">
      <Link
        href="https://www.simpleflowtech.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-black/70 text-white text-sm px-3 py-2 rounded-full shadow-lg hover:bg-black/90 transition-all duration-200 backdrop-blur-sm"
      >
        {/* Optional logo */}

        <span>Powered by</span>
        <Image
          src="/images/sft.png" // replace with your small logo path
          alt="SimpleFlow Tech Logo"
          width={20}
          height={20}
          className="rounded-full"
        />
        <span> SimpleFlow Tech 🇨🇦</span>
      </Link>
    </div>
  );
}
