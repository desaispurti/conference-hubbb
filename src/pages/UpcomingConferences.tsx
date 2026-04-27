import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Globe2, ArrowRight, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const conferences = [
  { title: "International Conference on Artificial Intelligence & Robotics", city: "Singapore", country: "Singapore", date: "Mar 14–16, 2026", topic: "Engineering" },
  { title: "Global Healthcare & Medicine Summit", city: "Berlin", country: "Germany", date: "Apr 02–04, 2026", topic: "Medicine" },
  { title: "World Congress on Economics & Finance", city: "London", country: "UK", date: "May 18–20, 2026", topic: "Business" },
  { title: "International Symposium on Climate & Sustainability", city: "Oslo", country: "Norway", date: "Jun 09–11, 2026", topic: "Science" },
  { title: "Conference on Education & Learning Innovation", city: "Tokyo", country: "Japan", date: "Jul 22–24, 2026", topic: "Education" },
  { title: "Summit on Quantum Computing", city: "Boston", country: "USA", date: "Aug 03–05, 2026", topic: "Engineering" },
  { title: "World Forum on Social Sciences", city: "Paris", country: "France", date: "Sep 12–14, 2026", topic: "Humanities" },
  { title: "Global Bioengineering Conference", city: "Sydney", country: "Australia", date: "Oct 18–20, 2026", topic: "Medicine" },
  { title: "International Materials Science Congress", city: "Zurich", country: "Switzerland", date: "Nov 04–06, 2026", topic: "Science" },
];

const UpcomingConferences = () => (
  <>
    <PageHero
      eyebrow="2026 Calendar"
      title="Upcoming Conferences"
      description="Browse our curated calendar of upcoming international academic conferences across every discipline."
    />
    <section className="container py-16">
      <Card className="p-4 mb-10 flex flex-col md:flex-row gap-3 shadow-card">
        <div className="flex-1 flex gap-2 items-center px-2"><Filter className="h-4 w-4 text-muted-foreground" /><Input placeholder="Filter by topic, country, or month…" className="border-0 shadow-none focus-visible:ring-0" /></div>
        <Button variant="hero">Search</Button>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conferences.map((c) => (
          <Card key={c.title} className="overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-smooth group">
            <div className="h-2 gradient-gold" />
            <div className="p-7">
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">{c.topic}</div>
              <h3 className="font-serif text-lg text-primary mb-4 group-hover:text-accent transition-smooth leading-snug">{c.title}</h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> {c.date}</div>
                <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-accent" /> {c.city}, {c.country}</div>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full"><Link to="/registration">Register <ArrowRight /></Link></Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  </>
);

export default UpcomingConferences;
