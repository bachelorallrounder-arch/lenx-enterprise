import Container from "@/components/shared/Container";

export default function TermsPage() {
  return (
    <main className="py-20">
      <Container className="max-w-4xl">
        <h1 className="text-5xl font-bold text-[#071B4D]">
          Terms & Conditions
        </h1>

        <p className="mt-6 text-slate-600">
          Last Updated: {new Date().getFullYear()}
        </p>

        <div className="prose mt-12 max-w-none">
          <h2>Website Usage</h2>

          <p>
            By accessing this website, you agree to use it
            only for lawful business purposes.
          </p>

          <h2>Product Information</h2>

          <p>
            Product specifications, availability, and
            pricing may change without notice.
          </p>

          <h2>Quotations</h2>

          <p>
            All quotations are subject to availability,
            manufacturer lead times, and final confirmation
            by Lenx Tech Enterprise.
          </p>

          <h2>Intellectual Property</h2>

          <p>
            All content, graphics, logos, and materials on
            this website remain the property of Lenx Tech
            Enterprise unless otherwise stated.
          </p>

          <h2>Limitation of Liability</h2>

          <p>
            Lenx Tech Enterprise shall not be liable for any
            indirect, incidental, or consequential damages
            arising from website usage.
          </p>

          <h2>Contact</h2>

          <p>
            For any questions regarding these terms, please
            contact our team through the Contact page.
          </p>
        </div>
      </Container>
    </main>
  );
}