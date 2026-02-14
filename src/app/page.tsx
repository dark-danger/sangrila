import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TeamSection } from "@/components/TeamSection";
import { RegistrationForm } from "@/components/RegistrationForm";

import { ContactSection } from "@/components/ContactSection";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <RegistrationForm />
      <TeamSection />

      <ContactSection />
    </main>
  );
}
