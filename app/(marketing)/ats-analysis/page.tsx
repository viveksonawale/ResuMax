"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";

export default function AtsAnalysisPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2 mix-blend-screen" />

            <div className="container relative z-10 px-4 py-16">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-8"
                    >
                        {/* Title */}
                        <div className="space-y-3">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                ATS Check
                            </h1>
                            <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
                                Upload your resume to get a detailed breakdown of parseability, keyword matching, and formatting issues.
                            </p>
                        </div>

                        {/* Upload Card */}
                        <Card className="border-2 border-dashed border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                            <CardContent className="flex flex-col items-center justify-center py-16 space-y-6">
                                <motion.div
                                    className="p-6 bg-primary/10 rounded-full ring-4 ring-primary/20"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Upload className="h-10 w-10 text-primary" />
                                </motion.div>
                                <div className="text-center space-y-2">
                                    <h3 className="font-bold text-xl">Upload your resume</h3>
                                    <p className="text-sm text-muted-foreground">PDF or DOCX up to 5MB</p>
                                </div>
                                <Button
                                    size="lg"
                                    variant="gradient"
                                    className="px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                                >
                                    <Upload className="mr-2 h-5 w-5" />
                                    Select File
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
