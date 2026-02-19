import dynamic from 'next/dynamic';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BackgroundEffects } from "@/components/BackgroundEffects";

// Dynamically import heavy components below the fold for faster initial load
const TeamSection = dynamic(() => import("@/components/TeamSection").then(mod => mod.TeamSection), {
  loading: () => <div className="min-h-[400px]" />,
});
const RegistrationForm = dynamic(() => import("@/components/RegistrationForm").then(mod => mod.RegistrationForm), {
  loading: () => <div className="min-h-[600px]" />,
});
const ContactSection = dynamic(() => import("@/components/ContactSection").then(mod => mod.ContactSection), {
  loading: () => <div className="min-h-[400px]" />,
});


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
