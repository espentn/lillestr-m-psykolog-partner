import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Practical from "@/components/Practical";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <Practical />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
