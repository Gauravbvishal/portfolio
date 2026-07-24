"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "@/app/context/page";

export default function Header() {
    const { theme, setTheme } = useContext(UserContext);

    function changeTheme() {
        setTheme((prev:any) => ({
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
                <Link href="/" className="text-2xl font-bold">
                    Vishal.dev
                </Link>

                <nav className="hidden md:flex gap-8">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/skills">Skills</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                <button
                    onClick={changeTheme}
                    className="border rounded px-3 py-1"
                >
                    Change Theme
                </button>
            </div>
        </header>
    );
}