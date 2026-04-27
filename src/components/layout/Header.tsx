import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const primaryNav = [
  { label: "Home", to: "/" },
  { label: "Upcoming Conferences", to: "/upcoming-conferences" },
  { label: "Innovation Challenge 2026", to: "/innovation-challenge-2026" },
  { label: "Books", to: "/books" },
  { label: "Blog", to: "/blog" },
];

const conferencesMenu = [
  { label: "Recent Conferences", to: "/recent-conferences" },
  { label: "Conference Proceedings", to: "/recent-proceedings" },
  { label: "Past Speakers", to: "/past-speakers" },
  { label: "Advisory Speakers", to: "/advisory-speakers" },
];

const involvedMenu = [
  { label: "Registration", to: "/registration" },
  { label: "Apply as Reviewer", to: "/apply-reviewer" },
  { label: "Advisory Team", to: "/apply-advisory" },
  { label: "Careers", to: "/careers" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-smooth hover:text-accent ${
      isActive ? "text-accent" : "text-primary-foreground/90"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "gradient-hero shadow-elegant" : "bg-primary/95 backdrop-blur"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-lg gradient-gold flex items-center justify-center shadow-gold">
            <GraduationCap className="h-5 w-5 text-accent-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg text-primary-foreground">Confluence</div>
            <div className="text-[10px] uppercase tracking-widest text-accent">Global Conferences</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {primaryNav.slice(0, 3).map((l) => (
            <RouterNavLink key={l.to} to={l.to} className={linkCls}>
              {l.label}
            </RouterNavLink>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-smooth outline-none">
              Conferences <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {conferencesMenu.map((m) => (
                <DropdownMenuItem key={m.to} asChild>
                  <Link to={m.to}>{m.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-smooth outline-none">
              Get Involved <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {involvedMenu.map((m) => (
                <DropdownMenuItem key={m.to} asChild>
                  <Link to={m.to}>{m.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {primaryNav.slice(3).map((l) => (
            <RouterNavLink key={l.to} to={l.to} className={linkCls}>
              {l.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="sm">
            <Link to="/registration">Register Now</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden gradient-hero border-t border-primary-foreground/10 animate-fade-in">
          <div className="container py-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
            {[...primaryNav, ...conferencesMenu, ...involvedMenu].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 px-3 rounded-md text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-3">
              <Link to="/registration">Register Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
