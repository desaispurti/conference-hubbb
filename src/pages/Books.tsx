import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, BrainCircuit, Cloud, Database, Network, Briefcase, Cpu } from "lucide-react";
import bookImg1 from "@/assets/WhatsApp Image 2026-05-28 at 1.15.19 PM.jpeg";
import bookImg2 from "@/assets/WhatsApp Image 2026-05-28 at 1.15.21 PM.jpeg";
import bookImg3 from "@/assets/WhatsApp Image 2026-05-28 at 1.15.22 PM.jpeg";
import bookImg4 from "@/assets/WhatsApp Image 2026-05-28 at 1.15.24 PM.jpeg";

const stats = [
  { value: "100+", label: "Titles Published" },
  { value: "12+", label: "Countries" },
  { value: "500K+", label: "Global Readers" },
  { value: "50+", label: "Academic Partners" },
];

const disciplines = [
  { title: "Artificial Intelligence", icon: BrainCircuit, color: "from-[#0099cc] to-[#0099cc]" },
  { title: "Cloud Computing", icon: Cloud, color: "from-[#0099cc] to-[#0099cc]" },
  { title: "Data Science", icon: Database, color: "from-[#0099cc] to-[#0099cc]" },
  { title: "Internet of Things", icon: Network, color: "from-[#0099cc] to-[#0099cc]" },
  { title: "Business & Management", icon: Briefcase, color: "from-[#0099cc] to-[#0099cc]" },
  { title: "Engineering & Tech", icon: Cpu, color: "from-[#0099cc] to-[#0099cc]" },
];

const publishedBooks = [
  {
    title: "Modernization of legacy systems over cloud",
    subtitle: "",
    authors: "Mr. Mrugendra R Madalagi, Mr. Manoj Shrishail Bahirgonde",
    isbn: "978-81-998717-6-2",
    date: "2026",
    link: "https://a.co/d/03MieTo5",
    image: bookImg1
  },
  {
    title: "Analytics in the AI Era",
    subtitle: "",
    authors: "Prajakta Prakash Talathi, Ankur Jain, Mayur Khandelwal, Deepak K. Sharma",
    isbn: "978-81-685414-6-7",
    date: "2026",
    link: "https://a.co/d/0730890m",
    image: bookImg2
  },
  {
    title: "IT IN THE ENERGY SECTOR",
    subtitle: "",
    authors: "Mr. Vilas Shewale",
    isbn: "978-81-685414-2-9",
    date: "2026",
    link: "https://a.co/d/08xpdvHD",
    image: bookImg4
  },
  {
    title: "Next-Generation AI-Native IAM",
    subtitle: "",
    authors: "Saket Dhanraj Chaudhari",
    isbn: "978-8199871717",
    date: "March 2026",
    link: "https://a.co/d/04GbWENL",
    image: "https://static.wixstatic.com/media/30814e_9ddc6849f8e44a65b86f7bff5824cd6d~mv2.png"
  },
  {
    title: "Machine Learning Models for Intelligent Software Engineering and Automation",
    subtitle: "",
    authors: "Dr. Uday Chandrakant Patkar",
    isbn: "978-81-996310-5-2",
    date: "February 2026",
    link: "https://a.co/d/cLEthHu",
    image: "https://static.wixstatic.com/media/30814e_cc155ed03b104806bf81258474a65cf7~mv2.png"
  },
  {
    title: "Analytical Geometry",
    subtitle: "",
    authors: "Dr. Sidheshwar Sangramappa Bellale, Mr Kore Suresh Umakantrao",
    isbn: "979-8246896747",
    date: "February 2026",
    link: "https://a.co/d/0hQ2qpMN",
    image: "https://static.wixstatic.com/media/30814e_4e7690d89d9040cbb988c86eecfc0961~mv2.png"
  },
  {
    title: "Building Public Health Data Systems",
    subtitle: "",
    authors: "Mr. Rakesh Ramakrishna Pai",
    isbn: "978-8199871779",
    date: "February 2026",
    link: "https://a.co/d/0cY4D84c",
    image: "https://static.wixstatic.com/media/30814e_1f17314764334431a3d4eaf47b220f68~mv2.png"
  },
  {
    title: "Cloud-Scale Systems",
    subtitle: "Data Ingestion, Events, and Storage",
    authors: "Dr. Jambi Ratna Raja Kumar, Mr. Rajaguru Ganesan, Mr. Amber Rastogi",
    isbn: "978-81-996310-0-7",
    date: "January 2026",
    link: "https://amzn.eu/d/0Xh6OqU",
    image: "https://static.wixstatic.com/media/30814e_133147aca816471683e512c68e38a1da~mv2.jpg"
  },
  {
    title: "Radiowave and Transmission Theory",
    subtitle: "",
    authors: "Mrs. Shruti Harshwardhan Gunjotikar",
    isbn: "978-81-996310-2-1",
    date: "January 2026",
    link: "https://a.co/d/7L6aSTd",
    image: "https://static.wixstatic.com/media/30814e_f7d2e633c973493e994531e83f961108~mv2.png"
  },
  {
    title: "Designing Scalable Event-Driven Data Platforms",
    subtitle: "",
    authors: "Dr. Amol D. Lokhande, Karthikeyan Srinivasan",
    isbn: "978-81-996310-9-0",
    date: "January 2026",
    link: "https://a.co/d/bsPEKJC",
    image: "https://static.wixstatic.com/media/30814e_5715b7995d564990b56ccaeb98634330~mv2.jpg"
  },
  {
    title: "Healthcare Cloud Compliance",
    subtitle: "Architecture and Implementation",
    authors: "Mr. Bandanawaz Mulla, Dr. Ratna Raja Kumar Jambi",
    isbn: "978-81-998717-8-6",
    date: "January 2026",
    link: "https://a.co/d/0cOGyDRY",
    image: "https://static.wixstatic.com/media/30814e_1fc8c1efbb284705926f3bbeb216b966~mv2.png"
  },
  {
    title: "Generative AI",
    subtitle: "Foundations, Architectures, and Real-World Applications",
    authors: "Prof. Gaurav Kumar Gupta, Prof. Shubhangi Sachin Pharande",
    isbn: "978-8199462489",
    date: "December 2025",
    link: "https://a.co/d/d7jXYly",
    image: "https://static.wixstatic.com/media/30814e_199f000947d84fe7a1e3f97f0535ab35~mv2.jpg"
  },
  {
    title: "Foundations of Modern Computing",
    subtitle: "Information Technology – I (Kindle Edition)",
    authors: "Dr. Vilas Joshi, Praveen Krishnankutty Valsala",
    isbn: "978-8199462403",
    date: "December 2025",
    link: "https://a.co/d/gWNWZK5",
    image: "https://static.wixstatic.com/media/30814e_6dbe70cbdceb481bb40f14d92266b7dc~mv2.png"
  },
  {
    title: "Fundamentals of Artificial Intelligence",
    subtitle: "and Its Practical Applications",
    authors: "Prof. Indranil Mukherjee, Sudeep Annappa Shanubhog",
    isbn: "978-8199462427",
    date: "December 2025",
    link: "https://a.co/d/eoAU71q",
    image: "https://static.wixstatic.com/media/30814e_19396b73f27f4728b616f41053071dac~mv2.jpg"
  },
  {
    title: "AI for a Sustainable Future",
    subtitle: "",
    authors: "Dr. Latika Desai, Dr. Deepali Rajendra Sale",
    isbn: "978-8199631045",
    date: "December 2025",
    link: "https://a.co/d/4UtADsg",
    image: "https://static.wixstatic.com/media/30814e_12125d969605430f9e7e06f3731a8ff1~mv2.png"
  },
  {
    title: "SECURE CLOUD AI & ML FOR FINANCIAL AND PENSION SYSTEMS",
    subtitle: "",
    authors: "Satish Kabade",
    isbn: "978-81-685414-3-6",
    date: "2022",
    link: "https://a.co/d/0bsCpJmF",
    image: bookImg3
  }
];

const Books = () => (
  <>
    <PageHero
      eyebrow="Official ISBN-Licensed Publisher"
      title="Eminsphere™ Global Publishing"
      description="Generative Thinking meets Rigorous Engineering. We publish high-quality academic and professional books built for global researchers and industry experts."
      variant="aurora"
    />

    {/* INTRO & LOGOS */}
    <section className="container py-16 text-center max-w-4xl mx-auto">
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
        We are a commercial publisher officially registered with the <strong className="text-primary">Raja Rammohun Roy National Agency for ISBN</strong>, under the Department of Higher Education, Ministry of Education, Government of India. Our books are globally accessible and officially available on <strong className="text-primary">Amazon</strong>.
      </p>
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
        <img src="https://static.wixstatic.com/media/30814e_5d49a33e7ad94a7fb551d35b324554be~mv2.png" alt="Publisher Logo 1" className="max-h-[50px] md:max-h-[70px] object-contain" />
        <img src="https://static.wixstatic.com/media/30814e_7d1e1a9e732a452e96bfd1d3b6e53799~mv2.png" alt="Amazon Logo" className="max-h-[45px] md:max-h-[65px] object-contain" />
        <img src="https://static.wixstatic.com/media/30814e_1c5123d35814427e94f13afa05595c19~mv2.png" alt="Publisher Logo 2" className="max-h-[50px] md:max-h-[70px] object-contain" />
      </div>
    </section>

    {/* STATS */}
    <section className="border-y bg-muted/30">
      <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {stats.map((s) => (
          <div key={s.label} className="py-12 text-center hover:bg-card transition-colors">
            <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-3">{s.value}</div>
            <div className="text-xs md:text-sm font-bold text-accent uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* DISCIPLINES */}
    <section className="container py-20 md:py-28 text-center max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Multi-Disciplinary Book Publishing</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
        We publish across Artificial Intelligence, Data Science, Cloud Computing, IoT, Electronics, Computer Science, Management, and emerging technologies. Our platform supports both academic and industry-oriented publications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {disciplines.map(({ title, icon: Icon, color }) => (
          <Card key={title} className={`group overflow-hidden border-0 p-8 flex flex-col items-center justify-center text-center relative hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-elegant bg-gradient-to-br ${color} text-white`}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
            <Icon className="h-12 w-12 mb-4 opacity-90 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="font-serif font-bold text-xl relative z-10">{title}</h3>
          </Card>
        ))}
      </div>
    </section>

    {/* PUBLISHED BOOKS */}
    <section className="bg-muted/30 py-20 md:py-28 border-y">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Curated Academic Titles</div>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Recently Published Paperbacks</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {publishedBooks.map((book) => (
            <Card key={book.title} className="overflow-hidden flex flex-col hover:shadow-elegant transition-smooth border-0 bg-card group">
              <div className="bg-white p-6 flex justify-center border-b border-border/50">
                <img src={book.image} alt={book.title} className="h-[300px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" loading="lazy" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-xl text-primary leading-tight mb-2">{book.title}</h3>
                {book.subtitle && <p className="text-muted-foreground text-sm font-medium mb-4">{book.subtitle}</p>}
                
                <div className="space-y-2 mt-4 mb-8 text-sm">
                  <div className="flex items-start gap-2">
                    <strong className="text-primary min-w-[80px]">Author(s):</strong>
                    <span className="text-muted-foreground">{book.authors}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <strong className="text-primary min-w-[80px]">ISBN:</strong>
                    <span className="text-muted-foreground">{book.isbn}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <strong className="text-primary min-w-[80px]">Published:</strong>
                    <span className="text-muted-foreground">{book.date}</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-border/50">
                  <a 
                    href={book.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex w-full justify-center items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <BookOpen className="h-4 w-4" />
                    Read & Buy on Amazon
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="container pb-24">
      <Card className="p-10 md:p-16 text-center shadow-elegant border-primary/10 relative overflow-hidden group max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        <BookOpen className="h-16 w-16 mx-auto text-accent mb-6" />
        <h3 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4 relative z-10">Ready to Publish Your Book?</h3>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto relative z-10">
          Submit your proposal today and become a globally recognized author with a licensed, professional publishing house.
        </p>
        <a 
          href="https://forms.gle/dnkfj4mUxXWHGmKXA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0099cc] to-[#0099cc] text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg relative z-10 uppercase tracking-wide"
        >
          Submit Your Book Proposal
          <ArrowRight className="h-5 w-5" />
        </a>
      </Card>
    </section>
  </>
);

export default Books;
