'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-blue-200 text-gray-700 font-mono">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-blue-300 shadow-md">
        <h1>
          <Image 
            src="/logo.svg" 
            alt="Storacha Logo" 
            width="150" 
            height="100" 
          />
        </h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
        </button>
        <nav className="hidden md:flex gap-4">
          <Link
            href="https://storacha.network?utm_source=tg-mini-app&utm_medium=website&utm_campaign=tg-mini-app-launch"
            className="px-4 py-2 bg-blue-700 text-white rounded-full transition hover:opacity-50"
          >
            Home
          </Link>
          <Link
            href="https://t.me/storacha_bot/backup?startup=utm_source=tg-landing-page&utm_medium=website&utm_campaign=tg-mini-app-launch"
            className="px-4 py-2 bg-blue-700 text-white rounded-full transition hover:opacity-50"
          >
            Sign Up
          </Link>
          <a
            href="https://x.com/storachanetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-700 text-white rounded-full transition hover:opacity-50"
          >
            Twitter
          </a>
          <a
            href="https://t.me/storachanetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-700 text-white rounded-full transition hover:opacity-50"
          >
            Telegram
          </a>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-300 shadow-md p-4 flex flex-col gap-2">
          <Link
            href="/"
            className="px-4 py-2 bg-blue-700 text-white rounded-full transition hover:opacity-50 text-center"
          >
            Home
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-700 text-white rounded-full transition hover:opacity-50 text-center"
          >
            Sign Up
          </Link>
          <a
            href="https://x.com/storachanetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-700 text-white rounded-full transition hover:opacity-50 text-center"
          >
            Twitter
          </a>
          <a
            href="https://t.me/storachanetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-700 text-white rounded-full transition hover:opacity-50 text-center"
          >
            Telegram
          </a>
        </div>
      )}

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between p-8 gap-8 flex-1">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Introducing the Storacha TG Mini App</h1>
          <h2 className="text-2xl text-gray-700 mb-4">A seamless experience right inside Telegram</h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi.
          </p>
          <div className="flex justify-center ">
            <a
              href="https://storacha.network/try" // ← update this to your actual "Try it out" URL
              className="px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:opacity-50 transition"
            >
              Try It Now!
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/hero.png"
              alt="App Preview"
              fill
              style={{ objectFit: "cover", borderRadius: "0.5rem" }}
              className="shadow-lg"
            />
          </div>
        </div>
      </main>

      {/* Demo Video */}
      <section className="w-full p-8 ">
        <div className="w-full max-w-4xl mx-auto aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/12pqEPC3Ai8"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Newsletter Sign Up */}
      <section className="flex justify-center items-center p-8">
        <a
          href="https://945c6cfe.sibforms.com/serve/MUIFAM0SND7EuH6pZs2m9eqPqTambD9mwROTaag-vOkkW96LZxaPT1zaEBBjY9taIaa2CCwFwh-laK3fWcVdBm2HYhwYoSOMHtAVQ78YE0FJLoddLhJRge3EkFNzwjP5yiBDLelSyJauKbxns0Ya9Vah46nzX7n8jLx4cEy5AHJkA5a2aa21vltm90lfB394I1XklUtQBeNmvWd9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-800 text-white font-semibold rounded-full shadow transition hover:shadow-xl hover:scale-105 hover:opacity-50"
        >
          Sign Up for our Newsletter
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-blue-300 p-6 shadow-inner mt-auto">
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="https://storacha.network?utm_source=tg-mini-app&utm_medium=website&utm_campaign=tg-mini-app-launch"
              className="text-center px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition opacity-50 hover:opacity-100"
            >
              Home
            </Link>
            <Link
              href="https://t.me/storacha_bot/backup?startup=utm_source=tg-landing-page&utm_medium=website&utm_campaign=tg-mini-app-launch"
              className="text-center px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition opacity-50 hover:opacity-100"
            >
              Sign Up
            </Link>
            <a
              href="https://x.com/storachanetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition opacity-50 hover:opacity-100"
            >
              Twitter
            </a>
            <a
              href="https://t.me/storachanetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition opacity-50 hover:opacity-100"
            >
              Telegram
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
