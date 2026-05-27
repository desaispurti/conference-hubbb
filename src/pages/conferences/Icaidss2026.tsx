import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Award, Globe, BookOpen, Mic } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

const conferenceData = {
  id: "ICAIDSS-26",
  title: "International Conference on Artificial Intelligence, Data Science & Sustainable Systems",
  date: "29 March 2026",
  location: "Virtual Mode",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSex3DA3N625fuokL-Qz0yinbrBnU7ZFmgZIgK2npKFNfVMdOw/viewform?usp=publish-editor",
  about: [
    "The International Conference on Artificial Intelligence, Data Science, and Sustainable Systems (ICAIDSS-26) is a globally recognized academic and professional platform dedicated to fostering innovation, collaboration, and knowledge exchange in the rapidly advancing domains of Artificial Intelligence, Data Science, and Sustainable Technologies.",
    "In today's data-driven world, the integration of AI and Data Science with sustainable development has become essential for addressing complex global challenges. ICAIDSS-26 provides a multidisciplinary platform that encourages the exploration of advanced computational techniques and sustainable engineering practices.",
    "The conference features keynote addresses from distinguished international experts, technical paper presentations, and interactive discussions. Selected high-quality papers will be recommended for publication in reputed indexed journals."
  ],
  highlights: [
    { title: "Global Paper Presentations", desc: "Innovative research across AI, data science, and sustainability." },
    { title: "Expert Keynotes", desc: "Sessions from global experts sharing emerging tech insights." },
    { title: "Diverse Participation", desc: "Attendees from multiple countries ensuring diverse perspectives." },
    { title: "Interdisciplinary", desc: "Collaboration across AI, sustainability, and data-driven innovations." }
  ],
  speakers: [
    { name: "Dr. Walida Ounruean", org: "Uttaradit Rajabhat University", country: "Thailand", img: "https://static.wixstatic.com/media/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
    { name: "Dr. Tiansheng Yang", org: "University of South Wales", country: "UK", img: "https://static.wixstatic.com/media/30814e_ab0670f34d354ffabafcaa2849d78701~mv2.jpg" },
    { name: "Marghescu Cristina-Florentina", org: "University Politehnica of Bucharest", country: "Romania", img: "https://static.wixstatic.com/media/30814e_fb0f8a532d8a413abf8b61b143684fed~mv2.png" },
    { name: "Dr. Firas Zeidan", org: "Higher Education & Research", country: "Lebanon", img: "https://static.wixstatic.com/media/30814e_d725b17d6d374b3abf1081771e55f53f~mv2.jpeg" },
    { name: "Pradeep Kachakayala", org: "Cloud Computing & AI Solutions", country: "USA", img: "https://static.wixstatic.com/media/30814e_45aeebc11e0045a8bd8941721d274f1a~mv2.png" },
    { name: "Shikhar Singhal", org: "Data Analytics & Insurance Tech", country: "USA", img: "https://static.wixstatic.com/media/30814e_00654a10251849539ec26353342c5dbf~mv2.jpg" },
    { name: "Dr. Mohamed Rebbouj", org: "Hassan II University of Casablanca", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_1fbcfb0ce35f425eabb9dd005a658e05~mv2.jpeg" },
    { name: "Manoj Bahirgonde", org: "Digital Transformation Leadership", country: "USA", img: "https://static.wixstatic.com/media/30814e_0f9939591f474b57b412a1f5f02a3efe~mv2.jpeg" },
    { name: "Dr. Ayoub Regragui", org: "International Teaching", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_29e2749c5b2849cab290759fb9dde0dc~mv2.png" },
    { name: "Dr. Elizabeth Sarah George", org: "RV University", country: "India", img: "https://static.wixstatic.com/media/30814e_821d66fc49f64b71a44eb747ef514580~mv2.jpeg" },
    { name: "Mouhssin Ait El Mouden", org: "Ibn Tofail University", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" }
  ],
  tracks: [
    "Artificial Intelligence & Machine Learning",
    "Data Science & Big Data Analytics",
    "Sustainable Computing",
    "Smart Cities & IoT",
    "Cybersecurity & Blockchain",
    "Green Energy Systems"
  ],
  awards: [
    "Best Paper Award",
    "Best Presentation Award",
    "Best Student Paper",
    "Innovative Research Award"
  ],
  delegates: [
    { name: "TRAORE Parfait Doubassi", org: "Université Norbert Zongo", country: "Burkina Faso" },
    { name: "Halima ALMaktoumi", org: "Sohar University", country: "Oman" },
    { name: "KHADRAN ALSAHAIMI", org: "Jamia Hamdard", country: "Saudi Arabia" },
    { name: "James Abdul Malik", org: "Academy for Cultural Diplomacy", country: "Germany" },
    { name: "Andreza Costa", org: "IPM", country: "Brazil" },
    { name: "Samsar Naouel", org: "Faculty of Medicine Oran", country: "Algeria" },
    { name: "Marghescu Cristina-Florentina", org: "UPB", country: "Romania" }
  ],
  timeline: [
    { date: "10 March 2026", label: "Submission Deadline", desc: "Final date for paper submission" },
    { date: "18 March 2026", label: "Acceptance Notification", desc: "Authors receive review results" },
    { date: "22 March 2026", label: "Final Paper Submission", desc: "Camera-ready paper deadline" },
    { date: "29 March 2026", label: "Conference Date", desc: "Virtual conference day" }
  ]
};

const Icaidss2026 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • Open for Registration
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
                Register for Event <ArrowRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl font-serif font-bold mb-8 text-accent">Important Dates</h2>
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

export default Icaidss2026;
