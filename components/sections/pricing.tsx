"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useModal } from "@/components/providers/modal-provider";

export function Pricing() {
    const { openModal } = useModal();
    return (
        <section id="pricing" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Simple, transparent pricing.
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        We believe career growth should be accessible to everyone.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {/* Free Tier */}
                    <Card className="relative border-primary shadow-lg md:scale-105 z-10">
                        <div className="absolute top-0 right-0 -mt-3 -mr-3">
                            <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                        </div>
                        <CardHeader>
                            <CardTitle>Free Forever</CardTitle>
                            <CardDescription>Everything you need to get hired.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold mb-6">₹0<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Unlimited Resume Builds</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>ATS-Optimized Templates</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>Basic ATS Analysis</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>PDF & DOCX Export</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary" />
                                    <span>AI Bullet Suggestions (Limited)</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" size="lg" onClick={openModal}>Get Started Free</Button>
                        </CardFooter>
                    </Card>

                    {/* Pro Tier (Placeholder) */}
                    <Card className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                            <CardDescription>For power users & senior roles.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold mb-6">Coming Soon</div>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    <span>Advanced AI Writer</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    <span>LinkedIn Profile Optimization</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    <span>Cover Letter Generator</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full" disabled>Join Waitlist</Button>
                        </CardFooter>
                    </Card>

                    {/* Recruiter Tier */}
                    <Card className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                        <CardHeader>
                            <CardTitle>Recruiter</CardTitle>
                            <CardDescription>For hiring teams.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold mb-6">Contact Us</div>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    <span>Bulk Resume Parsing</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    <span>Candidate Ranking</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Contact Sales</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
