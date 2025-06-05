'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold">Telegram Mini App</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
        </button>
        <nav className="hidden md:flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/signup">Sign Up</Link>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/signup" className="block py-2">Sign Up</Link>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block py-2">Twitter</a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="block py-2">Telegram</a>
        </div>
      )}

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between p-8 gap-8 flex-1">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Introducing Our Telegram Mini App</h1>
          <h2 className="text-2xl text-gray-600 mb-4">A seamless experience right inside Telegram</h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/next.svg"
              alt="App Preview"
              fill
              style={{ objectFit: "cover", borderRadius: "0.5rem" }}
            />
          </div>
        </div>
      </main>

      {/* Demo Video */}
      <section className="w-full p-8 bg-gray-100">
        <div className="w-full max-w-4xl mx-auto aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white p-6 shadow-inner mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/signup">Sign Up</Link>
          </div>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}