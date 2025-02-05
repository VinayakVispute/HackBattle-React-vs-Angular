/** @format */

import React, { useContext } from "react";
import DotRing from "../Components/DotRing/DotRing";
import { MouseContext } from "../context/mouse-context";

export default function HeroSection() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className="bg-slate-900">
      <DotRing />
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              DevRoute: Your Ultimate Technology Roadmap
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p
              className="text-lg text-gray-400"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              DevRoute Navigator focuses on technology ecosystems like React,
              providing an interactive hierarchical tree structure.
            </p>
          </div>

          <div className="text-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Get started
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round" // Corrected attribute name
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
