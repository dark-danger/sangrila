import dynamic from 'next/dynamic';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BackgroundEffects } from "@/components/BackgroundEffects";

// Dynamically import heavy components below the fold for faster initial load
const AboutSection = dynamic(() => import("@/components/AboutSection").then(mod => mod.AboutSection), {
  loading: () => <div className="min-h-[400px]" />,
});
const StarPerformers = dynamic(() => import("@/components/StarPerformers").then(mod => mod.StarPerformers), {
  loading: () => <div className="min-h-[400px]" />,
});
const EventsSection = dynamic(() => import("@/components/EventsSection").then(mod => mod.EventsSection), {
  loading: () => <div className="min-h-[600px]" />,
});
const TeamSection = dynamic(() => import("@/components/TeamSection").then(mod => mod.TeamSection), {
  loading: () => <div className="min-h-[400px]" />,
});
const RegistrationForm = dynamic(() => import("@/components/RegistrationForm").then(mod => mod.RegistrationForm), {
  loading: () => <div className="min-h-[600px]" />,
});


export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <AboutSection />
      <StarPerformers />
      <EventsSection limit={8} />

      <RegistrationForm />
      <TeamSection />
    </main>
  );
}
