import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Spiseforstyrrelser = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-3xl py-16">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Spiseforstyrrelser – Vei til bedring
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80">
            Spiseforstyrrelser er komplekse psykiske lidelser som påvirker både fysisk og psykisk helse. 
            Med riktig behandling er det mulig å få et friskere forhold til mat og kropp.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Hva er spiseforstyrrelser?</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Spiseforstyrrelser er psykiske lidelser som involverer et abnormalt forhold til mat 
              og kroppsbilde. De vanligste typene er anorexia nervosa, bulimia nervosa og 
              tverretringslidelse (BED).
            </p>
            <p>
              Disse lidelsene går ofte dypt og kan ha alvorlige fysiske og psykiske konsekvenser 
              hvis de ikke behandles.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tegn på spiseforstyrrelse</h2>
          <ul className="space-y-2 list-disc pl-5 text-foreground/80">
            <li>Ekstrem bekymring for vekt eller kropp</li>
            <li>Restriktiv matinntak eller overspising</li>
            <li>Overdreven trening</li>
            <li>Sosialt tilbaketrekking rundt mat</li>
            <li>Vektvariasjon</li>
            <li>Preokupasjon med mat, kalorier eller næringsstoffer</li>
            <li>Fysiske symptomer som tretthet eller svimmelhet</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Behandling av spiseforstyrrelser</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Behandling av spiseforstyrrelser krever ofte et multidisiplinært team, men psykologisk 
              behandling er avgjørende. Vi arbeider med tankene, følelsene og atferden rundt mat 
              og kropp, samt de underliggende årsaksforholdene.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://booking.konfidens.no/c/5b8c1c86-c3f5-4836-a701-aa35ca4d6053"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-terracotta text-cream px-6 py-3 rounded-sm hover:bg-terracotta/90 transition-colors"
            >
              Bestill time
            </a>
            <Link
              to="/#kontakt"
              className="inline-block border border-sage-deep px-6 py-3 rounded-sm hover:bg-sage-deep/5 transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Spiseforstyrrelser;
