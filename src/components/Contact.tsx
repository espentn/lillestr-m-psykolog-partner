import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-sage-deep text-cream">
      <div className="container grid md:grid-cols-2 gap-16">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-cream/60">Kontakt</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">
            Ta kontakt – det er enklere enn du tror.
          </h2>
          <p className="text-cream/75 leading-relaxed mb-10 max-w-md">
            Ring, send e-post eller stikk innom. Jeg svarer alle henvendelser innen
            samme arbeidsdag.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-terracotta mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-xs uppercase tracking-widest text-cream/60 mb-1">Telefon</p>
                <a href="tel:+4790123456" className="text-lg hover:text-terracotta transition-colors">
                  901 23 456
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-terracotta mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-xs uppercase tracking-widest text-cream/60 mb-1">E-post</p>
                <a href="mailto:post@lillestrompsykologen.no" className="text-lg hover:text-terracotta transition-colors">
                  post@lillestrompsykologen.no
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-terracotta mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-xs uppercase tracking-widest text-cream/60 mb-1">Adresse</p>
                <p className="text-lg">Storgata 12, 2000 Lillestrøm</p>
                <p className="text-sm text-cream/60 mt-1">5 min gange fra Lillestrøm stasjon</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="h-5 w-5 text-terracotta mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-xs uppercase tracking-widest text-cream/60 mb-1">Åpningstider</p>
                <p className="text-lg">Mandag – fredag, 08–18</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-cream/5 border border-cream/15 rounded-sm p-8 md:p-10 backdrop-blur-sm">
          <h3 className="font-serif text-2xl mb-6">Områder jeg betjener</h3>
          <p className="text-cream/75 mb-4 text-sm leading-relaxed">
            Klienter kommer fra hele Romerike og Oslo Øst, med kort vei til:
          </p>
          <ul className="grid grid-cols-2 gap-2 text-cream/85 mb-8">
            {["Lillestrøm", "Strømmen", "Kjeller", "Lørenskog", "Skedsmokorset", "Rælingen", "Fetsund", "Sørumsand"].map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm">
                <span className="h-1 w-1 rounded-full bg-terracotta" /> {c}
              </li>
            ))}
          </ul>
          <a
            href="tel:+4790123456"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-terracotta px-6 py-4 text-sm font-medium text-cream hover:bg-terracotta/90 transition-colors"
          >
            <Phone className="h-4 w-4" /> Ring for ledig time
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
