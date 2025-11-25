import Navbar from "@/components/Navigation";
import ContactHero from "@/components/Contact Hero";
import ContactForm from "@/components/FormContact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#E3EFFF_30%,#F5F5F5_50%,#FFF5E6_100%)]">
      <main className="relative">
        <Navbar />
        <ContactHero />
        <ContactForm />
      </main>
    </div>
  );
}