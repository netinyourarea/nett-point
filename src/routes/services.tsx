import { createFileRoute, Link } from "@tanstack/react-router";
import { Gauge, Network, Layers, ShieldCheck, Wifi, Router, MonitorPlay, Laptop } from "lucide-react";
import { PageHero, CtaStrip } from "@/components/site/page";
import { Reveal } from "@/components/site/motion";
import { CoverageFinder } from "@/components/site/CoverageFinder";
import { pageHead, breadcrumb, SITE_NAME } from "@/lib/site";
import cableShowcase from "@/assets/cable-showcase.jpg";
import lifeEntertainment from "@/assets/life-entertainment.jpg";

const title = `Broadband, Internet & Cable TV Services | ${SITE_NAME}`;
const description =
  "Fibre, cable, fixed wireless and cable TV options explained for your address — plus Wi-Fi, router and smart device setup support from a dedicated specialist.";

export const Route = createFileRoute("/services")({
  head: () => {
    const head = pageHead({ path: "/services/", title, description });
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumb([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services/" },
            ]),
          ),
        },
      ],
    };
  },
  component: ServicesPage,
});

const broadband = [
  {
    icon: Gauge,
    title: "Fibre",
    copy: "Symmetrical speeds and low latency where the network reaches your street — ideal for upload-heavy work and large households.",
  },
  {
    icon: Network,
    title: "Cable",
    copy: "Widely serviceable, strong download performance and often the fastest route to getting connected quickly.",
  },
  {
    icon: Layers,
    title: "Fixed Wireless",
    copy: "A dependable option for outlying addresses where wired infrastructure hasn't arrived yet.",
  },
  {
    icon: ShieldCheck,
    title: "Hybrid Setups",
    copy: "Primary and backup connections combined so a single outage never takes the whole home offline.",
  },
];

const lineups = [
  { title: "Entertainment", copy: "Scripted drama, comedy, lifestyle and on-demand libraries." },
  { title: "Sports", copy: "Live league coverage, regional sports networks and match replays." },
  { title: "Regional", copy: "Local news, community channels and language-specific programming." },
  { title: "Kids", copy: "Age-appropriate channels with parental controls configured for you." },
  { title: "Premium", copy: "Film-first channels and add-on tiers for cinema at home." },
];

const support = [
  { icon: Wifi, title: "Wi-Fi Optimization", copy: "Channel, placement and band tuning for even coverage." },
  { icon: Network, title: "Mesh Networking", copy: "Node planning for multi-floor and wide-footprint homes." },
  { icon: Laptop, title: "Home Office Connectivity", copy: "Priority routing for calls, VPNs and large uploads." },
  { icon: Router, title: "Router Setup", copy: "Configuration, firmware and secure credential practices." },
  { icon: MonitorPlay, title: "Streaming Optimization", copy: "Buffer-free playback across every screen at once." },
  { icon: ShieldCheck, title: "Connected Devices", copy: "Onboarding for smart devices, consoles and wearables." },
];

function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Broadband, internet and cable — in one place"
        intro="We review the serviceable networks at your address, translate the technical differences into plain language, and stay with you through setup."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">Broadband & internet options</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {broadband.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <div className="h-full rounded-4xl border border-border bg-card p-8 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">Cable TV line-ups</h2>
        <div className="relative mt-8">
          <img
            src={cableShowcase}
            alt="Premium home theatre with a large screen showing cable television"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-72 w-full rounded-[3rem] object-cover sm:h-[26rem]"
          />
          <img
            src={lifeEntertainment}
            alt="Family watching cable television together at home"
            loading="lazy"
            width={1280}
            height={860}
            className="animate-floaty absolute -bottom-12 left-6 hidden h-44 w-64 rounded-[2.5rem] border-8 border-background object-cover shadow-float lg:block"
          />
        </div>
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lineups.map((l, i) => (
            <Reveal key={l.title} delay={i * 70}>
              <div className="h-full rounded-4xl border border-border bg-card p-7">
                <h3 className="text-lg font-semibold text-primary">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">Setup & ongoing support</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {support.map((a, i) => (
            <Reveal key={a.title} delay={i * 60}>
              <div className="group h-full rounded-4xl border border-border bg-card p-7 transition-transform hover:-translate-y-1">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground transition-transform group-hover:rotate-6">
                  <a.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14">
          <CoverageFinder />
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Request Support
          </Link>
        </div>
      </section>

      <CtaStrip />
    </main>
  );
}
