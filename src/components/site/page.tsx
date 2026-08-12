import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { Reveal } from "./motion";
import { SITE_PHONE, SITE_PHONE_TEL } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-28 text-ivory sm:pt-44">
      <div className="mesh-bg pointer-events-none absolute inset-0 opacity-45" />
      <div className="net-grid pointer-events-none absolute inset-0 opacity-[0.1]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="inline-flex rounded-full border border-mint/35 bg-mint/10 px-4 py-1.5 text-xs tracking-[0.22em] text-mint uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/70">{intro}</p>
        {children}
      </div>
      <div className="absolute inset-x-0 -bottom-px h-16 rounded-t-[100%] bg-background" />
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <Reveal>
        <div className="space-y-6 text-[15px] leading-relaxed text-foreground/80 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_li]:mb-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
        </div>
      </Reveal>
    </section>
  );
}

export function CtaStrip() {
  return (
    <section className="px-5 pb-4 sm:px-8">
      <div className="mesh-bg mx-auto max-w-6xl rounded-4xl p-1">
        <div className="glass rounded-4xl px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to see what's available?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Check the broadband and cable options serviceable at your address, or speak with a
            connectivity specialist today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" /> Call {SITE_PHONE}
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-primary/25 bg-card px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
