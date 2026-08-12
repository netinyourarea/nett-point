import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Logo, Wordmark } from "./Logo";
import { SITE_PHONE, SITE_PHONE_TEL } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          solid ? "glass-dark border-b border-border" : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <Logo size={34} />
            <Wordmark subtitle="Connectivity" />
          </Link>

          <div className="ml-auto hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-lg px-3.5 py-2 text-[13px] font-medium whitespace-nowrap text-ivory/60 transition-colors hover:bg-ivory/8 hover:text-ivory"
                activeProps={{ className: "text-ivory bg-ivory/10" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2 lg:ml-2">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="hidden items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-[13px] font-semibold text-ivory transition-colors hover:bg-ivory/8 md:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" /> {SITE_PHONE}
            </a>
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-[13px] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Get Started <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-ivory lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="glass-dark max-h-[75vh] overflow-y-auto border-b border-border px-4 pb-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-ivory/75 hover:bg-ivory/8 hover:text-ivory"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2 sm:col-span-2 sm:grid-cols-2">
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border px-4 py-3 text-center text-sm font-semibold text-ivory"
              >
                <Phone className="h-4 w-4" /> {SITE_PHONE}
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
