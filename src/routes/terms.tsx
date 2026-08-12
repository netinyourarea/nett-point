import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/site/page";
import { INDEPENDENCE_NOTICE } from "@/components/site/Footer";
import { pageHead, SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      path: "/terms/",
      title: `Terms, Refund Policy & Disclaimer | ${SITE_NAME}`,
      description:
        "The terms governing use of the Smart Net Guide website, our refund policy for assistance fees, and our independent third-party disclaimer.",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms, Refund Policy & Disclaimer"
        intro="Please read these terms carefully before using our website or requesting connection assistance."
      />
      <Prose>
        <h2>Our role</h2>
        <p>{INDEPENDENCE_NOTICE}</p>

        <h2>Use of the website</h2>
        <p>
          You agree to use this website lawfully and to provide accurate information when checking
          coverage or submitting a request. Availability results are indicative and are always
          verified with you before a request is submitted.
        </p>

        <h2>Service scope</h2>
        <ul>
          <li>We provide guidance on connectivity options that may be serviceable at your address.</li>
          <li>We assist with preparing, submitting and following up on connection requests.</li>
          <li>We do not own, operate or control any network infrastructure.</li>
          <li>Installation, pricing, contracts and service quality are determined by the provider.</li>
        </ul>

        <h2>No guarantee of availability</h2>
        <p>
          Coverage varies by address and can change without notice. Nothing on this site constitutes
          a guarantee that a particular service, speed or package will be available to you.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {SITE_NAME} is not liable for indirect or
          consequential losses arising from the use of this website or from services delivered by a
          provider following a connection request.
        </p>

        <h2>Intellectual property</h2>
        <p>
          All content on this site is owned by {SITE_NAME} unless stated otherwise. Third-party
          trademarks referenced remain the property of their respective owners.
        </p>

        <h2>Refund policy</h2>
        <p>
          This policy applies only to fees charged directly by {SITE_NAME} for connection
          assistance. Charges billed by a provider for their own service are governed by that
          provider's terms.
        </p>
        <ul>
          <li>Eligible: requests made within 14 days of the assistance fee being charged.</li>
          <li>Eligible: cases where the requested service could not be provisioned at your address.</li>
          <li>Eligible: duplicate or clearly erroneous charges.</li>
          <li>Not eligible: fees where assistance was completed and the connection was activated.</li>
          <li>Not eligible: provider charges, equipment costs or early-termination fees.</li>
        </ul>
        <p>
          To request a refund, email {SITE_EMAIL} with your name, service address and the charge
          date. We acknowledge every request within two business days, and approved refunds are
          issued to the original payment method within 5–10 business days.
        </p>

        <h2>Disclaimer</h2>
        <p>
          Coverage results, speed references and package descriptions are indicative and provided in
          good faith. Any provider names or brand references are used for identification only and do
          not imply partnership, sponsorship or endorsement. Content here is general information
          about connectivity options, not legal, financial or technical advice, and we are not
          responsible for third-party websites linked from this site.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms periodically. Continued use of the website after changes are
          published constitutes acceptance of the revised terms.
        </p>
      </Prose>
    </main>
  );
}
