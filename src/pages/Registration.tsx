import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";

const tiers = [
  { name: "Student", price: "$199", features: ["Conference access", "Digital proceedings", "Coffee breaks"] },
  { name: "Academic", price: "$449", features: ["All Student perks", "Networking dinner", "Printed proceedings", "Certificate"], highlight: true },
  { name: "Industry", price: "$699", features: ["All Academic perks", "VIP lounge access", "1-on-1 with speakers", "Marketing inclusion"] },
];

const Registration = () => (
  <>
    <PageHero
      eyebrow="Join Us"
      title="Registration"
      description="Secure your seat at the next premier international conference. Early-bird rates available."
    />

    <section className="container py-16">
      <h2 className="text-3xl font-serif text-primary text-center mb-10">Choose your pass</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {tiers.map((t) => (
          <Card key={t.name} className={`p-8 ${t.highlight ? "shadow-elegant border-accent border-2 scale-[1.02]" : "shadow-card"}`}>
            {t.highlight && <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Most Popular</div>}
            <h3 className="font-serif text-2xl text-primary">{t.name}</h3>
            <div className="font-serif text-5xl text-primary my-4">{t.price}</div>
            <ul className="space-y-2 mb-6">
              {t.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-accent" /> {f}</li>
              ))}
            </ul>
            <Button variant={t.highlight ? "hero" : "outline"} className="w-full">Select</Button>
          </Card>
        ))}
      </div>

      <Card className="p-8 max-w-3xl mx-auto shadow-card">
        <h3 className="font-serif text-2xl text-primary mb-6">Your Details</h3>
        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div><Label>Full Name</Label><Input className="mt-1.5" /></div>
            <div><Label>Email</Label><Input type="email" className="mt-1.5" /></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div><Label>Country</Label><Input className="mt-1.5" /></div>
            <div>
              <Label>Conference</Label>
              <Select><SelectTrigger className="mt-1.5"><SelectValue placeholder="Choose conference" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="icait">ICAIT 2026 — Singapore</SelectItem>
                  <SelectItem value="ghcm">GHCM 2026 — Berlin</SelectItem>
                  <SelectItem value="wcef">WCEF 2026 — London</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div><Label>Affiliation</Label><Input className="mt-1.5" /></div>
          <Button variant="hero" size="lg" className="w-full">Proceed to Payment</Button>
        </form>
      </Card>
    </section>
  </>
);

export default Registration;
