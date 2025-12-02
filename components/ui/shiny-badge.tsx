"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface ShinyBadgeProps {
    text: string;
    href?: string;
    className?: string;
}

export const ShinyBadge = ({ text, href = "#", className }: ShinyBadgeProps) => {
    return (
        <Link
            href={href}
            className={cn(
                "group relative inline-flex cursor-pointer bg-slate-900 !p-px font-semibold text-white shadow-2xl shadow-zinc-900 no-underline",
                className
            )}
        >
            <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
                <span className="absolute inset-0 rounded-[inherit] bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex h-full w-full items-center justify-center gap-2 rounded-[inherit] bg-zinc-950 px-8 ring-1 ring-white/10">
                <span>{text}</span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                    ></motion.path>
                </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </Link>
    );
};
