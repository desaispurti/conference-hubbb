import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Microscope, 
  Cpu, 
  Lightbulb, 
  Activity, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Download, 
  Calendar,
  GraduationCap,
  Briefcase
} from "lucide-react";

const ResearchFunding = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageHero
        eyebrow="Official Global Call"
        title="Research Funding & Grant Programs"
        description="Advancing Scientific Innovation, Academic Excellence, Healthcare Research & Global Collaboration."
        variant="particles"
      />

      {/* HERO / INTRO SECTION */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Eminsphere™ invites proposals from Medical Institutes, Universities, Research Organizations, Technology Institutes, Industrial R&D Centers, Innovation Hubs, Healthcare Institutions, and multidisciplinary academic bodies for institutional funding support, collaborative research programs, industrial innovation initiatives, and strategic academic partnerships.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild size="lg" className="rounded-full shadow-xl px-8 h-14 text-lg">
              <a 
                href="https://30814e9b-93fd-4fff-a0e3-26e2def43d28.usrfiles.com/ugd/30814e_ec940eedc9944692857c2ab16f5d2cdb.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" /> Download Official Brochure
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg" onClick={() => document.getElementById('submission')?.scrollIntoView({ behavior: 'smooth' })}>
              Submission Guidelines
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT THE INITIATIVE */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wider uppercase mb-4">
              Strategic Funding
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Institutional Funding & Research Advancement</h2>
            <p className="text-lg text-muted-foreground">The Eminsphere™ Funding Initiative supports innovative, high-impact, and interdisciplinary projects aligned with global scientific advancement, technology innovation, and sustainable academic excellence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 border-t-4 border-t-primary hover:-translate-y-2 transition-transform duration-300">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Activity className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Medical & Healthcare</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Funding support for biomedical engineering, healthcare innovation, clinical research, diagnostics, pharmaceutical studies, telemedicine, and public health systems.</p>
            </Card>
            
            <Card className="p-8 border-t-4 border-t-accent hover:-translate-y-2 transition-transform duration-300">
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Cpu className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Technology & Engineering</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Grants supporting Artificial Intelligence, Robotics, Cybersecurity, Semiconductor Technology, Data Science, IoT, Cloud Computing, and advanced engineering systems.</p>
            </Card>

            <Card className="p-8 border-t-4 border-t-primary hover:-translate-y-2 transition-transform duration-300">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Industrial Innovation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Industry-academia collaborative initiatives, product innovation, industrial R&D, sustainable manufacturing, and commercialization support programs.</p>
            </Card>

            <Card className="p-8 border-t-4 border-t-accent hover:-translate-y-2 transition-transform duration-300">
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <GraduationCap className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Institutional development grants supporting faculty enhancement, laboratories, research centers, curriculum modernization, conferences, and international collaboration.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY TABLE */}
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Eligible Institutions</h2>
          <p className="text-lg text-muted-foreground">Applications are invited from professionally compliant, recognized, and innovation-driven institutions globally.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-card rounded-2xl overflow-hidden shadow-elegant border border-border">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-6 font-bold text-lg border-b border-primary/20">Applicant Category</th>
                <th className="p-6 font-bold text-lg border-b border-primary/20">Eligibility Requirements</th>
                <th className="p-6 font-bold text-lg border-b border-primary/20">Supported Areas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-6 font-semibold flex items-center gap-3"><Activity className="h-5 w-5 text-accent" /> Medical Colleges & Hospitals</td>
                <td className="p-6 text-muted-foreground">Recognized institutions with ethical and regulatory compliance.</td>
                <td className="p-6 font-medium">Clinical Research, Healthcare Tech, Biomedical</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-6 font-semibold flex items-center gap-3"><Building2 className="h-5 w-5 text-accent" /> Universities & Colleges</td>
                <td className="p-6 text-muted-foreground">Accredited academic institutions with active research programs.</td>
                <td className="p-6 font-medium">Academic Research, Innovation, Faculty Dev</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-6 font-semibold flex items-center gap-3"><Cpu className="h-5 w-5 text-accent" /> Tech & Engineering Institutes</td>
                <td className="p-6 text-muted-foreground">Recognized technical institutions with research infrastructure.</td>
                <td className="p-6 font-medium">AI, Robotics, Cybersecurity, Smart Systems</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-6 font-semibold flex items-center gap-3"><Microscope className="h-5 w-5 text-accent" /> Research Laboratories</td>
                <td className="p-6 text-muted-foreground">Registered scientific and R&D organizations.</td>
                <td className="p-6 font-medium">Scientific Research & Technology Development</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-6 font-semibold flex items-center gap-3"><Briefcase className="h-5 w-5 text-accent" /> Industrial Organizations</td>
                <td className="p-6 text-muted-foreground">Legally registered enterprises engaged in innovation activities.</td>
                <td className="p-6 font-medium">Industrial R&D, Product Development</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-6 font-semibold flex items-center gap-3"><Lightbulb className="h-5 w-5 text-accent" /> Startups & Innovation Hubs</td>
                <td className="p-6 text-muted-foreground">Registered startups and incubators with scalable models.</td>
                <td className="p-6 font-medium">Emerging Technologies & Innovation Programs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PRIORITY AREAS GRID */}
      <section className="bg-gradient-to-r from-background to-muted py-24">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">Priority Research & Funding Areas</h2>
            <p className="text-lg text-white/80">Eminsphere™ prioritizes transformative, scalable, and globally relevant projects aligned with innovation, sustainability, research excellence, and technological advancement.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm">
              <Cpu className="h-8 w-8 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-3 text-white">Artificial Intelligence</h4>
              <p className="text-white/80 leading-relaxed">AI systems, automation, intelligent analytics, and cognitive computing.</p>
            </div>
            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm">
              <Activity className="h-8 w-8 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-3 text-white">Healthcare Innovation</h4>
              <p className="text-white/80 leading-relaxed">Diagnostics, telemedicine, biomedical systems, and public healthcare solutions.</p>
            </div>
            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm">
              <Building2 className="h-8 w-8 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-3 text-white">Smart Manufacturing</h4>
              <p className="text-white/80 leading-relaxed">Industry 4.0 technologies, robotics, industrial automation, and sustainable production.</p>
            </div>
            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm">
              <Microscope className="h-8 w-8 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-3 text-white">Scientific Research</h4>
              <p className="text-white/80 leading-relaxed">Fundamental science, multidisciplinary innovation, and applied research initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMISSION PROCESS */}
      <section id="submission" className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wider uppercase mb-4">
            How to Apply
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Proposal Submission Framework</h2>
          <p className="text-lg text-muted-foreground">Applicants are encouraged to submit structured, professionally documented proposals aligned with institutional and regulatory standards.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative p-8 bg-card rounded-2xl border-t-4 border-t-accent shadow-sm">
            <div className="absolute -top-6 left-8 h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl shadow-lg border-4 border-background">1</div>
            <h3 className="text-xl font-bold mb-4 mt-4">Executive Summary</h3>
            <p className="text-muted-foreground">Submit project objectives, innovation highlights, and expected impact outcomes.</p>
          </div>
          
          <div className="relative p-8 bg-card rounded-2xl border-t-4 border-t-accent shadow-sm">
            <div className="absolute -top-6 left-8 h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl shadow-lg border-4 border-background">2</div>
            <h3 className="text-xl font-bold mb-4 mt-4">Technical Documentation</h3>
            <p className="text-muted-foreground">Provide methodology, implementation roadmap, and infrastructure requirements.</p>
          </div>

          <div className="relative p-8 bg-card rounded-2xl border-t-4 border-t-accent shadow-sm">
            <div className="absolute -top-6 left-8 h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl shadow-lg border-4 border-background">3</div>
            <h3 className="text-xl font-bold mb-4 mt-4">Institutional Credentials</h3>
            <p className="text-muted-foreground">Include registrations, approvals, accreditation details, and investigator profiles.</p>
          </div>

          <div className="relative p-8 bg-card rounded-2xl border-t-4 border-t-accent shadow-sm">
            <div className="absolute -top-6 left-8 h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl shadow-lg border-4 border-background">4</div>
            <h3 className="text-xl font-bold mb-4 mt-4">Compliance Review</h3>
            <p className="text-muted-foreground">All proposals undergo technical, administrative, ethical, and financial evaluation.</p>
          </div>
        </div>
      </section>

      {/* DEADLINE HIGHLIGHT */}
      <section className="relative py-28 overflow-hidden bg-[#00060c] border-t border-white/5">
        {/* Background effects */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0099cc]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_59px,rgba(255,255,255,0.015)_60px),repeating-linear-gradient(90deg,transparent,transparent_59px,rgba(255,255,255,0.015)_60px)] pointer-events-none" />

        <div className="container relative z-10 max-w-5xl">

          {/* Urgency badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 font-bold text-sm uppercase tracking-widest animate-pulse">
              <Calendar className="h-4 w-4" /> Deadline Approaching
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white mb-5 tracking-tight">
              Official Submission <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099cc] to-[#00e5ff]">Deadline</span>
            </h2>
            <p className="text-white/50 text-lg max-w-3xl mx-auto leading-relaxed">
              All participating institutions, universities, research laboratories, medical organizations, and innovation centers are requested to submit their complete proposals before the official deadline.
            </p>
          </div>

          {/* Deadline Card */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden group hover:border-[#0099cc]/30 transition-colors duration-500">
            {/* Glowing top edge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#0099cc]/60 to-transparent" />
            
            <div className="relative z-10">
              <div className="text-[#0099cc] font-black tracking-[0.3em] text-xs md:text-sm uppercase mb-8">Final Submission Date</div>

              {/* Date display */}
              <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
                {/* Day */}
                <div className="bg-[#0099cc]/10 border border-[#0099cc]/25 rounded-2xl px-6 md:px-10 py-5 md:py-7">
                  <span className="text-6xl md:text-8xl font-black text-white tabular-nums leading-none">31</span>
                </div>
                {/* Separator */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0099cc]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0099cc]" />
                </div>
                {/* Month */}
                <div className="bg-[#0099cc]/10 border border-[#0099cc]/25 rounded-2xl px-6 md:px-10 py-5 md:py-7">
                  <span className="text-6xl md:text-8xl font-black text-white leading-none tracking-wider">MAY</span>
                </div>
                {/* Separator */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0099cc]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0099cc]" />
                </div>
                {/* Year */}
                <div className="bg-white/5 border border-white/10 rounded-2xl px-5 md:px-8 py-5 md:py-7">
                  <span className="text-5xl md:text-7xl font-black text-white/70 tabular-nums leading-none">2026</span>
                </div>
              </div>

              {/* Status pill */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0099cc]/10 border border-[#0099cc]/25 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-white/80 font-semibold text-sm">Applications Open</span>
                <span className="text-white/30">•</span>
                <span className="text-[#0099cc] font-bold text-sm">Global Funding Cycle 2026</span>
              </div>

              <p className="text-white/30 text-xs max-w-md mx-auto mt-6 leading-relaxed">
                *Late or incomplete submissions may not be considered for evaluation under the current funding cycle.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ResearchFunding;
