import heroImage from "@/assets/hero-office.jpg";
import { Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Rolig terapirom for psykolog i Lillestrøm med naturlig lys"
          width={1600}
          height={1100}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative container py-28 md:py-40">
        <div className="max-w-2xl">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-cream/90 mb-6">
            Psykolog i Lillestrøm
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05] mb-6">
            Et trygt sted å bearbeide det vanskelige.
          </h1>
          <p className="text-lg md:text-xl text-cream/85 font-light leading-relaxed mb-10 max-w-xl">
            Spesialist på traumer, EMDR, parterapi og depresjon. Varm, faglig og
            erfaren psykologhjelp midt i Lillestrøm sentrum.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+4790123456"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-cream px-7 py-4 text-sm font-medium text-sage-deep hover:bg-cream/90 transition-colors shadow-soft"
            >
              <Phone className="h-4 w-4" /> Ring 901 23 456
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/40 px-7 py-4 text-sm text-cream hover:bg-cream/10 transition-colors"
            >
              <MapPin className="h-4 w-4" /> Storgata 12, 2000 Lillestrøm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
