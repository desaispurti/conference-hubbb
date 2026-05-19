import { Link } from "react-router-dom";
import { Mail, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 text-foreground mt-24">
      <div className="container py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-6 group">
            <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-gold transition-transform group-hover:scale-105 shrink-0 border border-white/10 p-0.5">
              <img src="https://media.licdn.com/dms/image/v2/D4D0BAQFzrllKGZyfmg/company-logo_200_200/B4DZlYrBUuJcAI-/0/1758129300108/eminsphere_global_academic_services_logo?e=2147483647&v=beta&t=s0XQXTV_ZMK77OBUqHGaMXi8N-kWg-c0XIAFwBZe_ls" alt="Eminsphere Logo" className="h-full w-full object-contain rounded-full" />
            </div>
            <div className="leading-tight">
              <div className="font-serif font-black text-xl text-foreground tracking-tight">Eminsphere™</div>
              <div className="text-[9px] uppercase tracking-widest text-accent font-bold">Research & Innovation</div>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Connecting researchers, innovators, and visionaries through world-class
            international conferences and academic publishing.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://www.linkedin.com/company/106142250/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth shadow-sm hover:shadow-gold hover:-translate-y-1">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://www.youtube.com/@Eminsphere" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-muted hover:bg-[#0099cc] hover:text-white flex items-center justify-center transition-smooth shadow-sm hover:shadow-gold hover:-translate-y-1">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base mb-5 text-foreground">Conferences</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/upcoming-conferences" className="hover:text-accent transition-colors">Upcoming</Link></li>
            <li><Link to="/recent-conferences" className="hover:text-accent transition-colors">Recent</Link></li>
            <li><Link to="/recent-proceedings" className="hover:text-accent transition-colors">Proceedings</Link></li>
            <li><Link to="/innovation-challenge-2026" className="hover:text-accent transition-colors">Innovation Challenge</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base mb-5 text-foreground">Get Involved</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/registration" className="hover:text-accent transition-colors">Registration</Link></li>
            <li><Link to="/apply-reviewer" className="hover:text-accent transition-colors">Apply as Reviewer</Link></li>
            <li><Link to="/apply-advisory" className="hover:text-accent transition-colors">Advisory Team</Link></li>
            <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-bold text-base mb-5 text-foreground">Contact</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3 items-center"><Mail className="h-4 w-4 text-accent shrink-0" /> <a href="mailto:info@eminsphere.com" className="hover:text-accent transition-colors">info@eminsphere.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 bg-background/50">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} Eminsphere™. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
