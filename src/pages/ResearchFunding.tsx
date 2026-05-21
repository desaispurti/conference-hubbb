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
      <section className="bg-muted py-24 border-b">
        <div className="container">
          <div className="bg-card rounded-[40px] p-10 md:p-16 shadow-elegant text-center relative overflow-hidden border border-border">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-600 font-bold text-sm tracking-wider uppercase mb-8">
                <Calendar className="h-4 w-4" /> Important Notification
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Official Submission Deadline</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                All participating institutions, universities, research laboratories, medical organizations, innovation centers, startups, and industrial entities are requested to submit their complete institutional proposals before the official submission deadline.
              </p>

              <div className="inline-block bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-primary-foreground shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-accent font-bold tracking-[0.2em] text-sm md:text-base mb-6">FINAL SUBMISSION DATE</div>
                  <div className="flex items-start justify-center gap-2 mb-6">
                    <span className="text-7xl md:text-9xl font-black leading-none">31</span>
                    <div className="flex flex-col text-left">
                      <span className="text-2xl md:text-4xl font-bold">ST</span>
                      <span className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2">MAY</span>
                    </div>
                  </div>
                  <div className="text-3xl md:text-5xl font-black text-primary-foreground/90 mb-8">2026</div>
                  <div className="inline-block bg-primary-foreground/10 backdrop-blur-md rounded-full px-6 py-2 text-sm font-semibold border border-primary-foreground/20">
                    Applications Open • Global Funding Cycle 2026
                  </div>
                </div>
              </div>
              
              <p className="text-sm font-medium text-muted-foreground mt-8 max-w-lg mx-auto">
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
