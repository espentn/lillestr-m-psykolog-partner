import heroImage from "@/assets/hero-office.jpg";
import { MapPin, Calendar } from "lucide-react";

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
            Psykolog i Lillestrøm, Akershus & Romerike
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05] mb-6">
            Psykologhjelp når du trenger det – i Lillestrøm eller online
          </h1>
          <p className="text-lg md:text-xl text-cream/85 font-light leading-relaxed mb-10 max-w-xl">
            Spesialist i klinisk voksenpsykologi med EMDR-sertifisering. Hjelp ved traumer, depresjon, angst og livskriser. 
            Bestill time i dag – kort ventetid på ca 1 uke.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://booking.konfidens.no/c/5b8c1c86-c3f5-4836-a701-aa35ca4d6053"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-terracotta px-7 py-4 text-sm font-medium text-cream hover:bg-terracotta/90 transition-colors shadow-soft"
            >
              <Calendar className="h-4 w-4" /> Bestill time
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/40 px-7 py-4 text-sm text-cream hover:bg-cream/10 transition-colors"
            >
              <MapPin className="h-4 w-4" /> Storgata 14A, 2000 Lillestrøm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
