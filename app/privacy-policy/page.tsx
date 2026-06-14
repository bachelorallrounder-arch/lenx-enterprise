import Container from "@/components/shared/Container";

export default function PrivacyPolicyPage() {
  return (
    <main className="py-20">
      <Container className="max-w-4xl">
        <h1 className="text-5xl font-bold text-[#071B4D]">
          Privacy Policy
        </h1>

        <p className="mt-6 text-slate-600">
          Last Updated: {new Date().getFullYear()}
        </p>

        <div className="prose mt-12 max-w-none">
          <p>
            Lenx Tech Enterprise respects your privacy and
            is committed to protecting any information you
            provide through our website.
          </p>

          <h2>Information We Collect</h2>

          <ul>
            <li>Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company Information</li>
            <li>RFQ and Product Enquiry Details</li>
            <li>Uploaded BOM or Supporting Documents</li>
          </ul>

          <h2>How We Use Information</h2>

          <ul>
            <li>Respond to enquiries and RFQs</li>
            <li>Provide quotations</li>
            <li>Support sourcing activities</li>
            <li>Improve customer experience</li>
          </ul>

          <h2>Data Security</h2>

          <p>
            We implement reasonable technical and
            organizational measures to protect customer
            information.
          </p>

          <h2>Contact</h2>

          <p>
            For privacy-related questions, please contact
            us through our Contact page.
          </p>
        </div>
      </Container>
    </main>
  );
}