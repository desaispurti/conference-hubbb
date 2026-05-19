import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Award, Globe, BookOpen } from "lucide-react";

const conferenceData = {
  id: "ICAESET-2026",
  title: "International Conference on Advanced Engineering Systems, Computing and Emerging Technologies",
  date: "15 March 2026",
  location: "Global Participation",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfoPQQwUL4urf-2RoBQeB1D5c1O1tDtZmtZbY9v6EJwJ6z4nQ/viewform?usp=publish-editor",
  about: [
    "ICAESET-2026 invites researchers, academicians, scientists, industry professionals, and postgraduate students to submit original research papers describing innovative research contributions in engineering, computing, and emerging technologies.",
    "All submissions should present original research findings, technological innovations, or practical applications that contribute to the advancement of modern engineering and computing systems.",
    "Selected papers will be presented during the conference and will contribute to international research dissemination and knowledge exchange."
  ],
  highlights: [
    { title: "International Paper Presentations", desc: "Researchers will present innovative research papers from diverse technological domains." },
    { title: "Expert Talks", desc: "Renowned experts and researchers will share insights on emerging technologies." },
    { title: "Global Participation", desc: "Participants from universities, research institutes, and industries worldwide." },
    { title: "Interdisciplinary Discussions", desc: "Explore collaboration opportunities across engineering, computing, and innovation sectors." }
  ],
  speakers: [
    { name: "Ezinne Esther Arisa", org: "Candy Rainbow Creations", country: "South Africa", img: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
    { name: "Karl G. Sieg, M.D.", org: "University of Central Florida College of Medicine", country: "United States", img: "https://static.wixstatic.com/media/30814e_42822b0bd0f145f2a68dd68462fe499c~mv2.jpeg" },
    { name: "Rajendra Ugrani", org: "AI, ML, Security", country: "USA", img: "https://static.wixstatic.com/media/30814e_bc3782d50a1d430d8cc0ab38bfa0b6c5~mv2.jpeg" },
    { name: "Katarzyna Antosz", org: "Rzeszow University of Technology", country: "Poland", img: "https://static.wixstatic.com/media/30814e_d511f14d64114d2785f3aa065a35cbb9~mv2.jpeg" },
    { name: "Dr. Mehwish (Mishy) Rashid", org: "Keiser University", country: "USA", img: "https://static.wixstatic.com/media/30814e_d030e1dbf7ef4028909beba2b99a69be~mv2.jpeg" },
    { name: "Dr. Amit Kukker", org: "SRM Institute of Science and Technology", country: "India", img: "https://static.wixstatic.com/media/30814e_202af98a01b44a83a30ccb73a0e07ce8~mv2.jpeg" },
    { name: "Prajakta Talathi", org: "Education Finance", country: "USA", img: "https://static.wixstatic.com/media/30814e_bf9d3d9fb4974bc0ba217b4bb03ea14d~mv2.jpg" },
    { name: "Nadine Zeinoun", org: "President, ICF Chapter Ottawa", country: "Lebanon", img: "https://static.wixstatic.com/media/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg" },
    { name: "Prof. Dr. Alexander Bull", org: "IU International University", country: "Germany", img: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
    { name: "Karan Kumar Ratra", org: "Retail Technology", country: "USA", img: "https://static.wixstatic.com/media/30814e_b013ae4c49494f099151f25bbffb92fe~mv2.jpeg" },
    { name: "Dr. Yulia Kryvenko", org: "Istanbul Sabahattin Zaim University", country: "France", img: "https://static.wixstatic.com/media/30814e_1cc9e627ca8342d59e4122b9240e638d~mv2.png" }
  ],
  tracks: [
    "Artificial Intelligence & Machine Learning",
    "Data Science & Big Data Analytics",
    "Electronics & Communication Engineering",
    "Internet of Things & Embedded Systems",
    "Robotics & Automation",
    "Cybersecurity & Blockchain",
    "Cloud & Edge Computing",
    "Smart Systems & Industry 4.0"
  ],
  awards: [
    "Best Paper Award",
    "Best Presentation Award",
    "Best Student Paper Award",
    "Innovative Research Award",
    "Young Researcher Award",
    "Outstanding Contribution Award"
  ],
  delegates: [
    { name: "Andreza Malena Guedes da Costa Silva", org: "IPM", country: "Brazil" },
    { name: "Fatimah Alneel", org: "The University of Arizona", country: "United States" },
    { name: "Marghescu Cristina-Florentina", org: "University Politehnica of Bucharest", country: "Romania" },
    { name: "Khadran Mohammed A Alsahaimi", org: "Jamia Hamdard", country: "Saudi Arabia" },
    { name: "James Abdul Malik", org: "Academy for Cultural Diplomacy", country: "Germany" },
    { name: "Dr. Jitendra Pandey, FHEA", org: "Middle East College", country: "Oman" },
    { name: "Emem Akpabio", org: "Invited Delegate", country: "South Africa" }
  ],
  timeline: [
    { date: "20 Feb 2026", label: "Abstract Deadline", desc: "Abstract submission" },
    { date: "25 Feb 2026", label: "Full Paper Deadline", desc: "Full paper submission" },
    { date: "05 Mar 2026", label: "Acceptance Notice", desc: "Notification of acceptance" },
    { date: "10 Mar 2026", label: "Final Paper", desc: "Final paper submission" },
    { date: "12 Mar 2026", label: "Registration", desc: "Registration deadline" },
    { date: "15 Mar 2026", label: "Conference Date", desc: "Virtual conference day" }
  ]
};

const Icaeset2026 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • Call for Papers
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
              <a href={conferenceData.registrationLink} target="_blank" rel="noopener noreferrer">
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
              Conference Overview
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {conferenceData.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <Card className="p-8 bg-muted/50 border-0 shadow-inner h-full">
              <h3 className="text-xl font-bold text-primary mb-6">Key Highlights</h3>
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
      <section className="bg-gradient-to-r from-background to-muted py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tracks */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Technical Tracks</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {conferenceData.tracks.map((track, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-start gap-3 hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-sm">{track}</span>
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
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Distinguished Speakers</h2>
          <p className="text-lg text-muted-foreground">Hear from our panel of international experts and industry leaders.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
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

      {/* DELEGATES & AWARDS */}
      <section className="bg-muted py-24 border-y">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Delegates */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <User className="h-8 w-8 text-accent" />
                International Delegates
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {conferenceData.delegates.map((d, idx) => (
                  <Card key={idx} className="p-4 flex flex-col justify-center bg-card hover:shadow-md transition-shadow border-0">
                    <h4 className="font-bold text-foreground">{d.name}</h4>
                    <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                      <span className="truncate pr-4">{d.org}</span>
                      <span className="font-medium text-accent shrink-0">{d.country}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <Award className="h-8 w-8 text-accent" />
                Awards
              </h2>
              <Card className="p-6 bg-primary text-primary-foreground border-0 shadow-xl relative overflow-hidden">
                <Award className="absolute -right-6 -bottom-6 h-48 w-48 text-primary-foreground/5" />
                <div className="relative z-10 space-y-6">
                  {conferenceData.awards.map((award, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Award className="h-5 w-5 text-accent" />
                      </div>
                      <span className="font-bold text-lg">{award}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} keynoteSpeakers={conferenceData.speakers} sessionChairs={conferenceData.sessionChairs} />
      </div>
  );
};

export default Icaeset2026;
