import { Link } from "react-router-dom";
import { GraduationCap, Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground mt-24">
      <div className="container py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-5">
            <div className="h-10 w-10 rounded-lg gradient-gold flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-accent-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg">Confluence</div>
              <div className="text-[10px] uppercase tracking-widest text-accent">Global Conferences</div>
            </div>
          </Link>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Connecting researchers, innovators, and visionaries through world-class
            international conferences and academic publishing.
          </p>
          <div className="flex gap-3 mt-5">
            {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4 text-accent">Conferences</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/upcoming-conferences" className="hover:text-accent">Upcoming</Link></li>
            <li><Link to="/recent-conferences" className="hover:text-accent">Recent</Link></li>
            <li><Link to="/recent-proceedings" className="hover:text-accent">Proceedings</Link></li>
            <li><Link to="/innovation-challenge-2026" className="hover:text-accent">Innovation Challenge</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4 text-accent">Get Involved</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/registration" className="hover:text-accent">Registration</Link></li>
            <li><Link to="/apply-reviewer" className="hover:text-accent">Apply as Reviewer</Link></li>
            <li><Link to="/apply-advisory" className="hover:text-accent">Advisory Team</Link></li>
            <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base mb-4 text-accent">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Global HQ, Worldwide</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" /> info@confluence.org</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" /> +1 (000) 000-0000</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Confluence Global Conferences. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
            <a href="#" className="hover:text-accent">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
