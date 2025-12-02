"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const initialCategories = [
    { name: "Content Quality", score: 15, max: 35, color: "text-red-500" },
    { name: "ATS & Structure", score: 8, max: 25, color: "text-red-500" },
    { name: "Job Optimization", score: 22, max: 25, color: "text-green-500" },
    { name: "Writing Quality", score: 9, max: 10, color: "text-green-500" },
    { name: "Application Ready", score: 2, max: 5, color: "text-red-500" },
];

export function ATSAnalysis() {
    const [categories, setCategories] = useState(initialCategories);
    const [displayScore, setDisplayScore] = useState(0);
    const controls = useAnimationControls();

    const totalScore = categories.reduce((sum, cat) => sum + cat.score, 0);
    const maxScore = categories.reduce((sum, cat) => sum + cat.max, 0);
    const scorePercentage = (totalScore / maxScore) * 100;

    // Continuous number animation
    useEffect(() => {
        const interval = setInterval(() => {
            setCategories(prev => prev.map(cat => ({
                ...cat,
                score: Math.min(cat.max, Math.max(0, cat.score + Math.floor(Math.random() * 5) - 2))
            })));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Animate display score to match total
    useEffect(() => {
        const duration = 1000;
        const steps = 30;
        const increment = (totalScore - displayScore) / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            if (currentStep >= steps) {
                setDisplayScore(totalScore);
                clearInterval(timer);
            } else {
                setDisplayScore(prev => prev + increment);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [totalScore]);

    // Soda bubble animation
    useEffect(() => {
        controls.start({
            scale: [1, 1.02, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    }, [controls]);

    return (
        <section className="relative w-full overflow-hidden bg-background py-24 md:py-32">
            {/* Background Effects - matching your theme */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2 mix-blend-screen" />

            <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
                {/* Heading Section */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                    >
                        Upload Your Resume to Start for Free
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        Get your ResuStack Score instantly and discover how to maximize your resume's impact.
                        Our AI analyzes every aspect of your resume to ensure it gets past ATS systems.
                    </motion.p>
                </div>

                {/* Score Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto bg-card rounded-2xl border shadow-2xl p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Animated background glow */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    <div className="relative z-10">
                        {/* Score Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                            <h3 className="text-2xl md:text-3xl font-bold">
                                Your ResuStack Score
                            </h3>
                            <div className="text-5xl md:text-6xl font-bold">
                                <motion.span
                                    className="text-primary"
                                    key={displayScore}
                                    initial={{ scale: 1.2, opacity: 0.5 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {Math.round(displayScore)}
                                </motion.span>
                                <span className="text-muted-foreground/50">/</span>
                                <span className="text-muted-foreground">{maxScore}</span>
                            </div>
                        </div>

                        {/* Gradient Progress Bar with Soda Effect */}
                        <div className="mb-10 relative">
                            <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                                <motion.div
                                    animate={{ width: `${scorePercentage}%` }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-green-500 rounded-full relative"
                                >
                                    {/* Soda bubbles effect */}
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-2 h-2 bg-white/40 rounded-full"
                                            style={{
                                                left: `${10 + i * 12}%`,
                                                top: '50%',
                                            }}
                                            animate={{
                                                y: [-4, -12, -4],
                                                opacity: [0.3, 0.8, 0.3],
                                                scale: [0.8, 1.2, 0.8],
                                            }}
                                            transition={{
                                                duration: 1.5 + i * 0.2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.2,
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Score Categories with animated numbers */}
                        <div className="space-y-4 mb-8">
                            {categories.map((category, index) => (
                                <motion.div
                                    key={category.name}
                                    className="flex items-center justify-between py-3 border-b border-border"
                                    layout
                                >
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className={`w-3 h-3 rounded-full ${category.score / category.max > 0.7 ? 'bg-green-500' : 'bg-red-500'
                                                }`}
                                            animate={{
                                                scale: [1, 1.3, 1],
                                                opacity: [0.7, 1, 0.7],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: index * 0.2,
                                            }}
                                        />
                                        <span className="text-foreground font-medium">{category.name}</span>
                                    </div>
                                    <motion.span
                                        className={`font-bold ${category.color}`}
                                        key={category.score}
                                        initial={{ scale: 1.2, opacity: 0.5 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {category.score}/{category.max}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Description Text */}
                        <p className="text-muted-foreground text-sm md:text-base text-center mb-6">
                            Import your resume to get a detailed analysis and personalized recommendations
                        </p>

                        {/* Import Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="flex justify-center"
                        >
                            <Link href="/ats-analysis">
                                <Button
                                    size="lg"
                                    variant="gradient"
                                    className="px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                                >
                                    <Upload className="mr-2 h-5 w-5" />
                                    Upload Resume
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Footer Text */}
                        <p className="text-muted-foreground text-xs md:text-sm text-center mt-4">
                            Get your detailed ResuStack Score with personalized feedback for each category
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
