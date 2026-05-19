import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Award, Trophy, Star, Users, BrainCircuit, Globe2, Target, Network, ChevronRight, Clock, ShieldCheck } from "lucide-react";
import innovationImg from "@/assets/innovation.jpg";

const objectives = [
  { icon: Globe2, text: "Provide a trusted international platform for researchers and innovators." },
  { icon: Network, text: "Connect global experts, academicians, and scientists." },
  { icon: BrainCircuit, text: "Encourage interdisciplinary integration across AI, healthcare, and engineering." },
  { icon: Award, text: "Recognize exceptional talent through awards and certifications." },
  { icon: Target, text: "Offer mentorship and detailed evaluation from distinguished judges." },
  { icon: Users, text: "Promote collaborative research, industry partnerships, and networking." },
];

const schedule = [
  { time: "9:00 AM – 10:00 AM", title: "Opening Ceremony & Keynote Address", desc: "Welcome speech, event overview, and keynote by an international expert." },
  { time: "10:00 AM – 1:00 PM", title: "Research & Innovation Presentations", desc: "Participants present their projects (10–15 minutes each) followed by Q&A." },
  { time: "1:30 PM – 3:00 PM", title: "Expert Panel Discussions", desc: "Deep discussions on artificial intelligence, sustainability, data innovation, and global challenges." },
  { time: "3:15 PM – 4:30 PM", title: "Interactive Workshops", desc: "Hands-on sessions led by industry leaders sharing practical insights and tools." },
  { time: "4:30 PM – 5:30 PM", title: "Judging & Deliberation", desc: "Evaluation based on innovation, impact, clarity, and global relevance." },
  { time: "5:45 PM – 6:30 PM", title: "Awards Ceremony", desc: "Announcement of winners, certificates, and special recognitions." },
  { time: "6:30 PM – 7:00 PM", title: "Closing Remarks & Networking", desc: "Interaction among participants, judges, and invited experts." },
];

const judgingCriteria = [
  "Innovation and originality of the work",
  "Technical depth and scientific clarity",
  "Real-world impact and problem-solving potential",
  "Presentation quality and communication skills",
  "Contribution to academic and industrial advancement"
];

const awards = [
  { title: "Global Research Excellence", icon: Trophy, desc: "Highest overall score" },
  { title: "Innovation Leadership", icon: Star, desc: "Most disruptive concept" },
  { title: "Young Researcher Award", icon: Award, desc: "Students & early-career" },
  { title: "People’s Choice Award", icon: Users, desc: "Audience voting" },
];

const InnovationChallenge = () => (
  <main className="min-h-screen bg-background text-foreground overflow-hidden">
    {/* HERO SECTION */}
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <img src={innovationImg} alt="Innovation" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale-[30%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
      </div>
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" style={{animationDelay: '2s'}} />

      <div className="relative container z-10 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-strong border-gradient-mint mb-8 animate-fade-in hover:scale-105 transition-smooth cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          <span className="text-sm font-bold text-white tracking-widest uppercase">Flagship Initiative • March 2026</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-black text-white leading-[1.05] tracking-tight mb-8 animate-fade-up">
          Global Research & <br />
          <span className="text-gradient">Innovation Challenge</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-12 animate-fade-up font-medium" style={{animationDelay: '100ms'}}>
          A premier international platform celebrating brilliant minds, groundbreaking research, and transformative innovations shaping the future. Hybrid Event (In-person + Online).
        </p>
        
        <div className="flex flex-wrap items-center gap-6 animate-fade-up" style={{animationDelay: '200ms'}}>
          <Button asChild size="lg" className="bg-primary text-primary-foreground h-16 px-10 rounded-full font-bold text-lg shadow-gold hover:-translate-y-1 transition-all group">
            <a href="#register">
              Register to Participate <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="glass h-16 px-10 rounded-full font-bold text-lg border-white/20 text-white hover:bg-white/10 transition-all">
            <a href="#register">Apply as Judge</a>
          </Button>
        </div>
      </div>
    </section>

    {/* ABOUT & OBJECTIVES (BENTO GRID) */}
    <section className="container py-32 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent mb-4">
            <Target className="h-4 w-4" /> Vision & Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Empowering Global Innovators</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Eminsphere™ proudly presents the <strong>Global Research & Innovation Challenge 2026</strong>. This event brings together researchers, academicians, innovators, industry professionals, and students to showcase their work before a distinguished global panel.
            </p>
            <p>
              This challenge supports multidisciplinary research across engineering, technology, data science, healthcare, AI, and cybersecurity. Participants gain international visibility, expert feedback, and opportunities for collaboration.
            </p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {objectives.slice(0, 4).map((obj, i) => (
            <Card key={i} className="glass border-white/5 p-6 hover:border-primary/50 transition-colors bg-card hover:-translate-y-1">
              <obj.icon className="h-10 w-10 text-primary mb-4" />
              <p className="text-white text-sm font-medium leading-relaxed">{obj.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* SCHEDULE - VERTICAL TIMELINE */}
    <section className="bg-primary/5 py-32 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container relative z-10 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Event Schedule</h2>
          <p className="text-xl text-muted-foreground">01 March 2026 • Hybrid Execution</p>
        </div>

        <div className="space-y-6">
          {schedule.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start group">
              <div className="md:w-1/3 shrink-0 flex items-center gap-4 text-primary font-bold text-lg md:justify-end mt-1">
                <Clock className="h-5 w-5" />
                <span>{item.time}</span>
              </div>
              
              <div className="hidden md:flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20 group-hover:scale-125 transition-transform" />
                {idx !== schedule.length - 1 && <div className="w-0.5 h-full min-h-[80px] bg-white/10 my-2" />}
              </div>

              <div className="md:w-2/3 glass p-6 md:p-8 rounded-2xl border-white/5 group-hover:border-primary/30 transition-colors w-full">
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* JUDGING & AWARDS */}
    <section className="container py-32">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Judging Criteria */}
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent mb-4">
            <ShieldCheck className="h-4 w-4" /> Global Evaluation
          </div>
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Judging Panel & Criteria</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The judging committee consists of 5–7 internationally recognized researchers and industry practitioners bringing years of expertise in AI, sustainability, and innovation leadership.
          </p>
          
          <Card className="glass-strong border-white/10 p-8 rounded-3xl">
            <h3 className="font-bold text-white text-xl mb-6">Key Evaluation Metrics</h3>
            <ul className="space-y-4">
              {judgingCriteria.map((crit, idx) => (
                <li key={idx} className="flex gap-4 text-muted-foreground text-lg items-center">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ChevronRight className="h-4 w-4 text-primary" />
                  </div>
                  <span>{crit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Awards Gallery */}
        <div>
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent mb-4">
            <Trophy className="h-4 w-4" /> Recognition
          </div>
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Awards & Certifications</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            To honor excellence, Eminsphere™ will confer a series of prestigious awards. Each winner receives an internationally recognized certificate and digital badge.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
              <Card key={idx} className="p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(243,192,150,0.15)] transition-all duration-500 border-white/5 bg-card group relative overflow-hidden h-full rounded-3xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:border-accent/30 group-hover:bg-accent/20">
                    <award.icon className="h-7 w-7 text-white group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white mb-2 group-hover:text-accent transition-colors">{award.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{award.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>

    {/* REGISTRATION CTA */}
    <section id="register" className="bg-primary/5 border-t border-primary/20 py-32 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="container max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Ready to Innovate?</h2>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Select your role below to complete your registration for the Eminsphere™ Global Research & Innovation Challenge 2026.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold h-16 px-10 text-lg rounded-full shadow-gold hover:-translate-y-1 transition-all">
            <a href="https://forms.gle/u92vqGpPECjTw6JV7" target="_blank" rel="noopener noreferrer">
              Participant Registration <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="glass h-16 px-10 text-lg font-bold rounded-full border-white/20 hover:bg-white/10 transition-all">
            <a href="https://forms.gle/nQqWoqoQQd8FSsU4A" target="_blank" rel="noopener noreferrer">
              Apply as Judge / Expert
            </a>
          </Button>
        </div>
      </div>
    </section>
  </main>
);

export default InnovationChallenge;
