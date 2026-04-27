import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const proceedings = [
  { title: "Proceedings of ICAIT 2025", year: "2025", papers: 142, isbn: "978-1-2345-6789-0" },
  { title: "Proceedings of GHCM 2025", year: "2025", papers: 98, isbn: "978-1-2345-6790-6" },
  { title: "Proceedings of WCEF 2025", year: "2025", papers: 87, isbn: "978-1-2345-6791-3" },
  { title: "Proceedings of ICCS 2024", year: "2024", papers: 110, isbn: "978-1-2345-6701-2" },
  { title: "Proceedings of GBEC 2024", year: "2024", papers: 76, isbn: "978-1-2345-6702-9" },
  { title: "Proceedings of IMSC 2024", year: "2024", papers: 134, isbn: "978-1-2345-6703-6" },
];

const RecentProceedings = () => (
  <>
    <PageHero
      eyebrow="Publications"
      title="Recent Conference Proceedings"
      description="Peer-reviewed proceedings from our recent conferences — indexed in Scopus, Web of Science, and other major databases."
    />
    <section className="container py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {proceedings.map((p) => (
        <Card key={p.title} className="overflow-hidden hover:shadow-elegant transition-smooth group">
          <div className="aspect-[4/3] gradient-hero relative flex items-center justify-center">
            <div className="absolute inset-4 border border-accent/30 rounded" />
            <div className="text-center text-primary-foreground p-6">
              <div className="text-xs uppercase tracking-widest text-accent mb-2">Volume {p.year}</div>
              <div className="font-serif text-lg">{p.title}</div>
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm text-muted-foreground mb-1">{p.papers} peer-reviewed papers</div>
            <div className="text-xs text-muted-foreground mb-4">ISBN: {p.isbn}</div>
            <div className="flex gap-2">
              <Button variant="hero" size="sm" className="flex-1"><Download className="h-3.5 w-3.5" /> Download</Button>
              <Button variant="outline" size="sm"><ExternalLink className="h-3.5 w-3.5" /></Button>
            </div>
          </div>
        </Card>
      ))}
    </section>
  </>
);

export default RecentProceedings;
