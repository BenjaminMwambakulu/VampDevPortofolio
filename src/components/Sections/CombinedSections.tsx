import ContactSection from "./ContactSection";
import CredentialsSection from "./CredentialsSection";
import FooterBillboard from "./FooterBillboard";
import { motion } from "framer-motion";

export default function CombinedFooter() {
  return (
    <footer className="bg-white text-neutral-900 border-t border-neutral-100 overflow-hidden py-24">
      <motion.div 
        className="max-w-7xl mx-auto px-6 md:px-12 space-y-28"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <CredentialsSection />
        <ContactSection />
        <FooterBillboard />
      </motion.div>
    </footer>
  );
}
