import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";

const jobs = [
  { title: "Conference Program Manager", location: "Remote / Global", type: "Full-time" },
  { title: "Editorial Coordinator — Engineering", location: "Singapore", type: "Full-time" },
  { title: "Marketing & Communications Lead", location: "London / Hybrid", type: "Full-time" },
  { title: "Junior Web Developer", location: "Remote", type: "Contract" },
  { title: "Outreach Specialist — Latin America", location: "Remote", type: "Part-time" },
  { title: "Event Operations Associate", location: "Berlin", type: "Full-time" },
];

const Careers = () => (
  <>
    <PageHero
      eyebrow="Join the Team"
      title="Careers at Confluence"
      description="Build the platform that connects researchers worldwide. Open roles across editorial, events, technology, and outreach."
    />
    <section className="container py-16 max-w-4xl">
      <div className="space-y-4">
        {jobs.map((j) => (
          <Card key={j.title} className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-elegant transition-smooth">
            <div>
              <h3 className="font-serif text-xl text-primary mb-2">{j.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-accent" /> {j.location}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" /> {j.type}</span>
                <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4 text-accent" /> Operations</span>
              </div>
            </div>
            <Button variant="hero">Apply <ArrowRight /></Button>
          </Card>
        ))}
      </div>
    </section>
  </>
);

export default Careers;
