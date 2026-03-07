import dynamic from 'next/dynamic';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BackgroundEffects } from "@/components/BackgroundEffects";

// Dynamically import heavy components below the fold for faster initial load
const AboutSection = dynamic(() => import("@/components/AboutSection").then(mod => mod.AboutSection), {
  loading: () => <div className="min-h-[400px]" />,
});
const SponsorsSection = dynamic(() => import("@/components/SponsorsSection").then(mod => mod.SponsorsSection), {
  loading: () => <div className="min-h-[300px]" />,
});
const FoodStallsSection = dynamic(() => import("@/components/FoodStallsSection").then(mod => mod.FoodStallsSection), {
  loading: () => <div className="min-h-[200px]" />,
});
const EventsSection = dynamic(() => import("@/components/EventsSection").then(mod => mod.EventsSection), {
  loading: () => <div className="min-h-[400px]" />,
});
const StarPerformers = dynamic(() => import("@/components/StarPerformers").then(mod => mod.StarPerformers), {
  loading: () => <div className="min-h-[400px]" />,
});
const TeamSection = dynamic(() => import("@/components/TeamSection").then(mod => mod.TeamSection), {
  loading: () => <div className="min-h-[400px]" />,
});
const RegistrationForm = dynamic(() => import("@/components/RegistrationForm").then(mod => mod.RegistrationForm), {
  loading: () => <div className="min-h-[600px]" />,
});
const ContactSection = dynamic(() => import("@/components/ContactSection").then(mod => mod.ContactSection), {
  loading: () => <div className="min-h-[400px]" />,
});
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton").then(mod => mod.WhatsAppButton));


export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <AboutSection />
      <SponsorsSection />
      <FoodStallsSection />
      <EventsSection limit={8} />
      <StarPerformers />
      <RegistrationForm />
      <TeamSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  );
}

