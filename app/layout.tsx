import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "ResuStack AI - Free AI AI Resume Builder for Software Engineers",
    description: "Th free AI ai resume builder software engineers actually use to get interviews. ATS-optimized, developer-focused, and completely free.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body className={cn(inter.variable, outfit.variable, "min-h-screen bg-background font-sans antialiased")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    forcedTheme="dark"
                    disableTransitionOnChange
                >
                    <ModalProvider>
                        {children}
                    </ModalProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
