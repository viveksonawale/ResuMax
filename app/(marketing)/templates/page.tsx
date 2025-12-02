import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const templates = [
    { id: 1, name: "Backend Engineer", role: "Senior Level", tags: ["Python", "Java", "System Design"], color: "bg-blue-500" },
    { id: 2, name: "SDE 1 (FAANG)", role: "Entry Level", tags: ["DSA", "C++", "Internship"], color: "bg-green-500" },
    { id: 3, name: "DevOps & Cloud", role: "Mid Level", tags: ["AWS", "Kubernetes", "Terraform"], color: "bg-purple-500" },
    { id: 4, name: "Data Scientist", role: "Specialist", tags: ["Python", "PyTorch", "SQL"], color: "bg-orange-500" },
    { id: 5, name: "Frontend Developer", role: "Mid Level", tags: ["React", "TypeScript", "Next.js"], color: "bg-pink-500" },
    { id: 6, name: "Full Stack Engineer", role: "Senior Level", tags: ["Node.js", "React", "Postgres"], color: "bg-indigo-500" },
];

export default function TemplatesPage() {
    return (
        <div className="container py-16 md:py-24">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Developer-focused resume templates.
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Clean, ATS-optimized templates designed specifically for software engineering roles.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {templates.map((template) => (
                    <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-[3/4] w-full bg-muted/30 p-4 relative group cursor-pointer">
                            <div className="h-full w-full bg-background shadow-sm rounded-sm p-3 space-y-2 opacity-90 group-hover:opacity-100 transition-opacity border">
                                <div className="h-3 w-1/3 bg-foreground/10 rounded" />
                                <div className="h-1.5 w-full bg-foreground/5 rounded" />
                                <div className="h-1.5 w-2/3 bg-foreground/5 rounded" />
                                <div className="pt-4 space-y-1.5">
                                    <div className="h-2 w-full bg-foreground/5 rounded" />
                                    <div className="h-2 w-full bg-foreground/5 rounded" />
                                    <div className="h-2 w-full bg-foreground/5 rounded" />
                                    <div className="h-2 w-3/4 bg-foreground/5 rounded" />
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 backdrop-blur-[1px]">
                                <Button variant="secondary">Preview Template</Button>
                            </div>
                        </div>
                        <CardHeader>
                            <CardTitle>{template.name}</CardTitle>
                            <CardDescription>{template.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {template.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Use Template</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
