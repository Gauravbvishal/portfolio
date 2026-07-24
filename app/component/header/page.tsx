"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "@/app/context/page";

export default function Header() {
  const { theme, setTheme } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  function changeTheme() {
    setTheme((prev) => ({
      backgroundColor:
        prev.backgroundColor === "white" ? "black" : "white",
      textColor:
        prev.textColor === "black" ? "white" : "black",
    }));
  }

  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Vishal.dev
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Desktop Theme Button */}
        <button
          onClick={changeTheme}
          className="hidden md:block border rounded px-3 py-1"
        >
          Change Theme
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden px-6 pb-4 space-y-4 border-t"
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
          }}
        >
          <Link
            href="/"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            href="/projects"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="/skills"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>

          <Link
            href="/contact"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <button
            onClick={changeTheme}
            className="border rounded px-3 py-2 w-full"
          >
            Change Theme
          </button>
        </div>
      )}
    </header>
  );
}