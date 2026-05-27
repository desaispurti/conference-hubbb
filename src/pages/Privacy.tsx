import { PageHero } from "@/components/layout/PageHero";

const Privacy = () => {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we handle and protect your data."
        variant="aurora"
      />
      <section className="py-20 bg-background text-foreground">
        <div className="container max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information Collection</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form. 
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Information</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>To personalize your experience</li>
            <li>To improve our website</li>
            <li>To improve customer service</li>
            <li>To process transactions</li>
            <li>To send periodic emails</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Protection</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
          </p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
