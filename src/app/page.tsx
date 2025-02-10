import React from 'react';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <div className="max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            Welcome to Your Next.js App
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
            A modern starter template with Next.js, Tailwind CSS, TypeScript, and Prisma
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              Get started
            </button>
            <button
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
