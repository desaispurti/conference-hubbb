import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Lightbulb, Users, Calendar, ArrowRight } from "lucide-react";
import innovationImg from "@/assets/innovation.jpg";
import { Link } from "react-router-dom";

const tracks = [
  { icon: Lightbulb, title: "AI for Good", desc: "Solutions using AI to address pressing global challenges." },
  { icon: Users, title: "Healthcare Innovation", desc: "Breakthroughs in diagnostics, treatment, and access." },
  { icon: Trophy, title: "Climate & Sustainability", desc: "Technology and policy for a sustainable future." },
];

const timeline = [
  { date: "Jan 15, 2026", label: "Submissions open" },
  { date: "Apr 30, 2026", label: "Submission deadline" },
  { date: "Jun 15, 2026", label: "Finalists announced" },
  { date: "Aug 20, 2026", label: "Live finals & awards" },
];

const InnovationChallenge = () => (
  <>
    <section className="relative gradient-hero text-primary-foreground overflow-hidden">
      <img src={innovationImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="relative container py-24 md:py-32 max-w-4xl">
        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-5">Flagship Initiative</div>
        <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-5 text-balance">Innovation Challenge <span className="text-accent">2026</span></h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl leading-relaxed">
          A global competition for researchers, founders, and visionaries solving humanity's
          most urgent problems. $250,000 in prizes, mentorship, and a flagship stage.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="hero" size="lg">Apply Now <ArrowRight /></Button>
          <Button asChild variant="outlineOnDark" size="lg"><Link to="/blog">Read Past Winners</Link></Button>
        </div>
      </div>
    </section>

    <section className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Challenge Tracks</h2>
        <p className="text-muted-foreground">Choose your domain. Compete with the world's brightest.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {tracks.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="p-8 hover:shadow-elegant transition-smooth">
            <div className="h-14 w-14 rounded-2xl gradient-gold flex items-center justify-center mb-5"><Icon className="h-6 w-6 text-accent-foreground" /></div>
            <h3 className="font-serif text-xl text-primary mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </Card>
        ))}
      </div>
    </section>

    <section className="gradient-subtle py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif text-primary text-center mb-12">Key Dates</h2>
        <div className="space-y-3">
          {timeline.map((t) => (
            <Card key={t.label} className="p-6 flex items-center gap-5 hover:shadow-card transition-smooth">
              <div className="h-12 w-12 rounded-xl gradient-gold flex items-center justify-center shrink-0"><Calendar className="h-5 w-5 text-accent-foreground" /></div>
              <div className="flex-1"><div className="font-serif text-lg text-primary">{t.label}</div></div>
              <div className="text-sm text-muted-foreground font-medium">{t.date}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default InnovationChallenge;
