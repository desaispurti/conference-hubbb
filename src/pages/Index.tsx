import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Calendar,
  Globe2,
  Users,
  BookOpen,
  Sparkles,
  Search,
  GraduationCap,
  Microscope,
  Heart,
  TrendingUp,
  Cpu,
} from "lucide-react";
import heroImg from "@/assets/hero-conference.jpg";
import speakersImg from "@/assets/speakers.jpg";
import innovationImg from "@/assets/innovation.jpg";

const stats = [
  { value: "500+", label: "Conferences Hosted" },
  { value: "120+", label: "Countries Represented" },
  { value: "50K+", label: "Researchers Connected" },
  { value: "200+", label: "Indexed Publications" },
];

const categories = [
  { icon: Cpu, label: "Engineering & Technology" },
  { icon: TrendingUp, label: "Business & Economics" },
  { icon: GraduationCap, label: "Education" },
  { icon: Heart, label: "Health & Medicine" },
  { icon: Microscope, label: "Science & Research" },
  { icon: Globe2, label: "Social Sciences" },
];

const upcoming = [
  { title: "ICAIT 2026 — Artificial Intelligence", city: "Singapore", date: "Mar 14–16, 2026", topic: "Engineering" },
  { title: "GHCM 2026 — Global Healthcare Summit", city: "Berlin", date: "Apr 02–04, 2026", topic: "Medicine" },
  { title: "WCEF 2026 — Economics & Finance", city: "London", date: "May 18–20, 2026", topic: "Business" },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden text-primary-foreground">
        <img
          src={heroImg}
          alt="International conference hall"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative container py-28 md:py-40 max-w-5xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in">
            <Sparkles className="inline h-3 w-3 mr-1" /> International Conferences 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-[1.05] mb-6 text-balance animate-fade-up">
            Where the world's <span className="text-accent">researchers</span> converge.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed mb-10 animate-fade-up">
            Discover, present, and publish at premier international conferences across
            engineering, science, business, medicine, and the humanities.
          </p>

          <div className="flex flex-wrap gap-3 mb-10 animate-fade-up">
            <Button asChild variant="hero" size="lg">
              <Link to="/upcoming-conferences">Explore Conferences <ArrowRight /></Link>
            </Button>
            <Button asChild variant="outlineOnDark" size="lg">
              <Link to="/registration">Register Now</Link>
            </Button>
          </div>

          {/* Search bar */}
          <Card className="p-2 md:p-3 flex flex-col md:flex-row gap-2 shadow-elegant animate-fade-up">
            <div className="flex-1 flex items-center gap-2 px-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conferences by topic, country, or city…"
                className="border-0 focus-visible:ring-0 shadow-none text-foreground"
              />
            </div>
            <Button variant="hero" size="lg" className="md:w-auto w-full">Search</Button>
          </Card>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="py-10 text-center">
              <div className="font-serif text-3xl md:text-5xl text-primary mb-2">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Top Categories</div>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Browse by Discipline</h2>
          <p className="text-muted-foreground">Find world-class conferences in your field of expertise.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(({ icon: Icon, label }) => (
            <Card
              key={label}
              className="p-6 text-center hover:shadow-elegant hover:-translate-y-1 transition-smooth cursor-pointer group"
            >
              <div className="h-14 w-14 mx-auto rounded-2xl gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <Icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="font-medium text-sm text-primary">{label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* UPCOMING */}
      <section className="gradient-subtle py-20 md:py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Featured</div>
              <h2 className="text-3xl md:text-5xl font-serif text-primary">Upcoming Conferences</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/upcoming-conferences">View all <ArrowRight /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcoming.map((c) => (
              <Card key={c.title} className="overflow-hidden hover:shadow-elegant transition-smooth group">
                <div className="h-2 gradient-gold" />
                <div className="p-7">
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">{c.topic}</div>
                  <h3 className="font-serif text-xl text-primary mb-4 group-hover:text-accent transition-smooth">
                    {c.title}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> {c.date}</div>
                    <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-accent" /> {c.city}</div>
                  </div>
                  <Link to="/upcoming-conferences" className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:text-accent transition-smooth">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATION FEATURE */}
      <section className="container py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img src={innovationImg} alt="Innovation network" className="w-full h-full object-cover" loading="lazy" width={1280} height={800} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Innovation Challenge 2026</div>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-5">Submit your breakthrough idea.</h2>
            <p className="text-muted-foreground mb-7 leading-relaxed">
              The Innovation Challenge invites pioneering researchers and entrepreneurs
              from around the world to present transformative ideas. Win prizes, mentorship,
              and a stage at our flagship summit.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero">
                <Link to="/innovation-challenge-2026">Apply Now <ArrowRight /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/blog">Read Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS / COMMUNITY */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Our Community</div>
            <h2 className="text-3xl md:text-5xl font-serif mb-5">A global network of thought leaders.</h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              From Nobel laureates to emerging scholars, our speakers represent the
              forefront of human discovery. Join the network — as a delegate, reviewer,
              advisor, or speaker.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <Button asChild variant="hero"><Link to="/past-speakers">Past Speakers</Link></Button>
              <Button asChild variant="outlineOnDark"><Link to="/advisory-speakers">Advisory Board</Link></Button>
              <Button asChild variant="outlineOnDark"><Link to="/apply-reviewer">Be a Reviewer</Link></Button>
              <Button asChild variant="outlineOnDark"><Link to="/careers">Careers</Link></Button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img src={speakersImg} alt="Speakers community" className="w-full" loading="lazy" width={1280} height={800} />
          </div>
        </div>
      </section>

      {/* PUBLISH CTA */}
      <section className="container py-20 md:py-28">
        <Card className="p-10 md:p-16 text-center gradient-subtle border-0 shadow-card">
          <BookOpen className="h-12 w-12 mx-auto text-accent mb-5" />
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4 text-balance">
            Publish in Scopus & Web of Science indexed journals.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Accepted conference papers are eligible for publication in our partner
            journals — peer-reviewed, open access, and globally indexed.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg"><Link to="/recent-proceedings">View Proceedings</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/books">Explore Books</Link></Button>
          </div>
        </Card>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t bg-card">
        <div className="container py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif text-primary mb-2">Stay informed.</h3>
            <p className="text-muted-foreground">Get conference alerts and CFPs delivered to your inbox.</p>
          </div>
          <form className="flex gap-2">
            <Input type="email" placeholder="your@email.com" className="h-12" />
            <Button variant="hero" size="lg"><Users className="h-4 w-4" /> Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Index;
