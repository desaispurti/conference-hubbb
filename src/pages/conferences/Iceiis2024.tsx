import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, Globe, BookOpen } from "lucide-react";

const conferenceData = {
  id: "ICEIIS-2024",
  title: "International Conference on Edge AI & Intelligent Infrastructure Systems",
  date: "04 Feb 2024",
  location: "Virtual",
  registrationLink: "/registration",
  about: [
    "ICEIIS-2024 focuses on the deployment of intelligent systems at the edge, integrating AI with real-world infrastructure including smart cities, industrial automation, and IoT ecosystems.",
    "The conference explores real-time intelligent systems operating under constrained environments, enabling scalable, energy-efficient, and adaptive infrastructure solutions."
  ],
  highlights: [
    { title: "Real-time AI", desc: "Promote real-time AI deployment in edge networks." },
    { title: "Smart Infrastructure", desc: "Enable smart infrastructure innovation globally." },
    { title: "Industry Collaboration", desc: "Bridge academia and industry for practical solutions." }
  ],
  speakers: [
    { name: "Dr. Ayoub Regragui", org: "Mohammed V University, Rabat", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif" },
    { name: "Dr. Walida Ounruean", org: "Uttaradit Rajabhat University", country: "Thailand", img: "https://static.wixstatic.com/media/30814e_ac6c40d612254293a4f1f4479dfd7b61~mv2.avif" },
    { name: "Lawrence Mazaki Mashati", org: "International Missionary for Christ Kenya", country: "Kenya", img: "https://static.wixstatic.com/media/502b14_ec9a529cdc7c4e6e852442836e4fed51~mv2.png" },
    { name: "Dr. Jitendra Pandey", org: "Middle East College (Coventry University)", country: "Oman", img: "https://static.wixstatic.com/media/30814e_bf66c69035bc4e41bc50c2345187c6f2~mv2.jpeg" },
    { name: "Dr. Walida Ounruean", org: "Faculty of Education, Thailand", country: "Thailand", img: "https://static.wixstatic.com/media/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" }
  ],
  tracks: [
    "Edge AI (Low-latency processing systems)",
    "Smart Cities (Urban intelligence frameworks)",
    "IoT Systems (Connected sensing environments)"
  ],
  delegates: [],
  awards: [],
  timeline: [
    { date: "01 Feb 2024", label: "Registration Deadline", desc: "Final registration for presenters and attendees" },
    { date: "04 Feb 2024", label: "Conference Date", desc: "Virtual presentations and keynote sessions" }
  ]
};

const Iceiis2024 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • Concluded
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              {conferenceData.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-10 text-foreground/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                <span className="font-medium">{conferenceData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-medium">{conferenceData.location}</span>
              </div>
            </div>

            <Button asChild variant="hero" size="lg" className="rounded-full shadow-xl">
              <a href={conferenceData.registrationLink}>
                Submit Paper / Register <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN OVERVIEW */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
              <div className="h-8 w-2 bg-accent rounded-full"></div>
              Conference Scope
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {conferenceData.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <Card className="p-8 bg-muted/50 border-0 shadow-inner h-full">
              <h3 className="text-xl font-bold text-primary mb-6">Objectives</h3>
              <div className="space-y-6">
                {conferenceData.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{h.title}</h4>
                      <p className="text-sm text-muted-foreground">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* TRACKS & TIMELINE COMPOSITE */}
      <section className="bg-gradient-to-r from-background to-muted py-24 mb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tracks */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Technical Tracks</h2>
              <div className="grid sm:grid-cols-1 gap-4">
                {conferenceData.tracks.map((track, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-start gap-3 hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-sm text-white">{track}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary">Important Dates</h2>
              <div className="space-y-6">
                {conferenceData.timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start relative">
                    {idx !== conferenceData.timeline.length - 1 && (
                      <div className="absolute left-6 top-10 bottom-[-24px] w-px bg-primary/30"></div>
                    )}
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 z-10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="pt-2">
                      <div className="text-xl font-bold text-primary">{item.date}</div>
                      <h4 className="font-semibold text-white mt-1">{item.label}</h4>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN SPEAKERS GRID */}
      {conferenceData.speakers && conferenceData.speakers.length > 0 && (
        <section className="container py-24 border-t">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Keynote Speakers</h2>
            <p className="text-lg text-muted-foreground">Distinguished keynote speakers from academia and global organizations.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {conferenceData.speakers.map((s, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative h-40 w-40 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  <img src={s.img} alt={s.name} className="relative h-full w-full object-cover rounded-full border-4 border-background shadow-lg z-10" loading="lazy" />
                </div>
                <h4 className="font-bold text-primary text-lg leading-tight mb-1">{s.name}</h4>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{s.org}</p>
                <span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center justify-center gap-1">
                  <Globe className="h-3 w-3" /> {s.country}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} keynoteSpeakers={conferenceData.speakers} sessionChairs={conferenceData.sessionChairs} />

    </div>
  );
};

export default Iceiis2024;
