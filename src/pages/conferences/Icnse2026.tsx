import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Globe, BookOpen, Star } from "lucide-react";

const conferenceData = {
  id: "ICNSE-26",
  title: "International Conference on Next-Generation Science & Engineering",
  date: "01 March 2026",
  location: "Virtual Mode",
  registrationLink: "https://forms.gle/RSoUDhZzGfgYdMiN6",
  about: [
    "ICNSE-26 is a premier global academic platform dedicated to interdisciplinary research, innovation, and scholarly collaboration.",
    "The conference brings together researchers, academicians, industry leaders, and doctoral scholars worldwide. It serves as a catalyst for advancing global research, engineering innovation, and scientific excellence.",
    "All papers undergo rigorous peer review to ensure academic excellence, providing an impactful venue for sharing cutting-edge technological developments."
  ],
  highlights: [
    { title: "Global Research Platform", desc: "Dedicated to interdisciplinary research, innovation, and scholarly collaboration." },
    { title: "Diverse Participation", desc: "Brings together researchers, academicians, industry leaders, and doctoral scholars worldwide." },
    { title: "Rigorous Peer Review", desc: "All papers undergo rigorous double-blind peer review to ensure academic excellence." },
    { title: "ISBN Publication", desc: "All accepted papers will be published in official conference proceedings with an ISBN." }
  ],
  speakers: [
    { name: "Prof. (Dr.) Tanaji Dabade", org: "Navsahyadri Education Society Group of Institutions", country: "India", img: "https://static.wixstatic.com/media/30814e_85d4d1b8288f40749bae07d46b5a9683~mv2.jpeg" },
    { name: "Dr. Yulia Kryvenko", org: "Istanbul Sabahattin Zaim University", country: "France", img: "https://static.wixstatic.com/media/30814e_1cc9e627ca8342d59e4122b9240e638d~mv2.png" },
    { name: "Prof. Dr. Alexander Bull", org: "IU International University", country: "Germany", img: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
    { name: "Manuja Bandal", org: "Software Engineer & Innovator", country: "USA", img: "https://static.wixstatic.com/media/30814e_871155ce5f72470c95772f064886f06e~mv2.jpeg" },
    { name: "Dr. Walida Ounruean", org: "Uttaradit Rajabhat University", country: "Thailand", img: "https://static.wixstatic.com/media/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
    { name: "Ezinne Esther Arisa", org: "Candy Rainbow Creations", country: "South Africa", img: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
    { name: "Harikrishnan R. Pillai", org: "AI & Distributed Systems", country: "USA", img: "https://static.wixstatic.com/media/30814e_73c89054e75f4b3bb9bf0c838418960f~mv2.png" },
    { name: "Mouhssin Ait El Mouden", org: "Ibn Tofail University", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" },
    { name: "Ponsankar Shanmugam S", org: "Distributed & AI Systems", country: "USA", img: "https://static.wixstatic.com/media/30814e_4a4018f89ef94597bca4b870f45069b0~mv2.jpeg" },
    { name: "Dr. Entela Shkodrani", org: "University Hospital Center, Tirana", country: "Albania", img: "https://static.wixstatic.com/media/30814e_1729c779d5bf4cbc9d0b4b2e1d51e148~mv2.jpeg" },
    { name: "Sanjay Poddar", org: "Secure Cloud Strategist", country: "USA", img: "https://static.wixstatic.com/media/30814e_d78a35a5685040edb9f9ad90272fa830~mv2.jpeg" },
    { name: "Dr. Elizabeth Sarah George", org: "RV University", country: "India", img: "https://static.wixstatic.com/media/30814e_821d66fc49f64b71a44eb747ef514580~mv2.jpeg" }
  ],
  tracks: [
    "Artificial Intelligence & Data Science",
    "Software Engineering",
    "Cybersecurity",
    "Emerging Technologies",
    "Cloud Computing & Distributed Systems",
    "IoT & Robotics"
  ],
  awards: [
    "ISBN: 978-81-998717-9-3 Proceedings",
    "Rigorous Double-Blind Peer Review",
    "Global Academic Indexing",
    "Open Access Digital Library"
  ],
  delegates: [
    { name: "Andreza Malena Guedes", org: "IPM", country: "Brazil" },
    { name: "Fatimah Alneel", org: "The University of Arizona", country: "United States" },
    { name: "Samsar Naouel", org: "Faculty of Medicine, Oran", country: "Algeria" },
    { name: "Peyelinga Ndangiato Jomplin", org: "Privé", country: "Algeria" },
    { name: "Marghescu Cristina-Florentina", org: "University Politehnica of Bucharest", country: "Romania" },
    { name: "Diakite Samba Kani", org: "Ministry of Environment", country: "Guinea" },
    { name: "Pauline Efeti Luma", org: "Hasselt University", country: "Belgium" },
    { name: "Gail Narinesingh", org: "The University of the West Indies", country: "Trinidad" },
    { name: "Fatemeh Doostgharin", org: "Quranic Research", country: "Iran" }
  ],
  timeline: [
    { date: "15 Feb 2026", label: "Abstract Deadline", desc: "Abstract submission" },
    { date: "20 Feb 2026", label: "Full Paper Deadline", desc: "Full paper submission" },
    { date: "25 Feb 2026", label: "Acceptance Notice", desc: "Notification of acceptance" },
    { date: "28 Feb 2026", label: "Final Paper", desc: "Camera-ready submission" },
    { date: "28 Feb 2026", label: "Registration", desc: "Registration deadline" },
    { date: "01 Mar 2026", label: "Conference Date", desc: "Virtual conference day" }
  ]
};

const Icnse2026 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/20">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • ISBN: 978-81-998717-9-3
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

      {/* DELEGATES & PUBLICATION */}
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

            {/* Publication */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <Star className="h-8 w-8 text-accent" />
                Publication
              </h2>
              <Card className="p-6 bg-primary text-primary-foreground border-0 shadow-xl relative overflow-hidden">
                <Star className="absolute -right-6 -bottom-6 h-48 w-48 text-primary-foreground/5" />
                <div className="relative z-10 space-y-6">
                  {conferenceData.awards.map((award, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
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

export default Icnse2026;
