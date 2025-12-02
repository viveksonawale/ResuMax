"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShinyBadge } from "@/components/ui/shiny-badge";
import { DotBackground } from "@/components/ui/dot-background";
import { useModal } from "@/components/providers/modal-provider";
import { useState, useEffect } from "react";

import { motion, Variants } from "framer-motion";

export function Hero() {
    const { openModal } = useModal();

    // Score animation state
    const [currentScoreIndex, setCurrentScoreIndex] = useState(0);
    const scoreVariants = [
        { score: 92, ats: 100, impact: 85, keyword: 90 },
        { score: 89, ats: 95, impact: 82, keyword: 88 },
        { score: 75, ats: 78, impact: 70, keyword: 76 },
        { score: 95, ats: 100, impact: 92, keyword: 94 },
    ];

    // Cycle through scores every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScoreIndex((prev) => (prev + 1) % scoreVariants.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentScores = scoreVariants[currentScoreIndex];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-[80vh] flex items-center overflow-hidden">
            {/* Top Right Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
            {/* Bottom Left Blur */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2 mix-blend-screen" />

            <DotBackground />

            <div className="container px-4 md:px-6">
                <motion.div
                    className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="flex flex-col justify-center space-y-8">
                        <motion.div className="space-y-4" variants={itemVariants}>
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                Free Online Resume Builder
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none">
                                Build a standout resume
                                with <span className="text-primary text-glow">zero cost</span>
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-2xl">
                                Your first resume is completely free. <br></br>Unlimited downloads. No hidden costs.<br></br> Yes, really 🚀
                            </p>
                        </motion.div>
                        <motion.div className="flex flex-col gap-4 min-[400px]:flex-row" variants={itemVariants}>
                            <div onClick={openModal}>
                                <Button size="lg" variant="gradient" className="w-full min-[400px]:w-auto h-16 text-xl px-8 rounded-xl">
                                    Build My Free Resume
                                    <ArrowRight className="ml-2 h-6 w-6" />
                                </Button>
                            </div>
                            <ShinyBadge text="Try ATS Scan Demo" href="/ats-analysis" className="h-16 text-lg rounded-xl" />
                        </motion.div>
                        <motion.div className="flex flex-wrap gap-x-6 gap-y-2 text-base text-muted-foreground" variants={itemVariants}>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span>Free forever</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span>Setup in 2 minutes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span>Optimized for modern ATS systems</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span>Engineered for software roles (SDE, DevOps, Data)</span>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div className="relative mx-auto w-full max-w-[420px] lg:max-w-none" variants={itemVariants}>
                        <div className="relative rounded-xl border bg-background shadow-2xl overflow-hidden animate-float">
                            <BorderBeam size={200} duration={12} delay={9} />
                            <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
                                <div className="flex gap-1.5">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-muted-foreground">resustack-analysis.pdf</div>
                            </div>
                            <div className="p-6 grid gap-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">ResuStack Score</h3>
                                        <p className="text-sm text-muted-foreground">Based on FAANG standards</p>
                                    </div>
                                    <div className="relative w-16 h-16">
                                        <svg className="w-full h-full transform -rotate-90">
                                            {/* Background circle */}
                                            <circle
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="none"
                                                className="text-muted"
                                            />
                                            {/* Animated progress circle */}
                                            <motion.circle
                                                key={`circle-${currentScores.score}`}
                                                cx="32"
                                                cy="32"
                                                r="28"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="none"
                                                strokeDasharray={`${2 * Math.PI * 28}`}
                                                initial={{ strokeDashoffset: `${2 * Math.PI * 28}` }}
                                                animate={{ strokeDashoffset: `${2 * Math.PI * 28 * (1 - currentScores.score / 100)}` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="text-primary"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <motion.div
                                            key={currentScores.score}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0 flex items-center justify-center text-xl font-bold text-primary"
                                        >
                                            {currentScores.score}
                                        </motion.div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>ATS Parseability</span>
                                            <motion.span
                                                key={`ats-${currentScores.ats}`}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="font-medium text-green-600"
                                            >
                                                {currentScores.ats}%
                                            </motion.span>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                            <motion.div
                                                className="h-2 rounded-full bg-green-600"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${currentScores.ats}%` }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Impact Quantification</span>
                                            <motion.span
                                                key={`impact-${currentScores.impact}`}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="font-medium text-primary"
                                            >
                                                {currentScores.impact}%
                                            </motion.span>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                            <motion.div
                                                className="h-2 rounded-full bg-primary"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${currentScores.impact}%` }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Keyword Match</span>
                                            <motion.span
                                                key={`keyword-${currentScores.keyword}`}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="font-medium text-primary"
                                            >
                                                {currentScores.keyword}%
                                            </motion.span>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                            <motion.div
                                                className="h-2 rounded-full bg-primary"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${currentScores.keyword}%` }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-muted/50 p-4 text-sm">
                                    <p className="font-medium text-green-600 mb-1">Strong Bullet Point:</p>
                                    <p className="text-muted-foreground">"Optimized API latency by <span className="text-foreground font-medium">40%</span> through Redis caching, handling <span className="text-foreground font-medium">10k+</span> concurrent requests."</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative gradient blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-3xl rounded-full opacity-30 animate-pulse" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
