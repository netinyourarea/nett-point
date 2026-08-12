import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SITE_PHONE, SITE_PHONE_TEL, SITE_EMAIL } from "@/lib/site";

export const INDEPENDENCE_NOTICE =
  "Net Point operates as an independent third-party service provider offering assistance with broadband and cable connection requests. We are not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company. All trademarks and brand names belong to their respective owners.";

const groups = [
  {
    title: "Quick Links",
    items: [
      { to: "/", label: "Home" },
      { to: "/services", label: "Services" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Connectivity",
    items: [
      { to: "/services", label: "Broadband" },
      { to: "/services", label: "Internet" },
      { to: "/services", label: "Cable TV" },
    ],
  },
  {
    title: "Legal",
    items: [
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
      { to: "/terms", label: "Refund Policy" },
      { to: "/terms", label: "Disclaimer" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-deep">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.25]" />
      <div className="pointer-events-none absolute -top-40 left-1/3 h-80 w-80 rounded-full bg-iris/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <span className="font-display text-xl font-semibold tracking-tight">
                Net <span className="text-gradient">Point</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ivory/60">
              A modern connectivity desk helping households and businesses explore broadband and
              cable options available at their address, then handling the request from start to
              finish.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/75">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-cyan" />
                <a href={`tel:${SITE_PHONE_TEL}`} className="hover:text-primary">
                  {SITE_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-cyan" />
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-primary">
                  {SITE_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-xs tracking-[0.24em] text-ivory/40 uppercase">{g.title}</h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.to}
                      className="text-sm text-ivory/65 transition-colors hover:text-primary"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-ivory/[0.03] p-6">
          <p className="text-xs leading-relaxed text-ivory/50">{INDEPENDENCE_NOTICE}</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Net Point. All rights reserved.</p>
          <p>Independent connection assistance service.</p>
        </div>
      </div>
    </footer>
  );
}
