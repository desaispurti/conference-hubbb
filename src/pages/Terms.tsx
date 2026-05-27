import { PageHero } from "@/components/layout/PageHero";

const Terms = () => {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms carefully before using our platform."
        variant="mesh"
      />
      <section className="py-20 bg-background text-foreground">
        <div className="container max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Welcome to Eminsphere™. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials (information or software) on Eminsphere™'s website for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclaimer</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            The materials on Eminsphere™'s website are provided on an 'as is' basis. Eminsphere™ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitations</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            In no event shall Eminsphere™ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Eminsphere™'s website.
          </p>
        </div>
      </section>
    </>
  );
};

export default Terms;
