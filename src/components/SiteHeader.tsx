import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";

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
            href="https://booking.konfidens.no/c/5b8c1c86-c3f5-4836-a701-aa35ca4d6053"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-terracotta px-5 py-2.5 text-sm text-cream hover:bg-terracotta/90 transition-colors"
          >
            <Calendar className="h-4 w-4" /> Bestill time
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
              href="https://booking.konfidens.no/c/5b8c1c86-c3f5-4836-a701-aa35ca4d6053"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-terracotta px-5 py-3 text-sm text-cream w-fit"
            >
              <Calendar className="h-4 w-4" /> Bestill time
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
