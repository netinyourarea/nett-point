import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  Headphones,
  Layers,
  Gauge,
  Wifi,
  MonitorPlay,
  Smartphone,
  Laptop,
  Home,
  Lock,
  MessageCircle,
  Router,
  Network,
  Tv,
  Building2,
  Star,
  ArrowUpRight,
  Plus,
  Minus,
  Compass,
  Users,
  Briefcase,
  Radio,
} from "lucide-react";
import { useState } from "react";

import heroHome from "@/assets/hero-home.jpg";
import lifeEntertainment from "@/assets/life-entertainment.jpg";
import lifeGaming from "@/assets/life-gaming.jpg";
import lifeRemote from "@/assets/life-remote.jpg";
import lifeBusiness from "@/assets/life-business.jpg";
import lifeSmart from "@/assets/life-smart.jpg";
import lifeLearning from "@/assets/life-learning.jpg";
import cableShowcase from "@/assets/cable-showcase.jpg";
import netFibre from "@/assets/net-fibre.jpg";
import netTower from "@/assets/net-tower.jpg";
import netTechnician from "@/assets/net-technician.jpg";
import netRouter from "@/assets/net-router.jpg";
import tvSports from "@/assets/tv-sports.jpg";

import { Reveal } from "@/components/site/motion";
import { CoverageFinder } from "@/components/site/CoverageFinder";
import { pageHead, SITE_NAME, SITE_URL, SITE_PHONE, SITE_PHONE_TEL, SITE_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({
      path: "/",
      title: `${SITE_NAME} | Broadband, Internet & Cable Connection Assistance`,
      description:
        "Explore broadband, internet and cable TV options available in your area. Net Point simplifies coverage checks, option guidance and the entire connection request process.",
    });
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: SITE_NAME,
            url: SITE_URL,
            telephone: SITE_PHONE,
            email: SITE_EMAIL,
            image: `${SITE_URL}/favicon.png`,
            description:
              "Independent assistance with broadband, internet and cable TV connection requests.",
            openingHours: "Mo-Sa 08:00-20:00",
          }),
        },
      ],
    };
  },
  component: Index,
});

const marquee = [
  "Fibre",
  "Cable",
  "Fixed wireless",
  "Mesh Wi-Fi",
  "Cable TV",
  "Business lines",
  "Smart home",
  "Installation support",
];

const reasons = [
  {
    icon: Gauge,
    title: "Fast connection guidance",
    copy: "Tell us your address and we map the serviceable networks within minutes — before you commit to anything.",
  },
  {
    icon: Network,
    title: "Multiple network options",
    copy: "Fibre, cable, fixed wireless and hybrid setups reviewed together, then narrowed to the ones that genuinely fit.",
  },
  {
    icon: Headphones,
    title: "One dedicated specialist",
    copy: "The same person owns your request from first question to activation day. No handoffs, no repeating yourself.",
  },
  {
    icon: Layers,
    title: "Simple request handling",
    copy: "Paperwork, scheduling and follow-ups handled for you. You approve; we coordinate the rest.",
  },
  {
    icon: Compass,
    title: "Flexible recommendations",
    copy: "Advice shaped by how you actually live — heavy streaming, four-way video calls, or quiet dependability.",
  },
];

const lifestyles = [
  {
    img: lifeEntertainment,
    title: "Home Entertainment",
    copy: "Movie nights that never buffer, across every screen at once.",
    tag: "Households",
  },
  {
    img: lifeGaming,
    title: "Gaming & Streaming",
    copy: "Low-latency routes and upload headroom for live play.",
    tag: "Creators",
  },
  {
    img: lifeRemote,
    title: "Remote Work",
    copy: "Calls that hold steady while the rest of the home stays online.",
    tag: "Professionals",
  },
  {
    img: lifeBusiness,
    title: "Small Business",
    copy: "Point-of-sale, cloud tools and staff Wi-Fi on one backbone.",
    tag: "Teams",
  },
  {
    img: lifeSmart,
    title: "Smart Homes",
    copy: "Dozens of connected devices coordinated without slowdowns.",
    tag: "Automation",
  },
];

const journey = [
  { title: "Check Coverage", copy: "Enter your ZIP, city or locality to see serviceable networks." },
  { title: "Explore Options", copy: "Compare speeds, technology types and bundles side by side." },
  { title: "Submit Request", copy: "Share your details once; we prepare the full request for you." },
  { title: "Expert Assistance", copy: "A specialist verifies availability and confirms scheduling." },
  { title: "Get Connected", copy: "Installation is coordinated and we follow up after activation." },
];

const features = [
  { icon: Zap, title: "Ultra-Fast Internet", copy: "The fastest tier serviceable at your address." },
  { icon: Radio, title: "Stable Connections", copy: "Screened for consistency, not headline speed." },
  { icon: MonitorPlay, title: "HD Streaming", copy: "Bandwidth planned for simultaneous 4K viewing." },
  { icon: Smartphone, title: "Multi-Device Support", copy: "Sized for phones, TVs, tablets, consoles." },
  { icon: Laptop, title: "Work From Anywhere", copy: "Upload-first setups for calls and transfers." },
  { icon: Home, title: "Smart Home Ready", copy: "Handles dense IoT device counts calmly." },
  { icon: Lock, title: "Secure Networking", copy: "Router and network hygiene advice at setup." },
  { icon: MessageCircle, title: "Responsive Help", copy: "Real people reachable when it matters." },
];

const categories = [
  { icon: Compass, name: "Explorer", copy: "Single residents and light users who browse, stream and stay in touch." },
  { icon: Users, name: "Family", copy: "Balanced capacity for streaming, homework and gaming at once." },
  { icon: Briefcase, name: "Professional", copy: "Upload-heavy setups for remote roles and always-on calls." },
  { icon: Building2, name: "Business", copy: "Resilient connectivity for storefronts, clinics and office teams." },
];

const smartLiving = [
  { icon: Wifi, title: "Wi-Fi Optimization" },
  { icon: Network, title: "Mesh Networking" },
  { icon: Laptop, title: "Home Office Setup" },
  { icon: Router, title: "Router Configuration" },
  { icon: MonitorPlay, title: "Streaming Tuning" },
  { icon: Smartphone, title: "Device Assistance" },
];

const testimonials = [
  {
    name: "Marisa Okonjo",
    role: "Homeowner, Denver",
    quote:
      "I'd been on hold with three companies for a week. Net Point figured out what was actually available on my street in one call and handled the rest.",
  },
  {
    name: "Devin Hartley",
    role: "Streamer, Austin",
    quote:
      "They asked about my upload needs before recommending anything. First time anyone did that. My streams have been rock steady since.",
  },
  {
    name: "Priya Raghavan",
    role: "Clinic Manager",
    quote:
      "Our practice couldn't afford downtime during the switch. Scheduling was coordinated around our closing hours and everything just worked.",
  },
  {
    name: "Tom Bergstrom",
    role: "Remote Engineer",
    quote:
      "Clear comparisons, no pressure, no upselling. I picked a mid tier and they agreed it was the right call rather than pushing me higher.",
  },
  {
    name: "Alina Cruz",
    role: "Parent of three",
    quote:
      "Four devices streaming and nobody argues anymore. The follow-up after installation really surprised me.",
  },
];

const faqs = [
  {
    q: "How does the coverage check work?",
    a: "Enter your ZIP code, city or locality and we review which broadband and cable networks are serviceable near that location. A specialist then verifies the exact options for your specific address before anything is submitted.",
  },
  {
    q: "Is there a cost to explore options?",
    a: "Exploring availability and receiving guidance costs nothing. Any charges relate to the service you ultimately choose and are always disclosed before a request is submitted.",
  },
  {
    q: "How long does a connection request take?",
    a: "Most requests are reviewed the same day. Installation timelines depend on the network and your area, and typically range from a couple of days to two weeks.",
  },
  {
    q: "Can you help with equipment and Wi-Fi setup?",
    a: "Yes. Our Smart Living support covers router configuration, mesh planning, streaming optimization and connected device troubleshooting after activation.",
  },
  {
    q: "What details do you need from me?",
    a: "A service address, a way to reach you, and a short description of how your household or business uses the internet. That's enough to prepare accurate recommendations.",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] text-primary uppercase">
      <span className="h-px w-8 bg-primary/50" />
      {children}
    </span>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-x-clip">
      {/* HERO — bento composition */}
      <section className="relative pt-24 pb-10 sm:pt-28 lg:pt-32">
        <div className="mesh-bg pointer-events-none absolute inset-0 -z-10 opacity-70" />
        <div className="net-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" />

        <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:px-6 lg:grid-cols-12">
          {/* headline tile */}
          <div className="glass relative overflow-hidden rounded-3xl p-7 sm:p-10 lg:col-span-7 lg:p-12">
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative">
              <SectionLabel>Connectivity, simplified</SectionLabel>
              <h1 className="mt-6 text-[2.15rem] leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
                Every network at your address, on <span className="text-gradient">one point</span>.
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ivory/65">
                Explore the broadband and cable connectivity options available in your area, compare
                what genuinely fits the way you live or work, and let our specialists simplify the
                entire connection request process from first question to activation day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Call {SITE_PHONE} <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/8"
                >
                  Talk to a Specialist
                </Link>
              </div>
            </div>
          </div>

          {/* hero image tile */}
          <div className="relative overflow-hidden rounded-3xl border border-border lg:col-span-5">
            <img
              src={heroHome}
              alt="A family relaxing in a modern connected home in the evening"
              width={1920}
              height={1200}
              className="h-64 w-full object-cover sm:h-80 lg:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
            <div className="glass-dark absolute inset-x-4 bottom-4 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl p-4">
              <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary">
                <Radio className="h-5 w-5" />
                <span className="animate-ring absolute inset-0 rounded-xl border border-primary/40" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">Live network availability</span>
                <span className="block truncate text-xs text-ivory/55">
                  Fibre, cable &amp; fixed wireless checked together
                </span>
              </span>
            </div>
          </div>

          {/* coverage finder tile */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-xl font-semibold sm:text-2xl">Coverage Finder</h2>
              <p className="text-xs text-muted-foreground">ZIP code, city or locality</p>
            </div>
            <div className="mt-6">
              <CoverageFinder />
            </div>
          </div>

          {/* stat tiles */}
          <div className="grid grid-cols-2 gap-3 lg:col-span-4 lg:grid-cols-1">
            {[
              { k: "1,900+", v: "Areas supported" },
              { k: "42,800+", v: "Requests handled" },
              { k: "98%", v: "Satisfaction rate" },
            ].map((s) => (
              <div
                key={s.k}
                className="flex flex-col justify-center rounded-3xl border border-border bg-card px-6 py-5 last:col-span-2 lg:last:col-span-1"
              >
                <p className="font-display text-2xl font-semibold text-cyan sm:text-3xl">{s.k}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="border-y border-border bg-deep py-4">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-10 pr-10">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={`${m}-${i}`}
                className="flex items-center gap-3 text-xs tracking-[0.24em] whitespace-nowrap text-ivory/40 uppercase"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY — bento grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Why Net Point</SectionLabel>
            <h2 className="mt-5 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Advice that starts with your address, not a sales script
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 60}
              className={i === 0 ? "lg:col-span-3" : i === 1 ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/45">
                <span className="pointer-events-none absolute top-3 right-5 font-display text-5xl font-bold text-primary/25 transition-colors group-hover:text-primary/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 text-base font-semibold sm:text-lg">{r.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LIFESTYLES — image bento */}
      <section className="border-y border-border bg-deep py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div className="min-w-0">
                <SectionLabel>Designed for every lifestyle</SectionLabel>
                <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  One connection, five very different kinds of days
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-ivory/55">
                Pick the day that looks most like yours — the setup is shaped around it.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {lifestyles.map((l, i) => (
              <Reveal
                key={l.title}
                delay={i * 60}
                className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <article
                  className={`group relative h-full overflow-hidden rounded-3xl border border-border ${
                    i === 0 ? "min-h-[20rem] lg:min-h-[30rem]" : "min-h-[15rem]"
                  }`}
                >
                  <img
                    src={l.img}
                    alt={l.title}
                    loading="lazy"
                    width={1280}
                    height={860}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/10" />
                  <div className="relative flex h-full flex-col justify-end gap-2 p-6">
                    <span className="inline-flex w-fit rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-[10px] tracking-[0.22em] text-primary uppercase">
                      {l.tag}
                    </span>
                    <h3 className="text-xl font-semibold sm:text-2xl">{l.title}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-ivory/65">{l.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY — vertical rail */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="text-center">
            <SectionLabel>Connection journey</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Five steps, fully guided</h2>
          </div>
        </Reveal>

        <ol className="relative mt-14 space-y-3 before:absolute before:top-0 before:bottom-0 before:left-[1.35rem] before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-primary/25 before:to-transparent">
          {journey.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <li className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-4">
                <span className="relative z-10 grid h-11 w-11 place-items-center rounded-xl border border-primary/40 bg-card font-display text-sm font-semibold text-primary">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 sm:flex sm:items-baseline sm:gap-6">
                  <h3 className="text-base font-semibold sm:w-52 sm:shrink-0">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-0">
                    {s.copy}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* FEATURES — staggered floating blocks */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Connectivity features</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl lg:text-5xl">
              The details that decide whether a connection feels effortless
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 50}
              className={i % 3 === 1 ? "lg:mt-8" : i % 3 === 2 ? "lg:mt-4" : ""}
            >
              <div
                className={`group relative h-full overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                  i === 0
                    ? "border-primary/40 bg-gradient-to-br from-primary/15 via-card to-card"
                    : "border-border bg-card hover:border-cyan/40"
                }`}
              >
                <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-cyan/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-cyan/12 text-cyan">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 text-base font-semibold">{f.title}</h3>
                <p className="relative mt-2 text-xs leading-relaxed text-muted-foreground">
                  {f.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NETWORK TYPES — alternating rows */}
      <section className="border-y border-border bg-deep py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-xl">
              <SectionLabel>The networks</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                Fibre in the ground, signal in the air, an engineer at your door
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ivory/55">
                Three kinds of infrastructure can serve one street. We check all of them before
                recommending anything.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 space-y-3">
            {[
              {
                img: netFibre,
                alt: "Illuminated fibre optic strands connected to network equipment",
                tag: "01 · Fibre",
                title: "Light-speed lines",
                copy: "Symmetrical speeds where the fibre network already reaches your street — built for households that upload as much as they download.",
              },
              {
                img: netTower,
                alt: "Telecom tower and rooftop antennas above a neighbourhood at dusk",
                tag: "02 · Fixed wireless",
                title: "Signal over the rooftops",
                copy: "Tower-served coverage for addresses wired infrastructure hasn't reached yet, with installs measured in days, not months.",
              },
              {
                img: netTechnician,
                alt: "An engineer connecting a broadband cable to a wall termination box",
                tag: "03 · Installation",
                title: "Activation day handled",
                copy: "We prepare the request so the visit is booked, scoped and quick — no surprise charges, no second appointment.",
              },
            ].map((n, i) => (
              <Reveal key={n.tag} delay={i * 90}>
                <article
                  className={`group grid items-stretch gap-0 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative h-56 overflow-hidden md:h-full">
                    <img
                      src={n.img}
                      alt={n.alt}
                      loading="lazy"
                      width={1280}
                      height={864}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>
                  <div className="flex flex-col justify-center p-7 sm:p-10">
                    <span className="text-[11px] tracking-[0.22em] text-cyan uppercase">
                      {n.tag}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{n.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {n.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="text-center">
            <div className="inline-block">
              <SectionLabel>Connection categories</SectionLabel>
            </div>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Find the profile that fits</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7">
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-iris/15 blur-2xl" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-semibold">{c.name}</h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.copy}
                </p>
                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Call {SITE_PHONE} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CABLE TV */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid gap-3 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl border border-border lg:col-span-7">
            <img
              src={cableShowcase}
              alt="A premium home theatre room with a large screen showing live sports"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-72 w-full object-cover sm:h-96 lg:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-void/80 via-void/20 to-transparent" />
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] text-cyan uppercase">
              <Tv className="h-4 w-4" /> Cable TV
            </span>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Television worth gathering around
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Explore entertainment, live sports, regional programming, kids' content and premium
              television line-ups available through supported providers in your location. We help you
              understand what each package actually includes before you decide.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Entertainment", "Sports", "Regional", "Kids", "Premium"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-ivory/70"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Explore Cable TV <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {[
            { img: tvSports, alt: "Live stadium match on a wall-mounted television", label: "Live sports" },
            {
              img: lifeEntertainment,
              alt: "A family watching a film together in the living room",
              label: "Family entertainment",
            },
            {
              img: lifeLearning,
              alt: "A student joining an online class from home",
              label: "Kids & learning",
            },
          ].map((s) => (
            <figure
              key={s.label}
              className="group relative overflow-hidden rounded-3xl border border-border lg:col-span-4"
            >
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                width={1280}
                height={864}
                className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent" />
              <figcaption className="absolute bottom-4 left-5 text-sm font-semibold text-ivory">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SMART LIVING */}
      <section className="border-y border-border bg-deep py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <div>
                <SectionLabel>Smart living</SectionLabel>
                <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                  Support that continues long after activation
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-ivory/60">
                  A connection is only as good as the network inside your walls. Our team helps you
                  place hardware, tune coverage and get every device behaving — from the router in
                  the hallway to the console two floors up.
                </p>
                <Link
                  to="/services"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-ivory/8"
                >
                  Explore Services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <div className="space-y-3">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-border">
                  <img
                    src={netRouter}
                    alt="A mesh Wi-Fi unit and modem on a shelf in a living room"
                    loading="lazy"
                    width={1280}
                    height={864}
                    className="h-52 w-full object-cover sm:h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/20" />
                  <div className="absolute bottom-5 left-5 max-w-[15rem]">
                    <p className="text-sm font-semibold text-ivory">Hardware placed properly</p>
                    <p className="mt-1 text-xs leading-snug text-ivory/60">
                      Router, mesh nodes and set-top box positioned for full-home coverage.
                    </p>
                  </div>
                </div>
              </Reveal>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {smartLiving.map((s, i) => (
                  <Reveal key={s.title} delay={i * 60}>
                    <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/45">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/12 text-primary transition-transform group-hover:-translate-y-1">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <p className="mt-4 text-sm font-semibold">{s.title}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="max-w-xl">
            <SectionLabel>Customer stories</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl lg:text-5xl">
              People who stopped dreading the words "service provider"
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-3 lg:grid-cols-3">
          {/* spotlight testimonial */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/12 via-card to-card p-8 sm:p-10">
              <span className="pointer-events-none absolute -top-6 -right-2 font-display text-[9rem] leading-none font-bold text-primary/10">
                “
              </span>
              <div className="relative">
                <div className="flex gap-1 text-cyan">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-xl leading-relaxed font-medium text-ivory sm:text-2xl">
                  “{testimonials[0].quote}”
                </blockquote>
              </div>
              <figcaption className="relative mt-8 flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/20 font-display text-base font-semibold text-primary">
                  {testimonials[0].name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">
                    {testimonials[0].name}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {testimonials[0].role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {testimonials.slice(1).map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <figure className="group h-full rounded-3xl border border-border bg-card p-6 transition-colors hover:border-cyan/40">
                <div className="flex gap-1 text-cyan">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-ivory/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold">{t.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Questions we hear most</h2>
            </div>
            <span className="hidden items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 sm:flex">
              <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                <Headphones className="h-5 w-5" />
                <span className="animate-ring absolute inset-0 rounded-xl border border-primary/35" />
              </span>
              <span className="text-xs leading-snug text-muted-foreground">
                Still unsure?
                <br />
                Talk to a specialist.
              </span>
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <Reveal key={f.q} delay={i * 50} className={i === faqs.length - 1 && faqs.length % 2 === 1 ? "sm:col-span-2" : ""}>
                <div
                  className={`h-full overflow-hidden rounded-2xl border bg-card transition-colors ${
                    open ? "border-primary/45" : "border-border"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-xs font-semibold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm font-semibold">{f.q}</span>
                    {open ? (
                      <Minus className="h-4 w-4 shrink-0 text-primary" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-primary" />
                    )}
                  </button>
                  {open && (
                    <p className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-8 sm:px-6">
        <div className="mesh-bg relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border px-6 py-16 text-center sm:px-14">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-25" />
          <Reveal>
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-5xl">
                See what's available at your address today
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/65">
                Explore the broadband and cable services reaching your area, and let a specialist
                handle the request from there.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Call {SITE_PHONE}
                </a>
                <Link
                  to="/contact"
                  className="rounded-xl border border-border bg-card px-8 py-4 text-sm font-semibold text-ivory transition-transform hover:-translate-y-0.5"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
