import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const posts = [
  { 
    title: "Empowering Cybersecurity to be Smarter, Faster and More Resilient with Nandan Sharma", 
    date: "May 02, 2026", 
    category: "Cybersecurity", 
    excerpt: "Nandan Sharma discusses the adoption of proactive threat detection, highlighting the need for intelligent, responsive, and resilient cybersecurity architectures in the modern era.",
    image: "https://static.wixstatic.com/media/30814e_5481080a060b480c8a14dd2ab0c8dd7f~mv2.png/v1/fill/w_800,h_500,al_c,q_90/30814e_5481080a060b480c8a14dd2ab0c8dd7f~mv2.webp"
  },
  { 
    title: "Shubham Bhaskar Thakare's Award Winning Research in Mechanical Systems", 
    date: "April 28, 2026", 
    category: "Engineering", 
    excerpt: "An in-depth look at the award-winning research that is pushing the boundaries of efficiency and design in modern mechanical engineering systems.",
    image: "https://static.wixstatic.com/media/30814e_44fee04852ec45e4aa227a6ef6e0a233~mv2.jpeg/v1/fill/w_600,h_400,al_c,q_90/30814e_44fee04852ec45e4aa227a6ef6e0a233~mv2.webp"
  },
  { 
    title: "Key Takeaways from Sambhaji Barse's Thailand Visit", 
    date: "April 15, 2026", 
    category: "Global Outreach", 
    excerpt: "Join us for an engaging conversation detailing the academic partnerships and strategic collaborations forged during the recent visit to Thailand.",
    image: "https://i.ytimg.com/vi/4-1NGbogkB0/maxresdefault.jpg"
  },
  { 
    title: "Sambhaji Barse Concludes Successful Academic & Research Visit to Thailand", 
    date: "April 10, 2026", 
    category: "Global Outreach", 
    excerpt: "A comprehensive summary of the milestones achieved and the international research avenues opened during the successful academic tour in Thailand.",
    image: "https://static.wixstatic.com/media/30814e_b489af32c274400290ecb8ccd00f2958~mv2.jpeg/v1/fill/w_600,h_400,al_c,q_90/30814e_b489af32c274400290ecb8ccd00f2958~mv2.webp"
  },
  { 
    title: "Dr. Jambi Represents Genba Sopanrao Moze College of Engineering on the Global Stage", 
    date: "March 22, 2026", 
    category: "Academic Excellence", 
    excerpt: "Highlighting the prestigious representation of Genba Sopanrao Moze College of Engineering at recent international academic summits.",
    image: "https://static.wixstatic.com/media/30814e_42a844d7d1a14c8a904257c02d770a49~mv2.jpeg/v1/fill/w_600,h_400,al_c,q_90/30814e_42a844d7d1a14c8a904257c02d770a49~mv2.webp"
  },
  { 
    title: "Sambhaji Barse Honored as Chief Guest at Technobash 2025", 
    date: "March 18, 2026", 
    category: "Events", 
    excerpt: "A look back at the grand Technobash 2025 event where Sambhaji Barse was honored and delivered the keynote address on emerging tech trends.",
    image: "https://static.wixstatic.com/media/30814e_c17d2fa834174941b0be9c1ef8f7f0bb~mv2.jpeg/v1/fill/w_600,h_400,al_c,q_90/30814e_c17d2fa834174941b0be9c1ef8f7f0bb~mv2.webp"
  },
  { 
    title: "Empowering Scholars Worldwide: Academic Excellence Solutions", 
    date: "February 28, 2026", 
    category: "Publishing", 
    excerpt: "In the highly competitive academic world, the pursuit of excellence is paramount. Discover how Eminsphere is providing the tools for scholars to succeed.",
    image: "https://static.wixstatic.com/media/30814e_621e9bb2fd0744eca7a2b17372e3055d~mv2.png/v1/fill/w_600,h_400,al_c,q_90/30814e_621e9bb2fd0744eca7a2b17372e3055d~mv2.webp"
  }
];

const Blog = () => {
  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Insights & News"
        title="The Eminsphere Blog"
        description="Ideas, research breakthroughs, and global conversations from our international community of scholars and organizers."
        variant="floating-orbs"
      />

      {/* FEATURED POST */}
      <section className="container py-16">
        <div className="text-xs font-bold text-accent uppercase tracking-widest mb-6">Featured Article</div>
        <Card className="overflow-hidden hover:shadow-elegant transition-smooth border-0 bg-card group cursor-pointer grid lg:grid-cols-2 gap-0">
          <div className="relative overflow-hidden h-[300px] lg:h-[450px]">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider shadow-lg">
              {featuredPost.category}
            </div>
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium mb-4">
              <Calendar className="h-4 w-4" /> {featuredPost.date}
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-primary mb-6 group-hover:text-accent transition-smooth leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {featuredPost.excerpt}
            </p>
          </div>
        </Card>
      </section>

      {/* GRID POSTS */}
      <section className="bg-muted/30 py-20 border-y">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-serif text-primary">Latest Updates</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((p) => (
              <Card key={p.title} className="flex flex-col overflow-hidden hover:shadow-elegant transition-smooth border-0 bg-card group cursor-pointer">
                <div className="relative h-60 overflow-hidden shrink-0">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy" 
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {p.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-medium">
                    <Calendar className="h-3 w-3" /> {p.date}
                  </div>
                  <h3 className="font-serif text-xl text-primary mb-3 group-hover:text-accent transition-smooth leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
