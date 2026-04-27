import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const speakers = [
  { name: "Dr. Amelia Hartwell", role: "AI Ethics Researcher", uni: "MIT" },
  { name: "Prof. Hiroshi Tanaka", role: "Quantum Physicist", uni: "Tokyo University" },
  { name: "Dr. Priya Raghavan", role: "Bioengineering Pioneer", uni: "IISc Bangalore" },
  { name: "Prof. Lukas Müller", role: "Climate Economist", uni: "ETH Zurich" },
  { name: "Dr. Fatima El-Sayed", role: "Public Health Expert", uni: "Cairo University" },
  { name: "Prof. Daniel Okafor", role: "Materials Science", uni: "Cambridge" },
  { name: "Dr. Sofia Castellanos", role: "Education Innovator", uni: "Universidad de Buenos Aires" },
  { name: "Prof. Mei Lin Zhang", role: "Robotics Engineer", uni: "Tsinghua University" },
];

const PastSpeakers = () => (
  <>
    <PageHero
      eyebrow="Hall of Voices"
      title="Past Speakers"
      description="Distinguished thinkers who have graced our stages and shaped our discussions."
    />
    <section className="container py-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {speakers.map((s) => (
        <Card key={s.name} className="overflow-hidden hover:shadow-elegant transition-smooth group">
          <div className="aspect-square gradient-hero flex items-center justify-center relative">
            <div className="font-serif text-6xl text-accent/40 group-hover:scale-110 transition-smooth">
              {s.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-serif text-lg text-primary">{s.name}</h3>
            <div className="text-sm text-accent font-medium">{s.role}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.uni}</div>
            <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent">
              <Linkedin className="h-3 w-3" /> LinkedIn
            </a>
          </div>
        </Card>
      ))}
    </section>
  </>
);

export default PastSpeakers;
