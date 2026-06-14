import Container from "@/components/shared/Container";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <ContactHero />

      {/* Contact Information + RFQ Form */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
            <ContactInfo />

            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}