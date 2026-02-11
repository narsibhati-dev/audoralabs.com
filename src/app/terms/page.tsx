import { getPageMetadata } from "@/lib/seo";
import { TableOfContents } from "@/components/ui/table-of-contents";

export const metadata = getPageMetadata({
  title: "Terms and Conditions",
  description:
    "These Terms and Conditions outline the rules and regulations for using the Audora Labs platform.",
  path: "/terms",
});

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "definitions", title: "Definitions" },
  { id: "account-registration", title: "Account Registration" },
  { id: "user-responsibilities", title: "User Responsibilities" },
  { id: "intellectual-property", title: "Intellectual Property Rights" },
  { id: "payment-terms", title: "Payment Terms" },
  { id: "termination", title: "Termination" },
  { id: "limitation-liability", title: "Limitation of Liability" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes-terms", title: "Changes to Terms" },
  { id: "contact-us", title: "Contact Us" },
];

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Terms and Conditions
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: February 11, 2026
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Welcome to Audora Labs. By accessing or using our platform, you
              agree to be bound by these Terms and Conditions. Please read them
              carefully before using our services.
            </p>
          </section>

          <TableOfContents sections={sections} />

          <section id="acceptance" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p className="text-lg text-muted-foreground">
              By accessing or using Audora Labs, you agree to comply with and be
              bound by these Terms and Conditions. If you disagree with any part
              of these terms, you may not access the service.
            </p>
          </section>

          <section id="definitions" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              2. Definitions
            </h2>
            <ul className="list-disc space-y-3 pl-6 text-lg text-muted-foreground">
              <li>
                <strong className="text-foreground">
                  &quot;Platform&quot;
                </strong>{" "}
                refers to the Audora Labs website and all associated services
              </li>
              <li>
                <strong className="text-foreground">&quot;User&quot;</strong>{" "}
                refers to any person who accesses or uses the Platform
              </li>
              <li>
                <strong className="text-foreground">&quot;Content&quot;</strong>{" "}
                refers to any text, audio, images, or other materials uploaded
                or created on the Platform
              </li>
              <li>
                <strong className="text-foreground">
                  &quot;Services&quot;
                </strong>{" "}
                refers to all features and functionalities provided by Audora
                Labs
              </li>
            </ul>
          </section>

          <section id="account-registration" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              3. Account Registration
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                To access certain features, you must create an account. When
                creating an account, you agree to:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-lg text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your password</li>
                <li>Promptly update any changes to your information</li>
                <li>
                  Accept responsibility for all activity under your account
                </li>
              </ul>
            </div>
          </section>

          <section id="user-responsibilities" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              4. User Responsibilities
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                As a user of Audora Labs, you agree not to:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-lg text-muted-foreground">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload malicious software or harmful content</li>
                <li>Attempt to gain unauthorized access to any systems</li>
                <li>
                  Use the platform for any illegal or unauthorized purpose
                </li>
                <li>Interfere with or disrupt the integrity of the platform</li>
              </ul>
            </div>
          </section>

          <section id="intellectual-property" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              5. Intellectual Property Rights
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                All intellectual property rights in the Platform and its
                original content (excluding user-generated content) are owned by
                Audora Labs. Users retain ownership of their content but grant
                us a license to use, reproduce, and distribute it as necessary
                to operate the Platform.
              </p>
              <p className="text-lg text-muted-foreground">
                You may not copy, modify, distribute, sell, or lease any part of
                our Platform or included software without our explicit written
                permission.
              </p>
            </div>
          </section>

          <section id="payment-terms" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              6. Payment Terms
            </h2>
            <ul className="list-disc space-y-3 pl-6 text-lg text-muted-foreground">
              <li>All payments are processed securely through our platform</li>
              <li>
                Subscription fees are billed in advance on a recurring basis
              </li>
              <li>Refunds are handled in accordance with our Refund Policy</li>
              <li>We reserve the right to modify pricing with prior notice</li>
              <li>
                You are responsible for any applicable taxes related to your
                purchase
              </li>
            </ul>
          </section>

          <section id="termination" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              7. Termination
            </h2>
            <p className="text-lg text-muted-foreground">
              We may terminate or suspend your account immediately, without
              prior notice, for conduct that we determine violates these Terms,
              is harmful to other users or the Platform, or for any other reason
              at our sole discretion. Upon termination, your right to use the
              Platform will immediately cease.
            </p>
          </section>

          <section id="limitation-liability" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              8. Limitation of Liability
            </h2>
            <p className="text-lg text-muted-foreground">
              Audora Labs shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of profits, data, use, goodwill, or other
              intangible losses. Our total liability shall not exceed the amount
              paid by you to Audora Labs in the twelve months prior to the
              claim.
            </p>
          </section>

          <section id="governing-law" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              9. Governing Law
            </h2>
            <p className="text-lg text-muted-foreground">
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Audora Labs operates,
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section id="changes-terms" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              10. Changes to Terms
            </h2>
            <p className="text-lg text-muted-foreground">
              We reserve the right to modify these Terms at any time. We will
              notify you of any changes by posting the new Terms on this page
              and updating the &quot;Last Updated&quot; date. Continued use of
              the Platform after such changes constitutes your consent to the
              updated Terms.
            </p>
          </section>

          <section id="contact-us" className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              11. Contact Us
            </h2>
            <p className="text-lg text-muted-foreground">
              If you have any questions about these Terms and Conditions, please
              contact us at:{" "}
              <a
                href="mailto:legal@audoralabs.com"
                className="font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                legal@audoralabs.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
