import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import booksImg from "@/assets/books.jpg";

const books = [
  { title: "Foundations of Modern AI", author: "Dr. A. Hartwell", price: "$59" },
  { title: "Quantum Frontiers", author: "Prof. H. Tanaka", price: "$72" },
  { title: "Bioengineering Today", author: "Dr. P. Raghavan", price: "$65" },
  { title: "Climate Economics", author: "Prof. L. Müller", price: "$54" },
  { title: "Public Health in the 21st Century", author: "Dr. F. El-Sayed", price: "$48" },
  { title: "Robotics: Theory & Practice", author: "Prof. M.L. Zhang", price: "$78" },
];

const Books = () => (
  <>
    <PageHero
      eyebrow="Publications"
      title="Books"
      description="Authored and edited volumes from our network of researchers — published worldwide."
    />
    <section className="container py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((b) => (
        <Card key={b.title} className="overflow-hidden hover:shadow-elegant transition-smooth group">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={booksImg} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-smooth" loading="lazy" width={1280} height={800} />
          </div>
          <div className="p-6">
            <h3 className="font-serif text-lg text-primary mb-1">{b.title}</h3>
            <div className="text-sm text-muted-foreground mb-4">by {b.author}</div>
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl text-accent">{b.price}</span>
              <Button variant="hero" size="sm"><ShoppingCart className="h-4 w-4" /> Buy</Button>
            </div>
          </div>
        </Card>
      ))}
    </section>
  </>
);

export default Books;
