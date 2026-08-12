import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/page";
import { INDEPENDENCE_NOTICE } from "@/components/site/Footer";
import { pageHead, breadcrumb, SITE_NAME, SITE_PHONE, SITE_PHONE_TEL, SITE_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => {
    const head = pageHead({
      path: "/contact/",
      title: `Contact a Connectivity Specialist | ${SITE_NAME}`,
      description:
        "Talk to a Smart Net Guide specialist about broadband and cable options in your area, coverage checks, setup help or an existing connection request.",
    });
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumb([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact/" },
            ]),
          ),
        },
      ],
    };
  },
  component: ContactPage,
});


function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Talk to a connectivity specialist"
        intro="Tell us where you are and what you need the connection to do. We'll come back with the options that actually make sense."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-4xl border border-border bg-card p-7 shadow-soft sm:p-10">
            {sent ? (
              <div className="flex items-start gap-3 rounded-3xl border border-mint/40 bg-mint/12 p-6">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-foreground/80">
                  Thanks — your request is with our team. A specialist will reach out shortly to
                  confirm what's serviceable at your address.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-4 sm:grid-cols-2"
              >
                <Field label="Full name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="ZIP / City" name="zip" />
                <label className="sm:col-span-2">
                  <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    How can we help?
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-3xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground sm:col-span-2"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-4xl bg-secondary/60 p-7">
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />{" "}
                  <a href={`tel:${SITE_PHONE_TEL}`} className="hover:text-primary">
                    {SITE_PHONE}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />{" "}
                  <a href={`mailto:${SITE_EMAIL}`} className="hover:text-primary">
                    {SITE_EMAIL}
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Mon–Sat, 8:00am –
                  8:00pm CT
                </li>
              </ul>
            </div>
            <div className="rounded-4xl border border-border p-7">
              <h2 className="text-sm font-semibold">Important notice</h2>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {INDEPENDENCE_NOTICE}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label>
      <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-3xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring"
      />
    </label>
  );
}
