import ContactSection from "./ContactSection";
import CredentialsSection from "./CredentialsSection";
import FooterBillboard from "./FooterBillboard";

export default function CombinedFooter() {
  return (
    <footer className="bg-white text-neutral-900 border-t border-neutral-100 overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-28">
        <CredentialsSection />
        <ContactSection />
        <FooterBillboard />
      </div>
    </footer>
  );
}
