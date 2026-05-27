import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, Globe, BookOpen, Star, Trophy, Award, Search, Book } from "lucide-react";

const conferenceData = {
  id: "ICAITS-26",
  title: "International Conference on Artificial Intelligence & Intelligent Technology Systems",
  date: "21 June 2026",
  location: "Virtual Mode",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfN58Q2gYRO9ynO518Mai3mlWflPZ5F7i0acBtYo75ynxlIeA/viewform?usp=publish-editor",
  about: [
    "A premier global platform focusing on AI-driven intelligent systems, modern software architectures, and emerging digital technologies transforming industries worldwide.",
    "ICAITS-26 aims to bring together researchers, engineers, developers, and academicians to explore advancements in Artificial Intelligence, intelligent systems, and software technologies. The conference encourages innovation in automation, digital transformation, and scalable system design."
  ],
  callForPapers: "Researchers and professionals are invited to submit original contributions in AI, software systems, and emerging technologies.",
  objectives: [
    { title: "AI Innovation", desc: "Advancing intelligent algorithms and automation." },
    { title: "Software Excellence", desc: "Improving scalable and efficient systems." },
    { title: "Global Collaboration", desc: "Connecting researchers worldwide." },
    { title: "Future Technologies", desc: "Exploring next-gen computing solutions." }
  ],
  publication: [
    { title: "ISBN Proceedings", desc: "All accepted papers will be published with ISBN recognition." },
    { title: "Scopus Opportunity", desc: "Selected papers may be recommended for Scopus journals." },
    { title: "Web of Science", desc: "High-quality papers may be submitted to WoS journals." },
    { title: "Peer Review", desc: "Double-blind international peer review process." }
  ],
  awards: [
    "Best Paper Award",
    "Best Presentation Award",
    "Best Student Paper Award",
    "Innovation Award"
  ],
  tracks: [
    { title: "AI & Machine Learning", desc: "Deep learning, NLP, intelligent systems." },
    { title: "Software Engineering", desc: "System design, DevOps, architectures." },
    { title: "Cloud Computing", desc: "Distributed systems and cloud platforms." },
    { title: "Cybersecurity", desc: "Secure systems and digital protection." }
  ],
  timeline: [
    { date: "27 May 2026", label: "Submission", desc: "Deadline for paper submission" },
    { date: "04 June 2026", label: "Acceptance", desc: "Notification of acceptance" },
    { date: "12 June 2026", label: "Final", desc: "Camera-ready submission" },
    { date: "21 June 2026", label: "Conference Date", desc: "Main event" }
  ]
};

const Icaits26 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • Upcoming Conference
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
              <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer">
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
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
              About the Conference
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {conferenceData.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-12 p-8 bg-accent/5 rounded-2xl border border-accent/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Call for Papers</h3>
              <p className="text-muted-foreground text-lg">{conferenceData.callForPapers}</p>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <Card className="p-8 bg-muted/50 border-0 shadow-inner h-full">
              <h3 className="text-xl font-bold text-primary mb-6">Conference Objectives</h3>
              <div className="space-y-6">
                {conferenceData.objectives.map((obj, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{obj.title}</h4>
                      <p className="text-sm text-muted-foreground">{obj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* PUBLICATION & AWARDS */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <Book className="h-8 w-8 text-accent" />
                Publication & Indexing
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {conferenceData.publication.map((pub, idx) => (
                  <Card key={idx} className="p-6 bg-card hover:shadow-md transition-shadow border-t-4 border-t-primary">
                    <h4 className="font-bold text-lg mb-2">{pub.title}</h4>
                    <p className="text-sm text-muted-foreground">{pub.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <Trophy className="h-8 w-8 text-accent" />
                Awards & Recognition
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {conferenceData.awards.map((award, idx) => (
                  <Card key={idx} className="p-6 bg-card flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow border-t-4 border-t-accent">
                    <Award className="h-10 w-10 text-accent mb-3" />
                    <h4 className="font-bold text-lg">{award}</h4>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS & TIMELINE COMPOSITE */}
      <section className="bg-gradient-to-r from-background to-muted py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tracks */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Conference Tracks</h2>
              <div className="grid sm:grid-cols-1 gap-4">
                {conferenceData.tracks.map((track, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-5 flex items-start gap-4 hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">{track.title}</h4>
                      <p className="text-sm text-white/60">{track.desc}</p>
                    </div>
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
                      <div className="absolute left-6 top-10 bottom-[-24px] w-px bg-primary-foreground/20"></div>
                    )}
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 z-10">
                      <Calendar className="h-5 w-5 text-accent" />
                    </div>
                    <div className="pt-2">
                      <div className="text-xl font-bold text-accent">{item.date}</div>
                      <h4 className="font-semibold text-white mt-1">{item.label}</h4>
                      <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24 text-center">
        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Submit Your Paper</h2>
        <Button asChild size="lg" className="rounded-full shadow-xl px-12 py-6 text-lg">
          <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer">
            Register Now
          </a>
        </Button>
      </section>
      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} keynoteSpeakers={conferenceData.speakers} sessionChairs={conferenceData.sessionChairs} />

    </div>
  );
};

export default Icaits26;
