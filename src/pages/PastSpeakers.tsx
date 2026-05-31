import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Globe, MapPin, Quote, Sparkles, Mic, Presentation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const speakers = [
  { name: "Abdullah Al Abri", role: "VP Sustainability, Sohar Port", location: "Oman", image: "https://static.wixstatic.com/media/30814e_e4eab5a58c524432a47ca4e3e9afffe0~mv2.jpeg" },
  { name: "Akshay", role: "Speaker", location: "", image: "https://static.wixstatic.com/media/30814e_3aef18109d86468da8e5fbbf55d37268~mv2.jpg" },
  { name: "Nikola Ilić", role: "Assistant Professor", location: "Serbia", image: "https://static.wixstatic.com/media/30814e_cf46fb74cc9446b287ec144125a1c54e~mv2.jpeg" },
  { name: "Osman ARAYICI", role: "Professor, Mimar Sinan University", location: "Turkey", image: "https://static.wixstatic.com/media/30814e_f0f7674fd55346bfb2eaba4b48b3d669~mv2.jpeg" },
  { name: "Prof. Abdel Rahman Alzoubaidi", role: "Professor, Al Balqa Applied University", location: "Jordan", image: "https://static.wixstatic.com/media/30814e_e9b1616d369d4f1f8dc784bbb1379fc6~mv2.jpeg" },
  { name: "Anup Kagalkar", role: "Product Technical Expert", location: "United States", image: "https://static.wixstatic.com/media/30814e_38bae8e1c58e4626b639ff27e74b615f~mv2.jpeg" },
  { name: "Hina Shahbaz", role: "Principal, Progressive Model College", location: "Spain", image: "https://static.wixstatic.com/media/30814e_1d40f47c75c84e399f11834d905fdfca~mv2.jpeg" },
  { name: "Aynur Mahmudova", role: "Technical Manager, Saipem", location: "Azerbaijan", image: "https://static.wixstatic.com/media/30814e_096b8766915a49b9b4f964848f812618~mv2.jpg" },
  { name: "BERKANI Samir", role: "Professor, University of Bouerdes", location: "Algeria", image: "https://static.wixstatic.com/media/30814e_e76d7e27c8cd48b3845ce3627ec85821~mv2.jpeg" },
  { name: "Pearce Korb", role: "Clinical Educator", location: "United States", image: "https://static.wixstatic.com/media/30814e_2c8d6049087942e4842f1d6f434e040e~mv2.jpg" },
  { name: "Mr. Satish Kabade", role: "Independent Researcher", location: "New York, USA", image: "https://static.wixstatic.com/media/30814e_a31d532fb603465e846aceccb082827c~mv2.jpeg" },
  { name: "Irandoust-pakchin", role: "Associate Professor, University of Tabriz", location: "Iran", image: "https://static.wixstatic.com/media/30814e_105366170c1b4be7995469e3ae42f001~mv2.jpeg" },
  { name: "Aleksandra Ikonov", role: "Professor", location: "Serbia", image: "https://static.wixstatic.com/media/30814e_ba31cc42a6d34171bc4ac11bf014871e~mv2.jpeg" },
  { name: "Dr. Edralin Rebancos Raro", role: "Assistant Professor", location: "Philippines", image: "https://static.wixstatic.com/media/30814e_cf15be7087af4a078f1254ff3c08fea8~mv2.jpeg" },
  { name: "Kadenova Zuurakan Azhimamatovna", role: "Head of Laboratory", location: "Kyrgyzstan", image: "https://static.wixstatic.com/media/30814e_e8b8b992c26a49cf99035616610f5216~mv2.jpeg" },
  { name: "Dr. Tiansheng Yang", role: "University of South Wales", location: "United Kingdom", image: "https://static.wixstatic.com/media/30814e_3a6549a4d2904005a224db41ca5f9cd0~mv2.avif" },
  { name: "Jim Saliba", role: "Principal Consultant", location: "San Jose, California", image: "https://static.wixstatic.com/media/30814e_45d1f903e57d425cb88addf2bdbec7be~mv2.jpeg" },
  { name: "Nomi Khedawala", role: "Sr. Technical Program Manager", location: "San Francisco", image: "https://static.wixstatic.com/media/30814e_4dddbaf5110540e7b8c0d5ed7826a8e5~mv2.jpeg" },
  { name: "Mr. Sudipkumar Ghanvat", role: "Sr. Director & Head - Data & AI", location: "United States", image: "https://static.wixstatic.com/media/30814e_72dbfb478bd540e9abbca0d3811dfe48~mv2.jpeg" },
  { name: "Gregg Clunis", role: "Founder, Kojo", location: "United States", image: "https://static.wixstatic.com/media/30814e_5c95cc3899d64319998d594852b99123~mv2.jpeg" },
  { name: "Mr. Bhushan Balkrishna Chaudhari", role: "Senior Technology Lead", location: "New Jersey, USA", image: "https://static.wixstatic.com/media/30814e_80c3ba4b5ad34cc1817090e1e30c7b8e~mv2.jpeg" },
  { name: "Dr. Joe Perez", role: "Senior Systems Specialist", location: "Raleigh, NC, USA", image: "https://static.wixstatic.com/media/30814e_043f012b093045da87e7c6046631b299~mv2.avif" },
  { name: "Dr. Ranà El Khawand", role: "Technical Expert (UN-Habitat)", location: "Lebanon", image: "https://static.wixstatic.com/media/30814e_c0812b3e98ff416db27e799833d12e86~mv2.jpeg" },
  { name: "Dr. Firas Zeidan", role: "Researcher and Professor", location: "Lebanon", image: "https://static.wixstatic.com/media/30814e_571b3e70d8ff476f8b1272ef84538d8f~mv2.jpeg" },
  { name: "Mouhssin Ait El Mouden", role: "Researcher", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" },
  { name: "Prof. Shweta N. Banait", role: "Assistant Professor", location: "India", image: "https://static.wixstatic.com/media/30814e_110f0c5464f34aea993c7055dac271b2~mv2.jpeg" },
  { name: "Prof. Neha Singh", role: "Assistant Professor", location: "India", image: "https://static.wixstatic.com/media/30814e_f258ef8fd1a74b9b9c778f12bcdc9128~mv2.jpeg" },
  { name: "Dr. Ayoub Regragui", role: "Mohammed V University", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif" },
  { name: "Veeramani Sampathkumar", role: "Fintech Technology Leader", location: "USA", image: "https://static.wixstatic.com/media/30814e_9166636afad548f9aab5e2b2d1b35e97~mv2.jpeg" },
  { name: "Dr. Nadia Adnan", role: "Research Scientist, PMU", location: "Saudi Arabia", image: "https://static.wixstatic.com/media/30814e_68479290bb114146b46b56f021a75155~mv2.png" },
  { name: "Dr. Prodhan Mahbub Ibna Seraj", role: "Associate Professor", location: "Bangladesh", image: "https://static.wixstatic.com/media/30814e_e2e5efeee2d54b41bd193b968595b89b~mv2.jpeg" },
  { name: "Yukti Goyal", role: "Lead Software Engineer", location: "Tampa, FL", image: "https://static.wixstatic.com/media/30814e_f4baaf1857454707a3b7c0c8e5e10963~mv2.avif" },
  { name: "Yesha Patel", role: "Senior Solution Architect", location: "United States", image: "https://static.wixstatic.com/media/30814e_6354e00a70db405c823ee8721026e4f1~mv2.avif" },
  { name: "Jawaher Al-Zeidi", role: "English Language Lecturer", location: "Oman", image: "https://static.wixstatic.com/media/30814e_e23eb1bb3dab4126bc28ec5d56fc238f~mv2.jpg" },
  { name: "Hicham ELKHOUAJA", role: "Researcher", location: "Morocco", image: "https://static.wixstatic.com/media/30814e_d1c8c65f9d4d4bd59632c05aa894aa71~mv2.jpeg" },
  { name: "Dr. Muhammad Tahir Jan", role: "Associate Professor", location: "Malaysia", image: "https://static.wixstatic.com/media/30814e_c8a29d72204a4175811ef562943091af~mv2.jpeg" },
  { name: "Mr. Rakesh Ramakrishna Pai", role: "Independent Researcher", location: "USA", image: "https://static.wixstatic.com/media/30814e_3885202ba5374de6b70a506164566564~mv2.jpeg" },
  { name: "Nilesh Charankar", role: "AI Technology Leader and Independent Researcher", location: "USA", image: "https://static.wixstatic.com/media/30814e_70debe4180c34f9f83be4d5219c41358~mv2.jpeg" },
];

const PastSpeakers = () => {
  const featured = speakers.slice(0, 6);
  const globalVoices = speakers.slice(6);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero
        eyebrow="Hall of Voices"
        title="Our Global Speakers"
        description="Discover the distinguished experts, industry leaders, and academic pioneers who have shared their groundbreaking insights at Eminsphere summits."
        variant="particles"
      />

      {/* STATS */}
      <section className="container max-w-5xl relative z-20 -mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-strong border-white/10 p-6 rounded-3xl flex items-center gap-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mic className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">200+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Keynote Speakers</div>
            </div>
          </Card>
          <Card className="glass-strong border-white/10 p-6 rounded-3xl flex items-center gap-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <Globe className="h-6 w-6 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Nations Represented</div>
            </div>
          </Card>
          <Card className="glass-strong border-white/10 p-6 rounded-3xl flex items-center gap-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="h-14 w-14 rounded-full bg-[#0099cc]/10 flex items-center justify-center shrink-0">
              <Presentation className="h-6 w-6 text-[#0099cc]" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Hours of Insights</div>
            </div>
          </Card>
        </div>
      </section>

      {/* FEATURED KEYNOTES */}
      <section className="container py-16 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent mb-4">
            <Sparkles className="h-4 w-4" /> Distinguished Experts
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Featured Keynotes</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((s, i) => (
            <Card key={i} className="relative overflow-hidden group glass border-white/5 bg-card/40 hover:bg-card/80 transition-all duration-500 rounded-[2rem] p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(152,227,152,0.15)] flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors pointer-events-none" />
              
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-[#0099cc] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                <img src={s.image} alt={s.name} className="relative h-32 w-32 object-cover rounded-full border-4 border-background shadow-xl z-10" loading="lazy" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
              <p className="text-muted-foreground font-medium mb-6 leading-relaxed">{s.role}</p>
              
              {s.location && (
                <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white tracking-widest uppercase shadow-sm group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent transition-colors">
                  <MapPin className="h-3 w-3" /> {s.location}
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* GLOBAL VOICES */}
      <section className="bg-primary/5 border-y border-white/5 py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container relative z-10 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Global Voices</h2>
            <p className="text-xl text-muted-foreground">Researchers and practitioners from across the world.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {globalVoices.map((s, i) => (
              <Card key={i} className="overflow-hidden glass border-white/5 bg-card/30 hover:bg-card/60 transition-all duration-300 group flex flex-col items-center text-center p-6 rounded-3xl hover:-translate-y-1 hover:border-primary/30">
                <div className="relative h-20 w-20 mb-4 shrink-0">
                  <img src={s.image} alt={s.name} className="h-full w-full object-cover rounded-full border-2 border-white/10 group-hover:border-primary/50 transition-colors shadow-md" loading="lazy" />
                </div>
                <h3 className="font-serif font-bold text-white leading-tight mb-1 group-hover:text-primary transition-colors text-sm">{s.name}</h3>
                <div className="text-xs text-muted-foreground font-medium mb-3 line-clamp-2">{s.role}</div>
                {s.location && (
                  <div className="mt-auto inline-flex items-center gap-1 text-[10px] font-bold text-accent/70 uppercase tracking-wider group-hover:text-accent transition-colors">
                    <Globe className="h-3 w-3" /> {s.location}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        <div className="container max-w-3xl relative z-10">
          <Quote className="h-16 w-16 mx-auto text-primary/30 mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">Take the Stage. <br/><span className="text-primary">Share Your Vision.</span></h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Are you leading groundbreaking research? Join our prestigious roster of global speakers and present your work to an international audience.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-16 px-12 rounded-full font-bold text-lg shadow-gold hover:-translate-y-1 transition-all">
            <Link to="/registration">Apply to Speak <ArrowRight className="ml-3 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default PastSpeakers;
