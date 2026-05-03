import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";

const links = [
  { href: "#tjenester", label: "Tjenester" },
  { href: "#om", label: "Om meg" },
  { href: "#priser", label: "Priser" },
  { href: "#faq", label: "Spørsmål" },
  { href: "#kontakt", label: "Kontakt" },
];

const conditions = [
  { path: "/angst", label: "Angst" },
  { path: "/depresjon", label: "Depresjon" },
  { path: "/spiseforstyrrelser", label: "Spiseforstyrrelser" },
  { path: "/traumer", label: "Traumer" },
  { path: "/tvangslidelser", label: "Tvangslidelser" },
  { path: "/livskriser", label: "Livskriser" },
  { path: "/utbrenthet", label: "Utbrenthet" },
  { path: "/stress", label: "Stress" },
  { path: "/relasjonelle-vansker", label: "Relasjonelle vansker" },
  { path: "/lav-selvfølelse", label: "Lav selvfølelse" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [lidelsesOpen, setLidelsesOpen] = useState(false);
  const [lidelsesOpenMobile, setLidelsesOpenMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl text-sage-deep tracking-tight">Lillestrømpsykologen</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-foreground/75 hover:text-sage-deep transition-colors">
              {l.label}
            </a>
          ))}
          
          {/* Dropdown menu for Lidelser */}
          <div className="relative group">
            <button className="text-sm text-foreground/75 hover:text-sage-deep transition-colors inline-flex items-center gap-1">
              Lidelser
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-background border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-sm shadow-lg">
              {conditions.map((c) => (
                <Link
                  key={c.path}
                  to={c.path}
                  className="block px-4 py-2 text-sm text-foreground/75 hover:text-sage-deep hover:bg-sage-soft/20 first:rounded-t-sm last:rounded-b-sm transition-colors"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

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
            
            {/* Mobile dropdown for Lidelser */}
            <div>
              <button 
                onClick={() => setLidelsesOpenMobile(!lidelsesOpenMobile)}
                className="text-foreground/80 inline-flex items-center gap-1 w-full justify-between"
              >
                Lidelser
                <ChevronDown className={`h-4 w-4 transition-transform ${lidelsesOpenMobile ? "rotate-180" : ""}`} />
              </button>
              {lidelsesOpenMobile && (
                <div className="pl-4 mt-2 space-y-2 border-l border-border">
                  {conditions.map((c) => (
                    <Link
                      key={c.path}
                      to={c.path}
                      onClick={() => {
                        setOpen(false);
                        setLidelsesOpenMobile(false);
                      }}
                      className="block text-foreground/70 text-sm"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
