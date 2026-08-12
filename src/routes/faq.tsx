import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PageHero, CtaStrip } from "@/components/site/page";
import { pageHead, breadcrumb, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => {
    const head = pageHead({
      path: "/faq/",
      title: `Frequently Asked Questions | ${SITE_NAME}`,
      description:
        "Answers about coverage checks, connection requests, timelines, equipment support and how Smart Net Guide assists with broadband and cable services.",
    });
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumb([
              { name: "Home", path: "/" },
              { name: "FAQ", path: "/faq/" },
            ]),
          ),
        },
      ],
    };
  },
  component: FaqPage,
});


const faqs = [
  {
    q: "How do I know which services are available at my address?",
    a: "Start with the Coverage Finder. It shows the networks reaching your area, and a specialist then confirms exactly which broadband and cable services are serviceable at your specific address.",
  },
  {
    q: "Does Smart Net Guide charge for guidance?",
    a: "Exploring options and speaking with a specialist is free. Any costs relate to the service you choose and are disclosed clearly before a request is submitted.",
  },
  {
    q: "How long does installation usually take?",
    a: "Requests are typically reviewed the same day. Installation windows depend on the network and your area, generally ranging from two days to two weeks.",
  },
  {
    q: "Can you help if I already have a connection?",
    a: "Yes. We regularly help households review whether faster or more suitable options have become available at their address since they first connected.",
  },
  {
    q: "What happens to my personal information?",
    a: "Details are used only to check availability and process the connection request you approve. See our Privacy Policy for the full explanation.",
  },
  {
    q: "Do you support businesses as well as homes?",
    a: "We do. Storefronts, clinics, studios and offices all have different resilience needs, and we plan connectivity around uptime rather than headline speed.",
  },
  {
    q: "Are you affiliated with a specific provider?",
    a: "No. Smart Net Guide is an independent third-party service provider offering assistance with broadband and cable connection requests, and is not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company.",
  },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Everything you might be wondering"
        intro="Short, direct answers about coverage, costs, timelines and the support you get along the way."
      />
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-3xl border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0 text-primary" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-primary" />
                  )}
                </button>
                {isOpen && (
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <CtaStrip />
    </main>
  );
}
