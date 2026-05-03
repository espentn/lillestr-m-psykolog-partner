  import heroImage from "@/assets/hero-office.jpg";
  import { MapPin, Calendar, ArrowRight } from "lucide-react";
  import { Link } from "react-router-dom";

  const Hero = () => {
    return (
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Terapirom hos privat psykolog i Lillestrøm for samtaleterapi og parterapi"
            width={1600}
            height={1100}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-cream/90 mb-6">
              Privat psykolog i Lillestrøm • Akershus • Romerike
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05] mb-6">
              Psykolog i Lillestrøm eller online – hjelp med angst, depresjon og parterapi
            </h1>
            <h2 className="sr-only">
              Behandling for angst, traumer, depresjon og relasjonsutfordringer i Lillestrøm eller online
            </h2>
            <p className="text-lg md:text-xl text-cream/85 font-light leading-relaxed mb-10 max-w-xl">
              Privat psykolog i Lillestrøm med spesialisering i klinisk voksenpsykologi og EMDR. 
              Jeg tilbyr behandling for angst, depresjon, traumer og relasjonsutfordringer – både fysisk i Lillestrøm og online. 
              Kort ventetid på ca. 1 uke.
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
              <Link
                to="/psykolog-lillestrom"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/40 px-7 py-4 text-sm text-cream hover:bg-cream/10 transition-colors"
              >
                Les mer <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-cream/40 px-7 py-4 text-sm text-cream hover:bg-cream/10 transition-colors"
              >
                <MapPin className="h-4 w-4" /> Storgata 14A, 2000 Lillestrøm
              </a>
              <p className="sr-only">
                  Psykolog i Lillestrøm, Storgata 14A, 2000 Lillestrøm, Norge
                </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
