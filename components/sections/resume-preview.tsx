"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useModal } from "@/components/providers/modal-provider";

// Resume Template 1 - Marcus Chen
const ResumeTemplate1 = () => (
    <div className="absolute inset-0 bg-white p-8 text-black text-xs leading-relaxed">
        {/* Resume Header */}
        <div className="text-center mb-4 pb-3 border-b-2 border-gray-300">
            <h1 className="text-2xl font-bold mb-1">Marcus Chen</h1>
            <div className="text-[10px] text-gray-600 space-x-1">
                <span>marcus.chen@email.com</span>
                <span>|</span>
                <span>+1 (555) 123-4567</span>
                <span>|</span>
                <span>linkedin.com/in/marcus-chen</span>
                <span>|</span>
                <span>github.com/marcuschen</span>
            </div>
        </div>

        {/* Summary */}
        <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 uppercase tracking-wide">Summary</h2>
            <p className="text-[10px] text-gray-700 leading-tight">
                Full-stack Software Engineer skilled in Java, Spring Boot, microservices, and cloud technologies. Experienced with building production-grade systems, distributed architectures, and scalable backend solutions.
            </p>
        </div>

        {/* Education */}
        <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 uppercase tracking-wide">Education</h2>
            <div className="flex justify-between items-start text-[10px]">
                <div>
                    <p className="font-semibold">Stanford University</p>
                    <p className="text-gray-600 italic">Bachelor of Computer Science | Dean's List Scholar</p>
                </div>
                <div className="text-right text-gray-600">
                    <p>Sep 2019 - May 2023</p>
                    <p>GPA: 3.9/4.0</p>
                </div>
            </div>
        </div>

        {/* Work Experience */}
        <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 uppercase tracking-wide">Work Experience</h2>

            <div className="mb-2">
                <div className="flex justify-between items-start mb-0.5 text-[10px]">
                    <div>
                        <p className="font-bold">Google</p>
                        <p className="italic text-gray-600">Software Engineer Intern</p>
                    </div>
                    <p className="text-gray-600">Jun 2023 - Aug 2023</p>
                </div>
                <ul className="list-disc list-inside text-[9px] text-gray-700 space-y-0.5 ml-1">
                    <li>Developed production-grade service using <span className="font-semibold">AWS CDK</span> and <span className="font-semibold">Java Lambda</span>, processing <span className="font-semibold">80M+ emails/day</span></li>
                    <li>Launched <span className="font-semibold">AWS CloudWatch</span> dashboards, <span className="font-semibold">cutting costs by $8K monthly</span></li>
                </ul>
            </div>

            <div className="mb-2">
                <div className="flex justify-between items-start mb-0.5 text-[10px]">
                    <div>
                        <p className="font-bold">Meta</p>
                        <p className="italic text-gray-600">Backend Engineer Intern</p>
                    </div>
                    <p className="text-gray-600">Jan 2023 - Apr 2023</p>
                </div>
                <ul className="list-disc list-inside text-[9px] text-gray-700 space-y-0.5 ml-1">
                    <li>Delivered <span className="font-semibold">Java/Spring Boot</span> microservices for <span className="font-semibold">50M+ users</span></li>
                    <li>Implemented <span className="font-semibold">Redis caching</span>, increasing hit rate from <span className="font-semibold">38% to 91%</span></li>
                </ul>
            </div>
        </div>

        {/* Projects */}
        <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 uppercase tracking-wide">Projects</h2>

            <div className="mb-1.5">
                <div className="flex justify-between items-start mb-0.5 text-[10px]">
                    <p className="font-semibold">E-Commerce Platform — Spring Boot, React, PostgreSQL</p>
                    <p className="text-gray-600">2023</p>
                </div>
                <ul className="list-disc list-inside text-[9px] text-gray-700 space-y-0.5 ml-1">
                    <li>Built full-stack platform with <span className="font-semibold">Spring Boot</span> and <span className="font-semibold">React</span></li>
                </ul>
            </div>
        </div>

        {/* Technical Skills */}
        <div>
            <h2 className="text-sm font-bold mb-1 text-gray-800 uppercase tracking-wide">Technical Skills</h2>
            <div className="text-[9px] text-gray-700 space-y-0.5">
                <p><span className="font-semibold">Languages:</span> Java, Python, JavaScript, TypeScript, SQL</p>
                <p><span className="font-semibold">Backend:</span> Spring Boot, Spring MVC, Hibernate/JPA, REST APIs</p>
                <p><span className="font-semibold">DevOps & Cloud:</span> Docker, Git, GitHub Actions, AWS, Linux</p>
            </div>
        </div>
    </div>
);

// Resume Template 2 - Sarah Johnson
const ResumeTemplate2 = () => (
    <div className="absolute inset-0 bg-white p-8 text-black text-xs leading-relaxed">
        {/* Resume Header */}
        <div className="text-center mb-4 pb-3 border-b-2 border-gray-300">
            <h1 className="text-2xl font-bold mb-1">Sarah Johnson</h1>
            <div className="text-[10px] text-gray-600 space-x-1">
                <span>sarah.j@email.com</span>
                <span>|</span>
                <span>+1 (555) 987-6543</span>
                <span>|</span>
                <span>linkedin.com/in/sarahjohnson</span>
                <span>|</span>
                <span>github.com/sarahj</span>
            </div>
        </div>

        {/* Summary */}
        <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 uppercase tracking-wide">Professional Summary</h2>
            <p className="text-[10px] text-gray-700 leading-tight">
                Results-driven Frontend Developer with expertise in React, TypeScript, and modern web technologies. Passionate about creating intuitive user experiences and optimizing application performance.
            </p>
        </div>

        {/* Education */}
        <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 uppercase tracking-wide">Education</h2>
            <div className="flex justify-between items-start text-[10px]">
                <div>
                    <p className="font-semibold">MIT</p>
                    <p className="text-gray-600 italic">B.S. in Computer Science and Engineering</p>
                </div>
                <div className="text-right text-gray-600">
                    <p>Sep 2018 - May 2022</p>
                    <p>GPA: 3.8/4.0</p>
                </div>
            </div>
        </div>

        {/* Work Experience */}
        <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 uppercase tracking-wide">Professional Experience</h2>

            <div className="mb-2">
                <div className="flex justify-between items-start mb-0.5 text-[10px]">
                    <div>
                        <p className="font-bold">Amazon</p>
                        <p className="italic text-gray-600">Frontend Engineer</p>
                    </div>
                    <p className="text-gray-600">Jul 2022 - Present</p>
                </div>
                <ul className="list-disc list-inside text-[9px] text-gray-700 space-y-0.5 ml-1">
                    <li>Built responsive UI components using <span className="font-semibold">React</span> and <span className="font-semibold">TypeScript</span>, serving <span className="font-semibold">100M+ users</span></li>
                    <li>Optimized bundle size by <span className="font-semibold">40%</span> through code splitting and lazy loading</li>
                </ul>
            </div>

            <div className="mb-2">
                <div className="flex justify-between items-start mb-0.5 text-[10px]">
                    <div>
                        <p className="font-bold">Netflix</p>
                        <p className="italic text-gray-600">Software Engineering Intern</p>
                    </div>
                    <p className="text-gray-600">May 2021 - Aug 2021</p>
                </div>
                <ul className="list-disc list-inside text-[9px] text-gray-700 space-y-0.5 ml-1">
                    <li>Developed <span className="font-semibold">Next.js</span> features improving page load time by <span className="font-semibold">35%</span></li>
                    <li>Implemented <span className="font-semibold">A/B testing</span> framework increasing user engagement by <span className="font-semibold">22%</span></li>
                </ul>
            </div>
        </div>

        {/* Projects */}
        <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 uppercase tracking-wide">Key Projects</h2>

            <div className="mb-1.5">
                <div className="flex justify-between items-start mb-0.5 text-[10px]">
                    <p className="font-semibold">Design System Library — React, Storybook, Tailwind</p>
                    <p className="text-gray-600">2023</p>
                </div>
                <ul className="list-disc list-inside text-[9px] text-gray-700 space-y-0.5 ml-1">
                    <li>Created reusable component library adopted by <span className="font-semibold">15+ teams</span></li>
                </ul>
            </div>
        </div>

        {/* Technical Skills */}
        <div>
            <h2 className="text-sm font-bold mb-1 text-gray-800 uppercase tracking-wide">Technical Skills</h2>
            <div className="text-[9px] text-gray-700 space-y-0.5">
                <p><span className="font-semibold">Languages:</span> JavaScript, TypeScript, HTML, CSS, Python</p>
                <p><span className="font-semibold">Frontend:</span> React, Next.js, Vue.js, Tailwind CSS, Redux</p>
                <p><span className="font-semibold">Tools:</span> Git, Webpack, Vite, Figma, Storybook</p>
            </div>
        </div>
    </div>
);

export function ResumePreview() {
    const { openModal } = useModal();
    const [currentTemplate, setCurrentTemplate] = useState(0);

    // Auto-swap templates every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTemplate((prev) => (prev === 0 ? 1 : 0));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const currentScore = currentTemplate === 0 ? 87 : 91;
    const categories = currentTemplate === 0
        ? [
            { name: "ATS", score: 22, max: 25, color: "green" },
            { name: "Content", score: 28, max: 35, color: "yellow" },
            { name: "Writing", score: 8, max: 10, color: "green" },
            { name: "Job Match", score: 21, max: 25, color: "yellow" },
            { name: "Ready", score: 4, max: 5, color: "green" },
        ]
        : [
            { name: "ATS", score: 24, max: 25, color: "green" },
            { name: "Content", score: 33, max: 35, color: "green" },
            { name: "Writing", score: 9, max: 10, color: "green" },
            { name: "Job Match", score: 20, max: 25, color: "yellow" },
            { name: "Ready", score: 5, max: 5, color: "green" },
        ];

    return (
        <section id="resume-preview" className="relative w-full overflow-hidden bg-background py-24 md:py-32">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 mix-blend-screen" />

            <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
                {/* Heading */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                    >
                        See What Recruiters See In Your Resume
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
                    >
                        Our AI analyzes your resume just like an ATS system would, highlighting strengths and areas for improvement to maximize your interview chances.
                    </motion.p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-[300px_1fr_300px] gap-6 items-start">
                    {/* Left Sidebar - Analysis */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Strengths Identified */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Card className="p-6 bg-card border-green-500/20 border-2 hover:border-green-500/40 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-4">
                                    <motion.div
                                        className="w-2 h-2 rounded-full bg-green-500"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <h3 className="font-bold text-green-500">Strengths Identified</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Strong technical skills and quantified experience bullets with business impact.
                                </p>

                                <div className="space-y-3 text-sm">
                                    <div className="p-3 bg-muted/50 rounded-lg">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            <span className="font-semibold">Strong Bullet</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground italic">
                                            'Optimized bundle size by 40% through code splitting, improving page load time by 35%.'
                                        </p>
                                        <p className="text-xs text-green-500 mt-2">
                                            Highly quantified, business impact, technical depth.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Improvement Suggestions */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Card className="p-6 bg-card border-yellow-500/20 border-2 hover:border-yellow-500/40 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="w-4 h-4 text-yellow-500" />
                                    <h3 className="font-bold text-yellow-500">Improvement Suggestions</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Emphasize technical leadership and add production-level projects.
                                </p>

                                <div className="space-y-2 text-xs">
                                    <div className="flex items-start gap-2">
                                        <span className="font-semibold text-yellow-500">Weak:</span>
                                        <span className="text-muted-foreground">Built a React app with TypeScript.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="font-semibold text-green-500">Better:</span>
                                        <span className="text-muted-foreground">'Architected React app serving 50K+ users with 99.9% uptime.'</span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Score Breakdown */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300">
                                <h3 className="font-bold mb-4">Score Breakdown</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">{currentScore}% of maximum</span>
                                    </div>
                                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-green-500 to-green-400"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${currentScore}%` }}
                                            transition={{ duration: 0.8 }}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* Center - Resume with Auto-Swap */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative bg-white rounded-lg shadow-2xl overflow-hidden"
                    >
                        <div className="relative w-full" style={{ aspectRatio: "8.5/11" }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTemplate}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {currentTemplate === 0 ? <ResumeTemplate1 /> : <ResumeTemplate2 />}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Right Sidebar - Score & AI Writer */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Score Circle */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Card className="p-6 bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300">
                                <div className="flex flex-col items-center">
                                    <div className="relative w-32 h-32 mb-4">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="none"
                                                className="text-muted"
                                            />
                                            <motion.circle
                                                cx="64"
                                                cy="64"
                                                r="56"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="none"
                                                strokeDasharray={`${2 * Math.PI * 56}`}
                                                initial={{ strokeDashoffset: `${2 * Math.PI * 56}` }}
                                                animate={{ strokeDashoffset: `${2 * Math.PI * 56 * (1 - currentScore / 100)}` }}
                                                transition={{ duration: 1 }}
                                                className="text-green-500"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <motion.div
                                                    key={currentScore}
                                                    initial={{ scale: 1.2, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    className="text-4xl font-bold text-green-500"
                                                >
                                                    {currentScore}
                                                </motion.div>
                                                <div className="text-xs text-muted-foreground">/ 100</div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg font-bold text-green-500">Excellent Resume!</p>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Category Breakdown */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300">
                                <h3 className="font-bold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    Category Breakdown
                                </h3>
                                <div className="space-y-3">
                                    {categories.map((category, index) => (
                                        <motion.div
                                            key={`${currentTemplate}-${category.name}`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>{category.name}</span>
                                                <motion.span
                                                    className={`font-bold ${category.color === 'green' ? 'text-green-500' : 'text-yellow-500'}`}
                                                    key={category.score}
                                                    initial={{ scale: 1.2 }}
                                                    animate={{ scale: 1 }}
                                                >
                                                    {category.score}/{category.max}
                                                </motion.span>
                                            </div>
                                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                <motion.div
                                                    className={`h-full ${category.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${(category.score / category.max) * 100}%` }}
                                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>

                        {/* AI Content Writer */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
                                <h3 className="font-bold mb-3">AI Content Writer</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Generate metrics-driven bullets focused on technical skills and impact.
                                </p>
                                <Button
                                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25"
                                    size="lg"
                                    onClick={openModal}
                                >
                                    <Sparkles className="mr-2 h-4 w-4" />
                                    GENERATE BULLET
                                </Button>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

