import React from "react";
import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, Globe, BookOpen, Search, Book, Users, Target, ShieldCheck } from "lucide-react";

const conferenceData = {
  id: "ICAIDS-2024",
  title: "International Conference on Autonomous AI & Distributed Intelligence Systems",
  date: "10 March 2024",
  location: "Virtual Mode",
  registrationLink: "#",
  about: [
    "ICAIDS-2024 brings together researchers and practitioners exploring scalable artificial intelligence, multi-agent systems, and distributed intelligent architectures. The conference focuses on decentralized decision-making, autonomous system coordination, and resilient AI infrastructures.",
    "The conference aims to create a global research forum for exploring distributed intelligence systems capable of autonomous reasoning and adaptive decision-making in complex environments. It emphasizes scalability, resilience, and real-world applicability of AI systems deployed across distributed computing ecosystems."
  ],
  objectives: [
    "Advance research in distributed AI architectures.",
    "Encourage innovation in autonomous decision systems.",
    "Promote collaboration across academia and industry.",
    "Address scalability and system resilience challenges."
  ],
  audience: [
    "AI researchers and system architects.",
    "Industry professionals in distributed computing.",
    "PhD scholars and postgraduate researchers.",
    "Technology strategists and innovators."
  ],
  tracks: [
    { title: "Distributed AI Systems", desc: "Decentralized architectures and scalable AI models." },
    { title: "Multi-Agent Intelligence", desc: "Coordination and communication in agent-based systems." },
    { title: "Autonomous Decision Systems", desc: "Self-learning and adaptive intelligent systems." },
    { title: "Edge & Cloud Intelligence", desc: "Hybrid computing frameworks for AI deployment." }
  ],
  evaluation: [
    "Double-blind peer review",
    "Plagiarism screening",
    "Technical quality evaluation",
    "Clarity and innovation assessment"
  ],
  publication: [
    "Accepted papers will be published in conference proceedings with ISBN.",
    "Selected works may be recommended for Scopus or Web of Science indexed journals."
  ],
  ethics: [
    "No plagiarism",
    "Original work only",
    "No multiple submissions",
    "Proper citations required"
  ],
  speakers: [
    { name: "Dr. Nadia Adnan", role: "Assistant Professor & Research Scientist", desc: "Stanford World's Top 2% Scientist, Management and Marketing, Prince Mohammad Bin Fahd University", country: "Saudi Arabia", img: "https://static.wixstatic.com/media/30814e_68479290bb114146b46b56f021a75155~mv2.png" },
    { name: "Dr. Ranà El Khawand", role: "Technical Expert", desc: "Saida Risk Mapping Project (UN-Habitat)", country: "UN HABITAT", img: "https://static.wixstatic.com/media/502b14_e3b96c6fde384f0ba16dd14be8710af3~mv2.png" },
    { name: "Dr. Danijela V. Pantović", role: "Assistant Professor", desc: "University of Kragujevac", country: "Serbia", img: "https://static.wixstatic.com/media/30814e_b097c784e55f4e38837f599a1f7f735c~mv2.jpeg" },
    { name: "Dr. Darja Antolin Dresar", role: "Ph.D., Associate Professor", desc: "University of Maribor, Faculty of Education", country: "Slovenia", img: "https://static.wixstatic.com/media/30814e_d89f6d1fda8143458c4f407543d1460f~mv2.jpeg" },
    { name: "Prof. Dr. Alexander Bull", role: "Professor", desc: "Faculty of Business Administration, IU International University of Applied Sciences", country: "Germany", img: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
    { name: "Dr. Aleksandra Gardasevic-Slavuljica", role: "Expert", desc: "Royal Commission for AlUla, Saudi Arabia; National Airline of Montenegro", country: "Montenegro", img: "https://static.wixstatic.com/media/30814e_bf1d23feb75d44208e57fb12c007e7ac~mv2.jpeg" },
    { name: "Dr. Firas Zeidan", role: "Researcher and Professor", desc: "", country: "Lebanon", img: "https://static.wixstatic.com/media/30814e_571b3e70d8ff476f8b1272ef84538d8f~mv2.jpeg" },
    { name: "Mouhssin Ait El Mouden", role: "Researcher", desc: "Faculty of Letters, Ibn Tofail University, Kenitra", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" },
    { name: "Dr. Walida Ounruean", role: "International Education Ambassador", desc: "Faculty of Education, Thailand", country: "Thailand", img: "https://static.wixstatic.com/media/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" }
  ],
  timeline: [
    { date: "7 March 2024", label: "Registration Deadline", desc: "Last day to register for the conference" },
    { date: "10 March 2024", label: "Conference Date", desc: "Main event (Virtual Mode)" }
  ]
};

const Icaids2024 = () => {
  return (
    <div className="bg-background">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • Past Conference
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
                Submit Full Paper <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* OVERVIEW & OBJECTIVES */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
              <div className="h-8 w-2 bg-accent rounded-full"></div>
              Conference Scope & Vision
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {conferenceData.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-8 flex items-center gap-3">
              <div className="h-8 w-2 bg-accent rounded-full"></div>
              Target Audience
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {conferenceData.audience.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border">
                  <Users className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <Card className="p-8 bg-muted/50 border-0 shadow-inner h-full">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Target className="h-6 w-6 text-accent" /> Conference Objectives
              </h3>
              <div className="space-y-4">
                {conferenceData.objectives.map((obj, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground font-medium">{obj}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* TECHNICAL TRACKS */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Technical Tracks</h2>
            <p className="text-lg text-muted-foreground">Areas of focus for research and presentation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conferenceData.tracks.map((track, idx) => (
              <Card key={idx} className="p-6 bg-card hover:-translate-y-1 transition-transform border-t-4 border-t-accent shadow-sm">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-3">{track.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{track.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EVALUATION & ETHICS */}
      <section className="bg-gradient-to-r from-background to-muted py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3 text-primary">
                <Search className="h-6 w-6" /> Submission & Evaluation
              </h2>
              <div className="space-y-4">
                {conferenceData.evaluation.map((item, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3 text-primary">
                <Book className="h-6 w-6" /> Publication & Indexing
              </h2>
              <div className="space-y-4">
                {conferenceData.publication.map((item, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3 text-accent">
                <ShieldCheck className="h-6 w-6" /> Research Ethics
              </h2>
              <div className="space-y-4">
                {conferenceData.ethics.map((item, idx) => (
                  <div key={idx} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container py-24 border-b">
        <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Important Dates</h2>
        <div className="grid sm:grid-cols-2 max-w-4xl mx-auto gap-6">
          {conferenceData.timeline.map((item, idx) => (
            <Card key={idx} className="p-8 border-l-4 border-accent relative overflow-hidden bg-card text-center flex flex-col items-center">
              <Calendar className="h-10 w-10 text-accent mb-4" />
              <h4 className="text-lg font-bold text-muted-foreground mb-2">{item.label}</h4>
              <p className="text-3xl font-serif font-bold text-primary mb-2">{item.date}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* LEADERSHIP GRID */}
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Keynote Speakers</h2>
          <p className="text-lg text-muted-foreground">The visionaries and academic leaders presenting at ICAIDS-2024.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {conferenceData.speakers.map((s, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="relative h-40 w-40 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                <img src={s.img} alt={s.name} className="relative h-full w-full object-cover rounded-full border-4 border-background shadow-lg z-10" loading="lazy" />
              </div>
              <h4 className="font-bold text-primary text-lg leading-tight mb-1">{s.name}</h4>
              <p className="text-sm font-semibold text-accent mb-1">{s.country}</p>
              <p className="text-sm text-muted-foreground mb-1">{s.role}</p>
              {s.desc && <p className="text-xs text-muted-foreground/70">{s.desc}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-muted py-20 text-center border-t">
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Call for Contributions</h2>
        <p className="text-lg text-muted-foreground mb-8">Submit your research and be part of a global platform shaping the future of AI systems.</p>
        <Button asChild size="lg" className="rounded-full shadow-xl">
          <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer">
            Register Now
          </a>
        </Button>
      </section>
      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} keynoteSpeakers={conferenceData.speakers} sessionChairs={conferenceData.sessionChairs} />

    </div>
  );
};

export default Icaids2024;
