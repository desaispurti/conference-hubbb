import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export const PageHero = ({ eyebrow, title, description, children }: PageHeroProps) => {
  return (
    <section className="gradient-hero text-primary-foreground">
      <div className="container py-20 md:py-28 text-center max-w-4xl">
        {eyebrow && (
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-widest mb-5 animate-fade-in">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-5 text-balance animate-fade-up">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed text-balance animate-fade-up">
            {description}
          </p>
        )}
        {children && <div className="mt-8 animate-fade-up">{children}</div>}
      </div>
    </section>
  );
};
