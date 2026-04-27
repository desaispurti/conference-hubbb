import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Recognition as an official Confluence reviewer",
  "Early access to cutting-edge research papers",
  "Networking with global academic leaders",
  "Certificate of contribution after each conference",
  "Invitation to closed-door editorial workshops",
];

const ApplyReviewer = () => (
  <>
    <PageHero
      eyebrow="Editorial Network"
      title="Apply as a Reviewer"
      description="Help shape global academic discourse. Join our peer-review network of subject-matter experts."
    />
    <section className="container py-16 grid lg:grid-cols-5 gap-12">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-serif text-primary mb-5">Why review with us?</h2>
        <ul className="space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex gap-3 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /> {b}
            </li>
          ))}
        </ul>
      </div>

      <Card className="lg:col-span-3 p-8 shadow-card">
        <h3 className="font-serif text-2xl text-primary mb-6">Application Form</h3>
        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div><Label>First Name</Label><Input className="mt-1.5" /></div>
            <div><Label>Last Name</Label><Input className="mt-1.5" /></div>
          </div>
          <div><Label>Email</Label><Input type="email" className="mt-1.5" /></div>
          <div><Label>Affiliation / University</Label><Input className="mt-1.5" /></div>
          <div className="grid md:grid-cols-2 gap-4">
            <div><Label>Field of Expertise</Label><Input className="mt-1.5" /></div>
            <div><Label>Years of Experience</Label><Input type="number" className="mt-1.5" /></div>
          </div>
          <div><Label>ORCID / Google Scholar URL</Label><Input className="mt-1.5" /></div>
          <div><Label>Brief Bio</Label><Textarea rows={4} className="mt-1.5" /></div>
          <Button type="submit" variant="hero" size="lg" className="w-full">Submit Application</Button>
        </form>
      </Card>
    </section>
  </>
);

export default ApplyReviewer;
