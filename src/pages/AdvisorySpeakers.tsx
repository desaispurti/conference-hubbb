import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const advisors = [
  { name: "Sir Jonathan Whitford", role: "Chair, Scientific Advisory Board", uni: "University of Oxford" },
  { name: "Prof. Rina Kapoor", role: "Vice-Chair, AI & Society", uni: "Stanford University" },
  { name: "Dr. Henrik Andersson", role: "Climate Policy Advisor", uni: "Karolinska Institute" },
  { name: "Prof. Yuki Watanabe", role: "Engineering Standards", uni: "Kyoto University" },
  { name: "Dr. Naledi Mokoena", role: "Public Health Strategy", uni: "University of Cape Town" },
  { name: "Prof. Carlos Mendes", role: "Economics & Policy", uni: "USP São Paulo" },
];

const AdvisorySpeakers = () => (
  <>
    <PageHero
      eyebrow="Leadership"
      title="Advisory Speakers"
      description="Our Advisory Board guides editorial, scientific, and strategic direction across all conferences."
      variant="waves"
    />
    <section className="container py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {advisors.map((a) => (
        <Card key={a.name} className="p-7 hover:shadow-elegant transition-smooth">
          <Award className="h-8 w-8 text-accent mb-4" />
          <h3 className="font-serif text-xl text-primary">{a.name}</h3>
          <div className="text-sm text-accent font-medium mt-1">{a.role}</div>
          <div className="text-xs text-muted-foreground mt-2">{a.uni}</div>
        </Card>
      ))}
    </section>
  </>
);

export default AdvisorySpeakers;
