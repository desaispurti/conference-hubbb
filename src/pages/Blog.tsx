import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  { title: "How peer review is evolving in the age of AI", date: "Apr 18, 2026", category: "Editorial", excerpt: "A look at the tools and frameworks reshaping how academic work is evaluated." },
  { title: "Inside ICAIT 2025: Five takeaways from Singapore", date: "Mar 28, 2026", category: "Recap", excerpt: "Highlights from a record-breaking week of AI research and dialogue." },
  { title: "Why interdisciplinary conferences matter more than ever", date: "Mar 14, 2026", category: "Opinion", excerpt: "The world's hardest problems don't fit inside one discipline." },
  { title: "Open access publishing: a global progress report", date: "Feb 22, 2026", category: "Publishing", excerpt: "What's working, what isn't, and where the field is headed next." },
  { title: "Meet our 2026 Innovation Challenge finalists", date: "Feb 10, 2026", category: "Innovation", excerpt: "Twelve teams. Twelve breakthrough ideas. One global stage." },
  { title: "A new chapter for academic books", date: "Jan 30, 2026", category: "Books", excerpt: "How digital-first publishing is changing the scholarly book." },
];

const Blog = () => (
  <>
    <PageHero
      eyebrow="Insights"
      title="The Confluence Blog"
      description="Ideas, recaps, and conversations from our global community of researchers and organizers."
    />
    <section className="container py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((p) => (
        <Card key={p.title} className="overflow-hidden hover:shadow-elegant transition-smooth group cursor-pointer">
          <div className="aspect-[16/10] gradient-hero relative">
            <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider">{p.category}</div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3"><Calendar className="h-3 w-3" /> {p.date}</div>
            <h3 className="font-serif text-xl text-primary mb-3 group-hover:text-accent transition-smooth leading-snug">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.excerpt}</p>
            <div className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:text-accent transition-smooth">
              Read article <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        </Card>
      ))}
    </section>
  </>
);

export default Blog;
