import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#om", label: "Om meg" },
  { href: "#priser", label: "Priser" },
  { href: "#faq", label: "Spørsmål" },
  { href: "#kontakt", label: "Kontakt" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl text-sage-deep tracking-tight">Lillestrømpsykologen</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/75 hover:text-sage-deep transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="tel:+4790123456"
            className="inline-flex items-center gap-2 rounded-sm bg-sage-deep px-5 py-2.5 text-sm text-primary-foreground hover:bg-sage transition-colors"
          >
            <Phone className="h-4 w-4" /> 462 86 444
          </a>
        </nav>
        <button
          aria-label="Meny"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-sage-deep"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80">
                {l.label}
              </a>
            ))}
            <a
              href="tel:+4746286444"
              className="inline-flex items-center gap-2 rounded-sm bg-sage-deep px-5 py-3 text-sm text-primary-foreground w-fit"
            >
              <Phone className="h-4 w-4" /> Ring 462 86 444
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
