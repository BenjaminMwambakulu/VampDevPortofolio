import ContactSection from "./ContactSection";
import CredentialsSection from "./CredentialsSection";
import FooterBillboard from "./FooterBillboard";

export default function CombinedFooter() {
  return (
    <footer className="bg-white text-neutral-900 border-t border-neutral-100 overflow-hidden pt-24">
      <div className="max-w-6xl mx-auto px-6">
        <CredentialsSection />
        <ContactSection />
        <FooterBillboard />
      </div>
    </footer>
  );
}
