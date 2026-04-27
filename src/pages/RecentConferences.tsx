import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const recent = [
  { title: "ICAIT 2025 — AI & Robotics", city: "Singapore", date: "Mar 2025", attendees: "1,200+" },
  { title: "GHCM 2025 — Healthcare Summit", city: "Berlin", date: "Apr 2025", attendees: "950+" },
  { title: "WCEF 2025 — Economics Forum", city: "London", date: "May 2025", attendees: "830+" },
  { title: "ICCS 2024 — Climate Symposium", city: "Oslo", date: "Jun 2024", attendees: "1,050+" },
  { title: "GBEC 2024 — Bioengineering", city: "Sydney", date: "Oct 2024", attendees: "760+" },
  { title: "IMSC 2024 — Materials Science", city: "Zurich", date: "Nov 2024", attendees: "900+" },
];

const RecentConferences = () => (
  <>
    <PageHero
      eyebrow="Past Events"
      title="Recent Conferences"
      description="Highlights from our most recent gatherings of researchers, scholars, and innovators."
    />
    <section className="container py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recent.map((c) => (
        <Card key={c.title} className="p-7 hover:shadow-elegant hover:-translate-y-1 transition-smooth">
          <h3 className="font-serif text-xl text-primary mb-4">{c.title}</h3>
          <div className="space-y-2 text-sm text-muted-foreground mb-5">
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> {c.date}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> {c.city}</div>
            <div className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /> {c.attendees} delegates</div>
          </div>
          <Button variant="outline" size="sm" className="w-full">View Recap <ArrowRight /></Button>
        </Card>
      ))}
    </section>
  </>
);

export default RecentConferences;
