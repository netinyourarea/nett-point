import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/site/page";
import { pageHead, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead({
      path: "/privacy-policy/",
      title: `Privacy Policy | ${SITE_NAME}`,
      description:
        "How Smart Net Guide collects, uses, stores and protects the information you share when checking coverage or submitting a connection request.",
    }),
  component: PrivacyPage,
});


function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="We collect only what is needed to check availability and process the connection request you approve."
      />
      <Prose>
        <h2>Information we collect</h2>
        <p>
          When you use the Coverage Finder or contact our team we may collect your name, email
          address, phone number, service address or locality, and a description of your
          connectivity needs. We also collect basic technical data such as browser type and pages
          viewed to keep the site working reliably.
        </p>
        <h2>How we use your information</h2>
        <ul>
          <li>To determine which broadband and cable services are serviceable at your location.</li>
          <li>To prepare, submit and follow up on a connection request you have approved.</li>
          <li>To respond to support questions and provide setup assistance.</li>
          <li>To improve the accuracy of our availability information and site performance.</li>
        </ul>
        <h2>Sharing</h2>
        <p>
          Details are shared with a service provider only where necessary to progress a request you
          have approved. We do not sell personal information. Service partners receive only the
          information required to complete the request.
        </p>
        <h2>Data retention and security</h2>
        <p>
          Information is retained for as long as needed to service your request and meet legal
          obligations, then removed. We use industry-standard safeguards including encrypted
          transmission and restricted internal access.
        </p>
        <h2>Your choices</h2>
        <p>
          You may request access to, correction of, or deletion of your information at any time by
          emailing hello@nettpoint.com. You can also opt out of marketing communication without
          affecting an active request.
        </p>
        <h2>Cookies</h2>
        <p>
          We use essential cookies for site functionality and limited analytics cookies to
          understand which pages are useful. You can disable non-essential cookies in your browser.
        </p>
        <h2>Contact</h2>
        <p>Questions about this policy can be sent to hello@nettpoint.com.</p>
      </Prose>
    </main>
  );
}
