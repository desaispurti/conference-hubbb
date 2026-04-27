import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Compass, Globe, Users, ShieldCheck } from "lucide-react";

const expectations = [
  { icon: Compass, title: "Strategic Guidance", desc: "Help shape our long-term scientific and editorial direction." },
  { icon: Globe, title: "Global Influence", desc: "Represent your region and discipline at the highest level." },
  { icon: Users, title: "Network Access", desc: "Collaborate with leading scholars across continents." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Uphold the integrity and rigor of every Confluence event." },
];

const ApplyAdvisory = () => (
  <>
    <PageHero
      eyebrow="Leadership Application"
      title="Apply for the Advisory Team"
      description="We invite distinguished scholars and industry leaders to help guide our future."
    />

    <section className="container py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {expectations.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="p-6 text-center hover:shadow-elegant transition-smooth">
            <div className="h-12 w-12 mx-auto rounded-xl gradient-gold flex items-center justify-center mb-4">
              <Icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-lg text-primary mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </Card>
        ))}
      </div>

      <Card className="p-8 max-w-3xl mx-auto shadow-card">
        <h3 className="font-serif text-2xl text-primary mb-6">Application</h3>
        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div><Label>Full Name</Label><Input className="mt-1.5" /></div>
            <div><Label>Email</Label><Input type="email" className="mt-1.5" /></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div><Label>Title / Position</Label><Input className="mt-1.5" /></div>
            <div><Label>Institution</Label><Input className="mt-1.5" /></div>
          </div>
          <div><Label>Discipline</Label><Input className="mt-1.5" /></div>
          <div><Label>Notable Achievements</Label><Textarea rows={4} className="mt-1.5" /></div>
          <div><Label>Why join the Advisory Team?</Label><Textarea rows={4} className="mt-1.5" /></div>
          <Button variant="hero" size="lg" className="w-full">Submit Application</Button>
        </form>
      </Card>
    </section>
  </>
);

export default ApplyAdvisory;
