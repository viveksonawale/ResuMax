"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useModal } from "@/components/providers/modal-provider";

const navLinks = [
    { name: "AI Resume Builder", href: "/#resume-preview" },
    { name: "ATS Analysis", href: "/ats-analysis" },
    { name: "Templates", href: "/templates" },
    { name: "Pricing", href: "/#pricing" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { openModal } = useModal();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={cn(
            "fixed z-50 flex justify-center transition-all duration-300 ease-in-out left-0 right-0",
            isScrolled ? "top-4 px-4" : "top-0"
        )}>
            <nav className={cn(
                "relative flex items-center justify-between transition-all duration-300 ease-in-out",
                isScrolled
                    ? "w-full max-w-6xl rounded-2xl border bg-background/80 px-6 py-4 shadow-lg backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
                    : "w-full max-w-7xl bg-transparent px-6 py-6"
            )}>
                <div className="flex items-center gap-2">
                    <Logo />
                </div>

                {/* Desktop Nav - Centered */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-base font-medium transition-colors hover:text-primary",
                                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-foreground/80 hover:text-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <div onClick={openModal} className="cursor-pointer">
                        <Button variant="gradient" size="lg" className="rounded-xl px-8 text-base">Get Started</Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border bg-background p-4 shadow-lg md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2 mt-2">
                                <div onClick={() => { setIsMobileMenuOpen(false); openModal(); }} className="cursor-pointer">
                                    <Button className="w-full rounded-full" variant="default">Get Started</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
