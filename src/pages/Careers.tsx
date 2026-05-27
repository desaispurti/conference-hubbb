import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Briefcase, Users, Globe, BookOpen } from "lucide-react";

const benefits = [
  { icon: Globe, title: "Global Impact", desc: "Work with top researchers, scholars, and institutions worldwide to drive academic progress." },
  { icon: Users, title: "Collaborative Culture", desc: "Join a diverse, fast-paced team that values innovation, creativity, and mutual growth." },
  { icon: BookOpen, title: "Continuous Learning", desc: "Stay at the forefront of emerging technologies and academic breakthroughs." },
];

const vacancies = [
  { 
    title: "Academic Publishing Specialist", 
    desc: [
      "Assist researchers and authors in preparing, formatting, and submitting manuscripts to journals.",
      "Collaborate with authors to ensure adherence to academic publishing standards.",
      "Stay updated with journal requirements and guidelines."
    ] 
  },
  { 
    title: "Conference Coordinator", 
    desc: [
      "Plan and organize seamless academic and professional conferences.",
      "Handle event logistics, speaker coordination, and attendee management.",
      "Ensure the success of events through effective communication and problem-solving."
    ] 
  },
  { 
    title: "Thesis Consultant", 
    desc: [
      "Provide expert guidance to students and researchers on thesis structuring and writing.",
      "Offer consultations on data analysis, literature reviews, and academic formatting.",
      "Support clients in achieving academic excellence."
    ] 
  },
  { 
    title: "Study Skills Coach", 
    desc: [
      "Help students develop effective study habits, time management, and learning techniques.",
      "Conduct workshops and one-on-one coaching sessions.",
      "Provide resources to enhance academic performance."
    ] 
  },
  { 
    title: "Content Creator", 
    desc: [
      "Create engaging and informative content for academic and marketing purposes.",
      "Develop blog posts, case studies, social media updates, and email campaigns.",
      "Ensure content aligns with the company’s vision and goals."
    ] 
  },
  { 
    title: "Marketing and Branding Specialist", 
    desc: [
      "Design and execute strategies to enhance brand visibility and recognition.",
      "Collaborate with clients to promote their stories globally.",
      "Analyze and optimize marketing campaigns for maximum impact."
    ] 
  },
  { 
    title: "Client Relationship Manager", 
    desc: [
      "Build and maintain strong relationships with clients.",
      "Address client inquiries and provide tailored solutions.",
      "Ensure client satisfaction through excellent service delivery."
    ] 
  },
  { 
    title: "Training and Development Officer", 
    desc: [
      "Develop and deliver training programs to empower researchers, students, and professionals.",
      "Organize workshops, seminars, and skill development sessions.",
      "Track and report on training outcomes."
    ] 
  },
  { 
    title: "Program Manager (Customized Services)", 
    desc: [
      "Design tailored programs to meet the specific needs of clients.",
      "Manage program delivery and ensure timely outcomes.",
      "Evaluate program success and gather feedback for improvement."
    ] 
  },
  { 
    title: "Digital Marketing Specialist", 
    desc: [
      "Promote the company's services through SEO, social media, and online advertising.",
      "Manage website content and analytics to drive traffic.",
      "Design campaigns to generate leads and build a digital presence."
    ] 
  }
];

const Careers = () => (
  <>
    <PageHero
      eyebrow="Join the Team"
      title="Careers at Eminsphere"
      description="Build the platform that connects researchers worldwide. We are looking for passionate individuals to join our global academic ecosystem."
      variant="bubbles"
    />

    {/* LIFE AT EMINSPHERE */}
    <section className="container py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Working With Us</div>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-5">Empower the Future of Global Research</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
            At Eminsphere, we bridge the gap between rigorous academic research and global innovation. Our team consists of driven professionals who are passionate about education, technology, and publishing.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Whether you are coordinating international conferences, consulting on groundbreaking academic theses, or driving our digital presence, your work here makes a tangible impact on the global scientific community.
          </p>
          
          <div className="flex flex-col gap-6 mt-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <b.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">{b.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="rounded-2xl shadow-elegant object-cover h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Conference event" className="rounded-2xl shadow-elegant object-cover h-64 w-full translate-y-8" />
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern workspace" className="rounded-2xl shadow-elegant object-cover h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team meeting" className="rounded-2xl shadow-elegant object-cover h-64 w-full translate-y-8" />
        </div>
      </div>
    </section>

    {/* OPEN POSITIONS */}
    <section className="bg-muted/30 py-20 md:py-28 border-y">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">Open Vacancies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our current opportunities and find the perfect role to match your expertise and ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {vacancies.map((job) => (
            <Card key={job.title} className="p-8 flex flex-col hover:shadow-elegant transition-smooth border-0 bg-card group">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <Briefcase className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary leading-tight group-hover:text-accent transition-colors">{job.title}</h3>
              </div>
              
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground flex-1">
                {job.desc.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-accent mt-1 shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <a href="mailto:info@eminsphere.com" className="inline-flex w-full justify-center items-center gap-2 bg-primary/5 text-primary font-bold px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors mt-auto">
                Apply for this role
                <ArrowRight className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* APPLY CTA */}
    <section className="container py-24 text-center max-w-4xl">
      <div className="h-20 w-20 mx-auto rounded-2xl bg-background border-b border-border/50 flex items-center justify-center mb-6 shadow-lg">
        <Mail className="h-10 w-10 text-primary" />
      </div>
      <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Ready to apply?</h2>
      <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
        If you are driven, innovative, and ready to contribute to a global academic platform, we want to hear from you.
      </p>
      
      <div className="inline-block p-[3px] rounded-full gradient-gold">
        <a 
          href="mailto:info@eminsphere.com" 
          className="flex items-center gap-3 bg-card px-8 py-4 rounded-full text-primary font-bold text-lg hover:bg-transparent hover:text-accent-foreground transition-all"
        >
          <Mail className="h-5 w-5" />
          Mail Your CV at info@eminsphere.com
        </a>
      </div>
    </section>
  </>
);

export default Careers;
